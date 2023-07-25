import { Pagination } from 'react-bootstrap';
import React, { useState } from 'react';



const dogImages = [
    ["/dog1.jpg", "/dog2.jpg", "/dog3.jpg", "/dog4.jpg", "/dog5.jpg", "/dog6.jpg", "/dog7.jpg", "/dog8.jpg", "/dog9.jpg", "/dog10.jpg", "/dog11.jpg", "/dog12.jpg", "/dog13.jpg", "/dog14.jpg", "/dog15.jpg", "/dog16.jpg"],
    ["/dog1.jpg", "/dog2.jpg", "/dog3.jpg", "/dog4.jpg", "/dog5.jpg", "/dog6.jpg", "/dog7.jpg", "/dog8.jpg", "/dog9.jpg", "/dog10.jpg", "/dog11.jpg", "/dog12.jpg", "/dog13.jpg", "/dog14.jpg", "/dog15.jpg", "/dog16.jpg"],
    // 추가 이미지 배열
];

const Straydog = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>입양견</h1>


            <table>
                <tbody>
                    {Array.from({ length: 4 }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {dogImages[currentPage].slice(rowIndex * 4, rowIndex * 4 + 4).map((dogImage, index) => (
                                <td key={index}><img src={dogImage} alt={`Dog ${currentPage * 16 + rowIndex * 4 + index + 1}`} width="300" height="300" /></td>
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
