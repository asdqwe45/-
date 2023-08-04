import { Link, useNavigate, } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { setToken } from "./Auth";


export default (props) => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const navigate = useNavigate();

    const handleInputId = (e) => {
        setInputId(e.target.value); // react input 입력값 가져오기.
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const onClickLogin = () => {
        console.log('들어옴?')
        axios
            .post("http://localhost:3001/user/login", {
                UserID: inputId,
                Password: inputPw,
            })
            // console.log()
            .then((res) => {
                console.log(res.data.accessToken)
                if (res.data.accessToken) {
                    setToken(res.data.accessToken);
                    navigate("/main");

                }
            })
            .catch((error) => {
                console.log(error, "error");
                alert('아이디 혹은 비밀번호가 틀렸습니다.');
            });

    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor="input_id">ID : </label>
                <input
                    type="text"
                    name="input_id"
                    value={inputId}
                    onChange={handleInputId}
                />
            </div>
            <div>
                <label htmlFor="input_pw">PW : </label>
                <input
                    type="password"
                    name="input_pw"
                    value={inputPw}
                    onChange={handleInputPw}
                />
            </div>

            <div>
                <button type="button" onClick={onClickLogin}>
                    Login
                </button>
            </div>
            <div>
                <Link to="/signup">회원가입</Link>
            </div>
        </div>
    );
};