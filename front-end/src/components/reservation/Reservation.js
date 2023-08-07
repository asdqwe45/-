import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import axios from 'axios'; // Import axios
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS


// {
//     "09:00": true,
//     "10:00": false,
//     "11:00": true,
//     "12:00": false,
//     "13:00": true,
//     "14:00": false,
//     "15:00": true,
//     "16:00": false,
//     "17:00": true
//   }
// 이런식으로 요청 받아서 시간대 별로 예약이 이미 되어있음을 표시해주면 됨
// 일자도 예약이 다 차있다고 표시할지 말지?





const Reservation = () => {

    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleAgreementChange = (e) => {
        setAgreedToTerms(e.target.checked);
    }

    const location = useLocation();
    const { dogID, } = location.state || { dogID: "", };
    const token = localStorage.getItem('rasyueToken');

    // State to keep track of selected type
    const [selectedType, setSelectedType] = useState('visit');
    const [selectedTime, setSelectedTime] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDateTime, setSelectedDateTime] = useState(''); // To display selected date and time


    const handleOptionChange = (e) => {
        setSelectedType(e.target.value);
    }

    const handleTimeChange = (time) => {
        setSelectedTime(time); // Update the selected time
        let newDate = new Date(startDate);
        let hourString = time < 10 ? `0${time}` : `${time}`;
        let dateString = newDate.toISOString().substring(0, 10);
        setSelectedDateTime(`${dateString}T${hourString}:00:00Z`);
    }

    const handleDateChange = (date) => {
        setStartDate(date);
        let newDate = new Date(date);
        // newDate.setHours(0, 0, 0);
        let dateString = newDate.toISOString();
        dateString = dateString.slice(0, -14);  // remove the milliseconds
        setSelectedDateTime(`${dateString}T00:00:00Z`);
    }

    const sendReservationData = async () => {
        try {
            const payload = {
                "token": token,
                "dogID": dogID,
                "type": selectedType,
                "time": selectedDateTime
            };
            const response = await axios.post('/api/reservation', payload);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(token);
    console.log(dogID);
    console.log(selectedType); // Log the selected type
    console.log(selectedDateTime)






    const timeOptions = []; // Array to hold the time options
    for (let i = 9; i <= 17; i++) {
        const buttonStyle = selectedTime === i
            ? { backgroundColor: 'blue', color: 'white' }
            : {};
        timeOptions.push(
            <button
                key={i}
                style={buttonStyle}
                onClick={() => handleTimeChange(i)}
            >
                {i}:00
            </button>
        );
    }


    // let selectedDate = new Date(selectedDateTime);
    // console.log(selectedDate)
    // let year = selectedDate.getFullYear();
    // let month = selectedDate.getMonth() + 1; // Months are zero-based
    // let day = selectedDate.getDate();
    // let hour = selectedDate.getHours();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1>여기는 예약페이지</h1>
            <p>예약</p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', width: '500px', border: 'solid' }}>
                <p>동의서약서 내용</p>
            </div>

            {/* Add a checkbox for the agreement */}
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
            {agreedToTerms && (
                <>
                    <DatePicker
                        inline // This will make the datepicker inline
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
                    <div>{timeOptions}</div> {/* Render the time options */}
                    <p>Selected date and time: {selectedDateTime}</p> {/* Display the selected date and time */}
                    <button onClick={sendReservationData}>Complete Reservation</button> {/* Call the function on button click */}
                </>
            )}
        </div>
    );
};

export default Reservation;