import { Link } from 'react-router-dom'
import { useState } from 'react';
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
import './Main.css';



const Main = () => {
    const [page, setPage] = useState('main');
    let content = <h2>메인입니다.</h2>; // 여기에 메인 페이지
    console.log(page)

    if (page === 'straydog') {
        content = <Straydog />
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
        <div style={{
            backgroundImage: `url("/maindog.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',

            height: '100vh',
            width: '100vw'
        }}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><Link to="/main" onClick={() => {
                        setPage('main')
                    }}><h1>Logo</h1></Link></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><Link to="/mypage" onClick={() => {
                                    setPage('mypage')
                                }}>My Page</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Link to="/ucc" onClick={() => {
                                    setPage('ucc')
                                }}>Youtube</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Link to="/aboutus" onClick={() => {
                                    setPage('aboutus')
                                }}>about us</Link></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Link to="/main" onClick={() => {
                setPage('main')
            }}><h1>홈</h1></Link> */}


            {/* NAVBAR */}
            {/* <Link to="/mypage" onClick={() => {
                setPage('mypage')
            }}>마이페이지</Link>
            <span> || </span>
            <Link to="/ucc" onClick={() => {
                setPage('ucc')
            }}>Youtube</Link>
            <span>||</span>
            <Link to="/aboutus" onClick={() => {
                setPage('aboutus')
            }}>about us</Link> */}

            <br />
            <hr />
            <h1> Welcome</h1>
            <hr />

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <nav id="topMenu">
                    <ul>
                        <li className="topMenuLi">
                            <a className="menuLink" href="#">유기견</a>
                            <ul className="submenu">
                                <li><a href="#" className="submenuLink longLink"><Link to="/straydog" onClick={() => {
                                    setPage('straydog')
                                }}>유기견 목록</Link></a></li>
                                <li><a href="#" className="submenuLink longLink"><Link to="/straydog-guide" onClick={() => {
                                    setPage('straydog-guide')
                                }}>입양가이드</Link></a></li>
                                <li><a href="#" className="submenuLink longLink"><Link to="/straydog-success" onClick={() => {
                                    setPage('straydog-success')
                                }}>입양완료</Link></a></li>
                                <li><a href="#" className="submenuLink longLink"><Link to="/straydog-fail" onClick={() => {
                                    setPage('straydog-fail')
                                }}>추모</Link></a></li>

                            </ul>
                        </li>
                        <li>|</li>
                        <li className="topMenuLi">
                            <a className="menuLink" href="#">분실견</a>
                            <ul className="submenu">
                                <li><a href="#" className="submenuLink"><Link to="/lostdog" onClick={() => {
                                    setPage('lostdog')
                                }}>분실견</Link></a></li>

                            </ul>
                        </li>
                        <li>|</li>
                        <li className="topMenuLi">
                            <a className="menuLink" href="#">놀아주기</a>
                            <ul className="submenu">
                                <li><a href="#" className="submenuLink"><Link to="/remoteplay" onClick={() => {
                                    setPage('remoteplay')
                                }}>원격놀이</Link></a></li>
                                <li><a href="#" className="submenuLink"><Link to="/remoteplay-guide" onClick={() => {
                                    setPage('remoteplay-guide')
                                }}>이용가이드</Link></a></li>

                            </ul>
                        </li>
                        <li>|</li>
                        <li className="topMenuLi">
                            <a className="menuLink" href="#">게시판</a>
                            <ul className="submenu ">
                                <li><a href="#" className="submenuLink">1</a></li>
                                <li><a href="#" className="submenuLink">2</a></li>
                                <li><a href="#" className="submenuLink">3</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* STRAYDOG
            <Link to="/straydog" onClick={() => {
                setPage('straydog')
            }}>유기견</Link>
            <span> || </span>
            <Link to="/straydog-guide" onClick={() => {
                setPage('straydog-guide')
            }}>입양가이드</Link>
            <span> || </span>
            <Link to="/straydog-success" onClick={() => {
                setPage('straydog-success')
            }}>입양완료</Link>
            <span> || </span>
            <Link to="/straydog-fail" onClick={() => {
                setPage('straydog-fail')
            }}>추모</Link>
            <hr /> */}



            {/* LOSTDOG */}
            {/* <Link to="/lostdog" onClick={() => {
                setPage('lostdog')
            }}>분실견</Link>
            <hr /> */}



            {/* REMOTEPLAY */}
            {/* <Link to="/remoteplay" onClick={() => {
                setPage('remoteplay')
            }}>원격놀이</Link>
            <span> || </span>
            <Link to="/remoteplay-guide" onClick={() => {
                setPage('remoteplay-guide')
            }}>이용가이드</Link>
            <hr /> */}

            {content}

        </div>

    );
};

export default Main;