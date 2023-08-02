import { Pagination } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../straydog/Straydog.css';
import ReactPaginate from 'react-paginate';


function chunkArray(array, size) {
    const chunked_arr = [];
    let copied = [...array];

    while (copied.length > 0) {
        chunked_arr.push(copied.splice(0, size));
    }
    return chunked_arr;
}



function Lostdog() {
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

            const response = await axios.get(`/lostdog?page=${currentPage + 1}&pageSize=${perPage}`);

            setData(response.data.lostDog); // set data
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '200px' }}>
            <p>분실견 페이지입니다.</p>
            <table style={{ marginTop: '140px' }}>
                <tbody >
                    {dataChunks.map((chunk, i) =>
                        <tr key={i} >
                            {chunk.map(item =>
                                <td key={item.DogId} >

                                    <div className="flip" >
                                        <div className="card" >
                                            {/* <!-- 앞면 --> */}
                                            <div className="front">

                                                <img src={item.Image} alt={item.DogId} style={{ width: '300px', height: '300px', }} className="nav-link active" />


                                            </div>
                                            {/* <!-- 뒷면 --> */}
                                            <div className="back">
                                                <Link to={{ pathname: `/lostdog-detail/${item.DogID}` }} className="nav-link active" state={{ dogID: item.dogID }}>
                                                    <div className='dogbaiscinfodiv'>
                                                        <div>

                                                            <p>
                                                                나이 : {item.Age}
                                                            </p>
                                                            <p>
                                                                성별 : {item.Sex}
                                                            </p>
                                                            <p>
                                                                견종 : {item.DogID}
                                                            </p>

                                                        </div>
                                                    </div>


                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                    {/* <img src={item.Image} alt={item.DogId} style={{ width: '300px', height: '300px', }} />
                                    <p>{item.Sex}</p>
                                    <p>{item.Age}</p>
                                    <p>{item.DogID}</p> */}

                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>

            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
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
export default Lostdog