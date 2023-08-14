import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function DogInfoShow() {
    const [dogs, setDogs] = useState([]);
    const [totalItem, setTotalItem] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const perPage = 10; // 페이지당 항목 수

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/api/admin/dogs?page=${currentPage + 1}&pageSize=${perPage}`);

            setDogs(response.data.dog);
            setTotalItem(response.data.totalItem);
            setTotalPage(Math.ceil(response.data.totalItem / perPage));
        }
        fetchData();
    }, [currentPage, perPage]);

    // 페이지 클릭 처리
    const handlePageClick = (data) => {
        let selected = data.selected;
        setCurrentPage(selected);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1 style={{ paddingBottom: '50px', fontFamily: 'GmarketSansMedium' }}>강아지 정보 (총 {totalItem}마리)</h1>

            <table style={{ marginTop: '50px', width: '80%' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>DogID</th>
                        <th style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>이름</th>
                        <th style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>품종</th>
                        <th style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>나이</th>
                    </tr>
                </thead>
                <tbody>
                    {dogs.map(dog =>
                        <tr key={dog.dogid}>
                            <td style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>{dog.dogid}</td>
                            <td style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>{dog.name}</td>
                            <td style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>{dog.breed}</td>
                            <td style={{ textAlign: 'center', fontFamily: 'GmarketSansMedium' }}>{dog.age}</td>
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

export default DogInfoShow;