import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('');
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nickname, setNickname] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check that name is at least 2 characters long
        if (name.length < 2) {
            alert('Name must be at least 2 characters long');
            return;
        }

        // Check that userID starts with a letter and is between 6 and 20 characters long
        const userIDPattern = /^[a-zA-Z][a-zA-Z0-9]{5,19}$/;
        if (!userIDPattern.test(userID)) {
            alert('UserID must start with a letter and be between 6 and 20 characters long');
            return;
        }

        // Check that phoneNumber is 6 digits
        const phoneNumberPattern = /^\d{11}$/;
        if (!phoneNumberPattern.test(phoneNumber)) {
            alert('Phone number must be 11 digits long');
            return;
        }

        // Check that email is in valid format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Email is not in valid format');
            return;
        }

        // Check that password and confirmPassword match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/user/signup', {
                Name: name,
                UserID: userID,
                Password: password,
                Email: email,
                PhoneNumber: phoneNumber,
                Nickname: nickname,
                Address: address,
                Admin: 0, // Assuming the value of Admin is 0 by default
            });
            if (response.data) {
                console.log(response.data);
                alert('Signed up successfully');
                navigate('/login');
            }
        } catch (error) {

            console.error(error.response);
            if (error.response && error.response.status === 403) {
                alert('User already registered!');
            } else {
                alert('Something went wrong!');
            }
        }
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Name: <input value={name} onChange={(e) => setName(e.target.value)} /></label><br />
                <label>User ID: <input value={userID} onChange={(e) => setUserID(e.target.value)} /></label><br />
                <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label><br />
                <label>Confirm Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></label><br />
                <label>Admin: <input type="checkbox" checked={admin} onChange={(e) => setAdmin(e.target.checked)} /></label><br />
                <label>Email: <input value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
                <label>Phone Number: <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></label><br />
                <label>Nickname: <input value={nickname} onChange={(e) => setNickname(e.target.value)} /></label><br />
                <label>Address: <input value={address} onChange={(e) => setAddress(e.target.value)} /></label><br />
                <button type="submit">Submit</button>
            </form>
            <Link to="/login">로그인페이지로</Link>
        </div>

    );
};

export default Signup;