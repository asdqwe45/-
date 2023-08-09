import React, { useState, useEffect, useRef } from 'react';
import Dots from './Dots';
import './Welcome.css';
import { Link } from 'react-router-dom';

const DIVIDER_HEIGHT = 5;

function Welcome() {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current;
            const pageHeight = window.innerHeight;

            if (deltaY > 0) {
                // Down Scroll
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // Page 1
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(2);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // Page 2
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
                } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
                    // Page 3
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(4);
                } else {
                    // Page 4
                    setScrollIndex(4);
                }
            } else {
                // Up Scroll
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // Page 1
                    setScrollIndex(1);
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // Page 2
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(1);
                } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
                    // Page 3
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(2);
                } else {
                    // Page 4
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setScrollIndex(3);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        };
    }, []);

    return (
        <div ref={outerDivRef} className="outer welcomebody">
            <nav className="navbar navbar-expand-lg bg-body-none fixed-top">
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
                        <Link to="" className="navbar-brand">
                            <img src="/mainlogo.png" alt="" width="150" height="80" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>



                    <div style={{
                        flex: '1',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }} className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto pad">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" >
                                    <p style={{ marginTop: '18px', fontWeight: 'bolder', fontFamily: 'Arial' }}>Login</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link" >
                                    <p style={{ marginTop: '18px', fontWeight: 'bolder', fontFamily: 'Arial' }}>Signup</p>
                                </Link>
                            </li>






                        </ul>
                    </div>
                </div>
            </nav>

            <Dots scrollIndex={scrollIndex} />
            <div className="inner bg-1">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/weldog1.png" alt="" width="600" height="600" />
                    <p>Your Text for Image 1</p>
                </div>
            </div>
            <div className="divider"></div>

            <div className="inner bg-2">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p>Your Text for Image 2</p>
                    <img src="/weldog2.png" alt="" width="400" height="400" style={{ paddingLeft: '150px' }} />

                </div>
            </div>
            <div className="divider"></div>

            <div className="inner bg-3">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/weldog3.png" alt="" width="400" height="400" style={{ paddingRight: '150px' }} />
                    <p>Your Text for Image 3</p>
                </div>
            </div>
            <div className="divider"></div>

            <div className="inner bg-4">


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
        </div>
    );
}

export default Welcome;