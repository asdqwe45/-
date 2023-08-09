import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

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
    backgroundColor: '#8F5E34',  // green color
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
        setSelectedDateTime(`${dateString}T${hourString}:00:00Z`);
    }

    const handleDateChange = async (date) => {
        if (date instanceof Event) {
            date = date.target.value;
        }

        setStartDate(date);
        let newDate = new Date(date);
        let dateString = newDate.toISOString().slice(0, -14);
        setSelectedDateTime(`${dateString}T00:00:00Z`);

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
                "token": token,
                "dogID": dogID,
                "type": selectedType,
                "time": selectedDateTime
            };
            const response = await axios.post('http://localhost:3001/reservation', payload);
            console.log(response.data);
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
            buttonStyle.backgroundColor = 'blue';
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

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1>여기는 예약페이지</h1>
            <p>예약</p>
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
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="visit"
                                        checked={selectedType === 'visit'}
                                        onChange={handleOptionChange}
                                    />
                                    Visit
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="play"
                                        checked={selectedType === 'play'}
                                        onChange={handleOptionChange}
                                    />
                                    Play
                                </label>
                            </div>
                        </form>
                        <div style={{ marginBottom: '10px' }}>{morningTimeOptions}</div>
                        <div>{afternoonTimeOptions}</div>
                        <p>Selected date and time: {selectedDateTime}</p>
                        <button style={completeReservationButtonStyle} onClick={sendReservationData}>Complete Reservation</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reservation;