import { Pagination } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Straydog.css';
import ReactPaginate from 'react-paginate';

function chunkArray(array, size) {
    const chunked_arr = [];
    let copied = [...array];

    while (copied.length > 0) {
        chunked_arr.push(copied.splice(0, size));
    }
    return chunked_arr;
}



function StraydogFail() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    // console.log(data.length)

    const dataChunks = chunkArray(data, 3);







    // fetch data
    const perPage = 12; // items per page
    // total page count (24 items / 3 items per page = 8 pages)

    // fetch data
    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get(`/api/deaddog?page=${currentPage + 1}&pageSize=${perPage}`);

            setData(response.data.DeadDog); // set data
            setTotalPage(Math.ceil(response.data.totalItem / perPage));
            console.log(response.data)
        }
        fetchData();
    }, [currentPage, perPage]);

    // handle page click
    const handlePageClick = (data) => {
        let selected = data.selected;
        setCurrentPage(selected);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1 style={{ paddingBottom: '20px', fontFamily: 'GmarketSansMedium' }}>| 추모 |</h1>
            <p style={{ fontFamily: 'GmarketSansMedium', textAlign: 'center', }} >저희 보호소에서 머물다 무지개 다리를 건넌 아이들입니다. <br />같이 추모해주시면 감사드리겠습니다.</p>
            <table>
                <tbody >
                    {dataChunks.map((chunk, i) =>
                        <tr key={i} >
                            {chunk.map(item =>
                                <td key={item.DogId} >

                                    <div className="flip" >
                                        <div className="card" >
                                            {/* <!-- 앞면 --> */}
                                            <div className="front" style={{ position: 'relative' }}>
                                                <img src={`/uploads/${item.Image}`} alt={item.DogId} style={{ width: '300px', height: '300px', borderRadius: '5px' }} className="nav-link active" />
                                                <div>
                                                    {item.Status === 'Dead'
                                                        ? <img src='rainbow.jpg' alt={item.DogId} style={{ width: '290px', height: '290px', borderRadius: '5px', position: 'absolute', left: '0px', top: '0px' }} className="nav-link active" />

                                                        : null
                                                    }
                                                </div>
                                            </div>
                                            {/* <!-- 뒷면 --> */}
                                            <div className="back">
                                                <div className='dogbaiscinfodiv' style={{ borderRadius: '5px' }}>
                                                    <div>

                                                        <p style={{ fontFamily: 'GmarketSansMedium' }}>
                                                            나이 : {item.Age}
                                                        </p>
                                                        <p style={{ fontFamily: 'GmarketSansMedium' }}>
                                                            성별 : {item.Sex}
                                                        </p>
                                                        <p style={{ fontFamily: 'GmarketSansMedium' }}>
                                                            견종 : {item.DogID}
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>


                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>

            <ReactPaginate
                previousLabel={"◁"}
                nextLabel={"▷"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />

        </div>
    );
}
export default StraydogFail