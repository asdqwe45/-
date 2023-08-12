import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Maincarousel = () => {
    return (
        <Carousel id="carouselExampleDark" variant="dark" className="fullscreen-carousel"
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
            <Carousel.Item interval={10000}>
                <img className="d-block w-100" src="/maindog11.jpg" alt="First slide" />
                <Carousel.Caption className="d-none d-md-block fadeIn">
                    <p style={{
                        fontSize: '75px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'black',
                        fontFamily: 'Arial Black',
                    }}>
                        Human,<br />
                        Dog,<br /><div style={{ border: ' solid', width: ' 350px', marginLeft: '170px', borderRadius: '10px' }}>
                            <Link to="/straydog" style={{
                                fontSize: '75px',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: 'black',
                                fontFamily: 'Arial Black', textDecoration: 'none'
                            }}>Family</Link></div>
                        <p style={{ whiteSpace: 'nowrap', fontSize: '20px', }}>Click it if you want to see our family</p>
                    </p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src="/maindog19.jpg" alt="Second slide" />
                <Carousel.Caption className="d-none d-md-block fadeIn">
                    <p style={{
                        fontSize: '75px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'black',
                        fontFamily: 'Arial Black',

                    }}>
                        Lost,<br />
                        <div style={{ display: 'flex', alignItems: 'center' }}>

                            <div style={{ border: ' solid', width: ' 350px', marginLeft: '220px', borderRadius: '10px' }}>
                                <Link to="/lostdog" style={{
                                    fontSize: '75px',
                                    fontStyle: 'italic',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    fontFamily: 'Arial Black', textDecoration: 'none'
                                }}>Find,</Link>
                            </div>
                            <span style={{ fontSize: '15px', marginLeft: '20px', fontSize: '20px', }}>Click it if you want to find your dog</span>
                        </div>

                        Hope
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/maindog17.jpg" alt="Third slide" />
                <Carousel.Caption className="d-none d-md-block fadeIn pad">
                    <p style={{ whiteSpace: 'nowrap', fontSize: '20px', fontWeight: 'bold', }}>Click it if you want to play with our dog</p>
                    <p style={{
                        fontSize: '75px',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'black',
                        fontFamily: 'Arial Black',
                    }}>
                        <div style={{ border: ' solid', width: ' 260px', borderRadius: '10px', }}>

                            <Link to="/recommenddog" style={{
                                fontSize: '75px',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: 'black',
                                fontFamily: 'Arial Black', textDecoration: 'none'
                            }}>Play,</Link></div>

                        Joy,<br />
                        Peace
                    </p>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};
export default Maincarousel;