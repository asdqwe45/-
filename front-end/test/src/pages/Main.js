import { Link } from 'react-router-dom'
import {useState} from 'react';
import Straydog from 'C:/Users/SSAFY/Desktop/test/src/components/straydog/Straydog'
import StraydogGuide from 'C:/Users/SSAFY/Desktop/test/src/components/straydog/StraydogGuide'

const Main = () => {
    const [page, setPage] = useState(0);
    let content = null; // 여기에 메인 페이지
    console.log(page)

    if(page === 1) {
        content = <Straydog />
    } else if(page === 2) {
        content = <StraydogGuide />
    }

    return (
        <div>
            <Link to ="/main"><h1>홈</h1></Link>
            <p>메인 페이지입니다.</p>
            <Link to ="/aboutus">소개</Link>
            <br/>
            <Link to ="/main/straydog" onClick={() => {
                setPage(1)
            }}>택우</Link>
            <span> || </span>
            <Link to ="/main/straydog-guide" onClick={() => {
                setPage(2)
            }}>진솔</Link>
            <span> || </span>
            <Link to ="/stray-dog-">재명</Link>
            <span> || </span>
            <Link to ="">민규</Link>
            <span> || </span>
            <Link to ="">우진</Link>
            <span> || </span>
            <Link to ="">연주</Link>
            <span> || </span>
            <Link to ="">예지</Link>
            <span> || </span>
            <Link to ="">정원</Link>
            <span> || </span>
            <Link to ="">수원</Link>
            <span> || </span>
            <Link to ="">태원</Link>
            <span> || </span>
            <hr/>
            {content}
            
        </div>
        
    );
};

export default Main;