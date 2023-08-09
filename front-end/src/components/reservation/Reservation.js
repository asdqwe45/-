import { Link } from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";



const optionContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10px',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    justifyContent: 'center', // added this line
    alignItems: 'center'      // added this line
};

const selectedOptionStyle = {
    backgroundColor: '#8F5E34', // a shade of brown
    color: 'white',
};

const optionLabelStyle = {
    fontSize: '18px',
    // marginLeft: '10px',
};

const parseTimeData = (data) => {
    const parsed = {};
    data.forEach(item => {
        const [hour, available] = item.split(' : ');
        parsed[hour] = available === 'true';
    });
    return parsed;
}

const completeReservationButtonStyle = {
    padding: '12px 15px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    backgroundColor: '#DB7B0A',  // green color
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',  // some space from the above content
    ':hover': {
        backgroundColor: '#45a049'  // slightly darker green on hover
    }
};

const Reservation = () => {
    const [receivedData, setReceivedData] = useState([]);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [availabilityData, setAvailabilityData] = useState({});
    const location = useLocation();
    const { dogID, } = location.state || { dogID: "", };
    const token = localStorage.getItem('rasyueToken');
    const [selectedType, setSelectedType] = useState('visit');
    const [selectedTime, setSelectedTime] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDateTime, setSelectedDateTime] = useState('');

    const navigation = useNavigate();


    useEffect(() => {
        handleDateChange(startDate);
    }, [selectedType, startDate]);

    const handleAgreementChange = (e) => {
        setAgreedToTerms(e.target.checked);
        if (e.target.checked) {
            handleDateChange(startDate);
        }
    }

    const handleOptionChange = (e) => {
        setSelectedType(e.target.value);
        handleDateChange(startDate);
    }

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        let newDate = new Date(startDate);
        let hourString = time < 10 ? `0${time}` : `${time}`;
        let dateString = newDate.toISOString().substring(0, 10);
        setSelectedDateTime(`${dateString}T${hourString}:00`);
    }

    const handleDateChange = async (date) => {
        if (date instanceof Event) {
            date = date.target.value;
        }

        setStartDate(date);
        let newDate = new Date(date);
        let dateString = newDate.toISOString().slice(0, -14);
        setSelectedDateTime(`${dateString}T00:00`);


        try {
            const response = await axios.get(`http://localhost:3001/reservation/state?date=${dateString}`);
            setReceivedData(response.data);
            const timeDataForSelectedType = response.data[`type: ${selectedType}`] || [];
            const parsedData = parseTimeData(timeDataForSelectedType);
            setAvailabilityData(parsedData);
        } catch (error) {
            console.log(error);
        }
    }

    const sendReservationData = async () => {
        try {
            const payload = {
                // "token": token,
                "DogID": dogID,
                "ReservationDatetime": selectedDateTime,
                "Type": selectedType,
                "seq": 0,
                "Confirm": ""
            };

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}` // 토큰을 Bearer 토큰 형식으로 포함
                }
            };
            const response = await axios.post('http://localhost:3001/reservation', payload, config);
            console.log(response.data);

            alert("예약이 완료되었습니다!");
            navigation("/mypage");
        } catch (error) {
            console.log(error);
        }
    }

    const morningTimeOptions = [];
    const afternoonTimeOptions = [];

    for (let i = 9; i <= 17; i++) {
        const isAvailable = availabilityData[i.toString()];

        let buttonStyle = {
            padding: '8px 10px',
            margin: '5px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
        };

        if (selectedTime === i) {
            buttonStyle.backgroundColor = '#8F5E34';
            buttonStyle.color = 'white';
        } else if (isAvailable) {
            buttonStyle.backgroundColor = '#e0e0e0';
            buttonStyle.color = '#a0a0a0';
            buttonStyle.cursor = 'not-allowed';
        } else {
            buttonStyle.backgroundColor = '#f5f5f5';
        }

        const button = (
            <button
                key={i}
                style={buttonStyle}
                onClick={() => handleTimeChange(i)}
                disabled={isAvailable}
            >
                {isAvailable ? "예약중" : `${i}:00`}
            </button>
        );

        if (i <= 12) {
            morningTimeOptions.push(button);
        } else {
            afternoonTimeOptions.push(button);
        }
    }

    const formatDateAndTime = (isoString) => {
        if (!isoString) return '';

        const dateObj = new Date(isoString);
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const date = dateObj.getDate().toString().padStart(2, '0');
        const hours = dateObj.getHours().toString().padStart(2, '0');
        const minutes = dateObj.getMinutes().toString().padStart(2, '0');

        return `예약날짜 : ${year}-${month}-${date} ${hours}:${minutes}`;
    }
    console.log(token)
    console.log(dogID)
    console.log(selectedType)
    console.log(selectedDateTime)


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1>예약페이지</h1>
            <p style={{ textAlign: 'center' }}>방문 및 강아지 놀아주기 예약페이지 입니다. <br />한시간 단위로 예약이 가능하고 예약중에 있는 시간 예약이 불가능합니다.</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '500px', width: '500px', border: 'solid', marginRight: '20px' }}>
                    <p>동의서약서 내용</p>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={agreedToTerms}
                                onChange={handleAgreementChange}
                            />
                            I agree to the terms and conditions.
                        </label>
                    </div>
                </div>
                {agreedToTerms && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DatePicker
                            inline
                            selected={startDate}
                            onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                        />
                        <form>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <div
                                    style={{
                                        ...optionContainerStyle,
                                        ...(selectedType === 'visit' ? selectedOptionStyle : {}),
                                        marginRight: '15px' // To give some space between the two options
                                    }}
                                    onMouseEnter={() => {
                                        document.body.style.cursor = 'pointer';
                                    }}
                                    onMouseLeave={() => {
                                        document.body.style.cursor = 'default';
                                    }}
                                    onClick={() => setSelectedType('visit')}
                                >
                                    <input
                                        type="radio"
                                        value="visit"
                                        checked={selectedType === 'visit'}
                                        onChange={handleOptionChange}
                                        style={{ display: 'none' }}
                                    />
                                    <label style={optionLabelStyle}>Visit</label>
                                </div>
                                <div
                                    style={{
                                        ...optionContainerStyle,
                                        ...(selectedType === 'play' ? selectedOptionStyle : {})
                                    }}
                                    onMouseEnter={() => {
                                        document.body.style.cursor = 'pointer';
                                    }}
                                    onMouseLeave={() => {
                                        document.body.style.cursor = 'default';
                                    }}
                                    onClick={() => setSelectedType('play')}
                                >
                                    <input
                                        type="radio"
                                        value="play"
                                        checked={selectedType === 'play'}
                                        onChange={handleOptionChange}
                                        style={{ display: 'none' }}
                                    />
                                    <label style={optionLabelStyle}>Play</label>
                                </div>
                            </div>
                        </form>
                        <div style={{ marginBottom: '10px' }}>{morningTimeOptions}</div>
                        <div>{afternoonTimeOptions}</div>
                        <p>{formatDateAndTime(selectedDateTime)}</p>
                        <button style={completeReservationButtonStyle} onClick={sendReservationData}>Complete Reservation</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reservation;