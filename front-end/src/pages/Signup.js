import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Signup.css';

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
            const response = await axios.post('/api/user/signup', {
                Name: name,
                UserID: userID,
                Password: password,
                Email: email,
                PhoneNumber: phoneNumber,
                Nickname: nickname,
                Address: address,
                Admin: admin ? 1 : 0, // Assuming the value of Admin is 0 by default
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
        <div className="spage">

            <div className="scontainer">
                <div className="sleft" style={{ borderRadius: '40px' }}>
                    <div className="slogin">Signup</div>
                    <div className="seula">
                        {/* <li>New Here?</li> */}
                        <li>One of us?<br />
                            If you already has an account, just sign in. We've missed you!</li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </div>
                </div>

                <div className="sright" style={{ borderRadius: '40px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="sform" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div >
                                <label className='slabel'>Name: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} value={name} onChange={(e) => setName(e.target.value)} /></label><br />
                                <label className='slabel'>User ID: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} value={userID} onChange={(e) => setUserID(e.target.value)} /></label><br />
                                <label className='slabel'>Password: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label><br />
                                <label className='slabel'>Confirm Password: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></label><br />
                                <label className='slabel'>Admin: <input className='sinput' type="checkbox" checked={admin} onChange={(e) => setAdmin(e.target.checked)} /></label><br />
                            </div>
                            <div>
                                <label className='slabel'>Email: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
                                <label className='slabel'>Phone Number: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></label><br />
                                <label className='slabel'>Nickname: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} value={nickname} onChange={(e) => setNickname(e.target.value)} /></label><br />
                                <label className='slabel'>Address: <input className='sinput' style={{ border: 'inset', marginTop: '10px' }} value={address} onChange={(e) => setAddress(e.target.value)} /></label><br />
                                <label className='slabel'><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <button type="submit" className='ssubmit'>Submit</button>
                                </div></label>
                            </div>

                        </div>


                    </form>

                </div>






            </div>
        </div >




    );
};

export default Signup;