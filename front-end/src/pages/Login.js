import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h1>여기는 로그인 페이지</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to="/login">로그인</Link>

            <br />

            <Link to="/main">임시 메인페이지로</Link>
        </div>

    );
};

export default Login;