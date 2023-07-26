import { Link } from 'react-router-dom'
import { useState } from 'react';
import Straydog from '../components/straydog/Straydog'
import StraydogDetail from '../components/straydog/StraydogDetail'
import StraydogGuide from '../components/straydog/StraydogGuide'
import StraydogSuccess from '../components/straydog/StraydogSuccess'
import StraydogFail from '../components/straydog/StraydogFail'
import Lostdog from '../components/lostdog/Lostdog'
import Remoteplay from '../components/remoteplay/Remoteplay'
import RemoteplayGuide from '../components/remoteplay/RemoteplayGuide'
import Aboutus from '../components/navbar/Aboutus'
import YoutubeUCC from '../components/navbar/YoutubeUCC'
import Mypage from '../components/navbar/Mypage'
import './Main.css';



const Main = (props) => {

    let content = <h2>메인입니다.</h2>; // 여기에 메인 페이지

    const page = props.page
    console.log(page)
    if (page === 'straydog') {
        content = <Straydog />
    } else if (page === 'straydog-detail') {
        content = <StraydogDetail />
    } else if (page === 'straydog-guide') {
        content = <StraydogGuide />
    } else if (page === 'straydog-success') {
        content = <StraydogSuccess />
    } else if (page === 'straydog-fail') {
        content = <StraydogFail />
    } else if (page === 'lostdog') {
        content = <Lostdog />
    } else if (page === 'remoteplay') {
        content = <Remoteplay />
    } else if (page === 'remoteplay-guide') {
        content = <RemoteplayGuide />
    } else if (page === 'aboutus') {
        content = <Aboutus />
    } else if (page === 'ucc') {
        content = <YoutubeUCC />
    } else if (page === 'mypage') {
        content = <Mypage />
    }

    return (

        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div className="container-fluid" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'

                    }}>
                        <div style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'flex-start'
                        }}>
                            <Link to="/main" className="navbar-brand">
                                <img src="/mainlogo.png" alt="" width="150" height="80" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>


                        <div style={{
                            flex: '2',
                            display: 'flex',
                            justifyContent: 'center',
                        }} >
                            <nav id="topMenu">
                                <ul>
                                    <li className="topMenuLi">
                                        <a className="menuLink bg-body-tertiary" href="#">유기견</a>
                                        <ul className="submenu">
                                            <li><Link className="submenuLink longLink" to="/straydog">유기견 목록</Link></li>
                                            <li><Link className="submenuLink longLink" to="/straydog-guide">입양가이드</Link></li>
                                            <li><Link className="submenuLink longLink" to="/straydog-success">입양완료</Link></li>
                                            <li><Link className="submenuLink longLink" to="/straydog-fail">추모</Link></li>

                                        </ul>
                                    </li>
                                    <li>|</li>
                                    <li className="topMenuLi bg-body-tertiary">
                                        <a className="menuLink" href="#">분실견</a>
                                        <ul className="submenu">
                                            <li><Link className="submenuLink longLink" to="/lostdog">분실견 목록</Link></li>

                                        </ul>
                                    </li>
                                    <li>|</li>
                                    <li className="topMenuLi bg-body-tertiary">
                                        <a className="menuLink" href="#">놀아주기</a>
                                        <ul className="submenu">
                                            <li><Link className="submenuLink longLink" to="/remoteplay">원격놀이</Link></li>
                                            <li><Link className="submenuLink longLink" to="/remoteplay-guide">이용가이드</Link></li>

                                        </ul>
                                    </li>
                                    <li>|</li>

                                </ul>
                            </nav>


                        </div>



                        <div style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }} className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">
                                    <Link to="/mypage" className="nav-link active">My Page</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/ucc" className="nav-link" >
                                        <img src="/youtubelogo.png" alt="" width="65" height="65" />
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">
                                        <p style={{ marginTop: '18px', fontWeight: 'bolder', fontFamily: 'Arial' }}>about us</p>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div >


            <br />


            <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> Welcome</h1>

            <hr />
            <br />


            <div >
                {content}
            </div>
            <hr />
            <div style={{ marginTop: '60px', marginLeft: '60px' }}>

                <p>(주) 백문이불여일犬
                    <br />
                    Address : 광주시 광산구 장덕동 삼성사업장
                    <br />
                    <br />
                    사업자 번호 : 2225-896866
                    <br />
                    TEL : 010-8664-2108   FAX : 050-5656-8585
                    EMAIL : woojin0321@naver.com
                    <br />
                    All Photo by ⓒ Tom Crew on Unsplash view
                </p>

            </div>


        </div >

    );
};

export default Main;