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
            const response = await axios.get(`/api/straydog/${id}`);
            // console.log(response.data, '맞지?')
            setDog(response.data)
        }
        apiCall()

    }, [])

    const DeleteDog = async () => {
        const response = await axios.delete(`/api/straydog/${id}`);
        // console.log(response.data, '맞지?')
        setDog(response.data)
    }
    
    const onDelete = () => {

        if (window.confirm("정말 삭제합니까?")) {
    
          alert("삭제되었습니다.");
          DeleteDog()
    
        }
      };
    const admin = localStorage.getItem('admin');
    const userid = localStorage.getItem('userid');

    // console.log(dog, '아니야?')

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1 style={{paddingBottom : '50px', fontFamily : 'GmarketSansMedium'}}>| 유기견 상세정보 |</h1>
            <div style={{ paddingTop: '40px' }}>

                {/* {dog.Image} */}
                <img src={`/uploads/${dog.Image}`} width="400" height="350" style={{ marginBottom : '40px'}} />

                <div className='info'>
                    <div className="info_per">
                        <p>견 종 : </p>
                        <p>{dog.Breed}</p>
                    </div>
                    <hr/>
                    <div className="info_per">
                        <p>나 이 : </p>
                        <p>{dog.Age}</p>
                    </div>
                    <hr/>
                    <div className="info_per">
                        <p>크 기 : </p>
                        <p>{dog.DogSize}</p>
                    </div>
                    <hr/>
                    <div className="info_per">
                        <p>성 별 : </p>
                        <p>{dog.Sex}</p>
                    </div>
                    <hr/>
                    <div className="info_per">
                        <p>무 게 : </p>
                        <p>{dog.Weight}kg</p>
                    </div>
                    <hr/>
                    <div className="info_per">
                        <p>안락사까지 남은 날짜 : </p>
                        <p>{dog.RemainedDay}</p>
                    </div>
                    <hr/>
                    <div className="info_per">
                        <p>입소 날짜 : </p>
                        <p>{dog.EnteredDay}</p>
                    </div>
                    <hr/>
                    <div className="info_per">
                        <p>기타사항 : </p>
                        <p>{dog.comment}</p>
                    </div>
                    <hr/>
                </div>
            </div>
            <div>{admin === '1'
                ? <div style={{ display: 'flex' }}>
                    <div style={{ paddingTop: '50px' }}>
                        <Link to={{ pathname: `/admin/update/${id}` }} className="nav-link active">
                            <button className="btn btn-secondary">
                                수정하기
                            </button>
                        </Link>
                    </div>
                    <div style={{ paddingTop: '50px' }}>
                        <Link to={{ pathname: `/straydog` }} className="nav-link active">
                            <button className="btn btn-secondary" onClick={onDelete}>
                                삭제하기
                            </button>
                        </Link>

                    </div>
                </div>
                : <div style={{ display: 'flex' }}>
                    <div style={{ paddingTop: '50px' }}>
                        <Link to='/reservation' className="nav-link active" state={{ dogID: dog.DogID }}>
                            <button className="btn btn-secondary">
                                입양하기
                            </button>
                        </Link>
                    </div>
                </div>
            }

            </div>
            {/* 이건 user만 보이기 */}
            

            {/* 이건 관리자만 보이기 */}
            

        </div>
    );
};
export default StraydogDetail