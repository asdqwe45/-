import { Pagination } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import straydogdata from './straydogdata.json'
import { Link } from 'react-router-dom'
import './Straydog.css';

const dogImages = [
    ["/dog1.jpg", "/dog2.jpg", "/dog3.jpg", "/dog4.jpg", "/dog5.jpg", "/dog6.jpg", "/dog2.jpg", "/dog3.jpg", "/dog5.jpg", "/dog1.jpg", "/dog2.jpg", "/dog4.jpg", "/dog5.jpg", "/dog1.jpg", "/dog5.jpg", "/dog6.jpg"],
    ["/dog1.jpg", "/dog2.jpg", "/dog3.jpg", "/dog4.jpg", "/dog5.jpg", "/dog6.jpg", "/dog4.jpg", "/dog3.jpg", "/dog4.jpg", "/dog1.jpg", "/dog1.jpg", "/dog2.jpg", "/dog3.jpg", "/dog4.jpg", "/dog5.jpg", "/dog6.jpg"],
    // 추가 이미지 배열
];



const Straydog = () => {
    const [currentPage, setCurrentPage] = useState(0);
    console.log(straydogdata[1].Sex)

    return (




        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '60px' }}>
            <h1 style={{ marginTop: '140px' }}>입양견 목록 페이지 입니다.</h1>


            <table style={{ marginTop: '30px' }}>
                <tbody>
                    {Array.from({ length: 4 }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {dogImages[currentPage].slice(rowIndex * 4, rowIndex * 4 + 4).map((dogImage, index) => (
                                <td key={index}>

                                    <div class="flip">
                                        <div class="card">
                                            {/* <!-- 앞면 --> */}
                                            <div class="front">
                                                <Link to="/straydog-detail" className="nav-link active">
                                                    <img src={dogImage} alt={`Dog ${currentPage * 16 + rowIndex * 4 + index + 1}`} width="300" height="300" />
                                                </Link>
                                            </div>
                                            {/* <!-- 뒷면 --> */}
                                            <div class="back">
                                                <Link to="/straydog-detail" className="nav-link active">
                                                    <div className='dogbaiscinfodiv'>
                                                        <p>강아지 기본정보</p>
                                                    </div>


                                                </Link>
                                            </div>

                                        </div>
                                    </div>




                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination>
                <Pagination.Prev onClick={() => setCurrentPage(oldPage => Math.max(oldPage - 1, 0))} />
                {dogImages.map((_, index) => (
                    <Pagination.Item key={index} active={index === currentPage} onClick={() => setCurrentPage(index)}>
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(oldPage => Math.min(oldPage + 1, dogImages.length - 1))} />
            </Pagination>

        </div>




    );
};

export default Straydog;

