import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './StraydogDetail.css';



const StraydogDetail = () => {
    const { id } = useParams()
    const [dog, setDog] = useState({
        "DogID": 37,
        "Sex": "Female",
        "Age": 15,
        "ChipNumber": "123987654321",
        "Image": "http://example.com/dog5.jpg",
        "Breed": "SiGorJabJong",
        "RemainedDay": "150",
        "DogSize": "Large",
        "Weight": 123,
        "Status": "stray",
        "EnteredDay": null,
        "DiscoveredPlace": null,
        "LostLocation": "AnYang",
        "LostDate": "2023-02-08",
        "ReturnedHome": "Yes"
    });
    console.log('도그 아이디', id)
    useEffect(() => {
        const apiCall = async () => {
            const response = await axios.get(`/straydog/${id}`);
            // console.log(response.data, '맞지?')
            setDog(response.data)
        }
        apiCall()

    }, [])

    const DeleteDog = async () => {
        const response = await axios.delete(`/straydog/${id}`);
        // console.log(response.data, '맞지?')
        setDog(response.data)
    }


    // console.log(dog, '아니야?')

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1>
                유기견 상세정보
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '40px' }}>

                {/* {dog.Image} */}
                <img src={dog.Image} width="400" height="350" />

                <p className='info'>
                    <h1>상세정보</h1>
                    품종 : {dog.Breed}<br />
                    나이 : {dog.Age}<br />
                    크기 : {dog.DogSize}<br />
                    성별 : {dog.Sex}<br />
                    무게 : {dog.Weight}<br />
                    잃어버린 날짜 : {dog.LostDate}<br />
                    현 상태 : {dog.Status}<br />
                    잃어버린 위치 : {dog.LostLocation}<br />
                    안락사까지 남은 날짜 : {dog.RemainedDay}
                </p>
            </div>

            {/* 이건 user만 보이기 */}
            <div style={{ display: 'flex' }}>
                <div style={{ paddingTop: '50px' }}>
                    <Link to='/reservation' className="nav-link active" state={{ dogID: dog.DogID }}>
                        <button style={{ height: '50px', width: '80px' }}>
                            입양하기
                        </button>
                    </Link>
                </div>
            </div>

            {/* 이건 관리자만 보이기 */}
            <div style={{ display: 'flex' }}>
                <div style={{ paddingTop: '50px' }}>
                    <Link to={{ pathname: `/admin/update/${id}` }} className="nav-link active">
                        <button style={{ height: '50px', width: '80px' }}>
                            수정하기
                        </button>
                    </Link>
                </div>
                <div style={{ paddingTop: '50px' }}>
                    <Link to='/straydog' className="nav-link active">
                        <button style={{ height: '50px', width: '80px' }} onClick={DeleteDog}>
                            삭제하기
                        </button>
                    </Link>


                </div>
            </div>

        </div>
    );
};
export default StraydogDetail