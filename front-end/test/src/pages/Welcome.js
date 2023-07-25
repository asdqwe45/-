import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>여기는 웰컴 페이지</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <Link to ="/main">홈</Link>--------
            <Link to ="/aboutus">소개</Link>
        </div>
        
    );
};

export default Welcome;