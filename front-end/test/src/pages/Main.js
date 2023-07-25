import { Link } from 'react-router-dom'
import {useState} from 'react';
import Straydog from '../components/straydog/Straydog'
import StraydogGuide from '../components/straydog/StraydogGuide'
import StraydogSuccess from '../components/straydog/StraydogSuccess'
import StraydogFail from '../components/straydog/StraydogFail'
import Lostdog from '../components/lostdog/Lostdog'
import Remoteplay from '../components/remoteplay/Remoteplay'
import RemoteplayGuide from '../components/remoteplay/RemoteplayGuide'
import Aboutus from '../components/navbar/Aboutus'
import YoutubeUCC from '../components/navbar/YoutubeUCC'
import Mypage from '../components/navbar/Mypage'



const Main = () => {
    const [page, setPage] = useState('main');
    let content = <h2>메인입니다.</h2>; // 여기에 메인 페이지
    console.log(page)

    if(page === 'straydog') {
        content = <Straydog />
    } else if(page === 'straydog-guide') {
        content = <StraydogGuide />
    } else if(page === 'straydog-success') {
        content = <StraydogSuccess />
    } else if(page === 'straydog-fail') {
        content = <StraydogFail />
    } else if(page === 'lostdog') {
        content = <Lostdog />
    } else if(page === 'remoteplay') {
        content = <Remoteplay />
    } else if(page === 'remoteplay-guide') {
        content = <RemoteplayGuide />
    } else if(page === 'aboutus') {
        content = <Aboutus />
    } else if(page === 'ucc') {
        content = <YoutubeUCC />
    } else if(page === 'mypage') {
        content = <Mypage />
    }

    return (
        <div>
            <Link to ="/main" onClick={() => {
                setPage('main')
            }}><h1>홈</h1></Link>
            

            {/* NAVBAR */}
            <Link to ="/mypage" onClick={() => {
                setPage('mypage')
            }}>마이페이지</Link>
            <span> || </span>
            <Link to ="/ucc" onClick={() => {
                setPage('ucc')
            }}>Youtube</Link>
            <span>||</span>
            <Link to ="/aboutus" onClick={() => {
                setPage('aboutus')
            }}>about us</Link>
            
            <br/>
            <hr/>
            <h1> 큰 그림이나 뭐나 들어가겠죠</h1>
            <hr/>



            {/* STRAYDOG */}
            <Link to ="/straydog" onClick={() => {
                setPage('straydog')
            }}>유기견</Link>
            <span> || </span>
            <Link to ="/straydog-guide" onClick={() => {
                setPage('straydog-guide')
            }}>입양가이드</Link>
            <span> || </span>
            <Link to ="/straydog-success" onClick={() => {
                setPage('straydog-success')
            }}>입양완료</Link>
            <span> || </span>
            <Link to ="/straydog-fail" onClick={() => {
                setPage('straydog-fail')
            }}>추모</Link>
            <hr/>



            {/* LOSTDOG */}
            <Link to ="/lostdog" onClick={() => {
                setPage('lostdog')
            }}>분실견</Link>
            <hr/>



            {/* REMOTEPLAY */}
            <Link to ="/remoteplay" onClick={() => {
                setPage('remoteplay')
            }}>원격놀이</Link>
            <span> || </span>
            <Link to ="/remoteplay-guide" onClick={() => {
                setPage('remoteplay-guide')
            }}>이용가이드</Link>
            <hr/>

            {content}
            
        </div>
        
    );
};

export default Main;