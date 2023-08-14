import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Mypage = () => {

    const token = localStorage.getItem('rasyueToken');
    const [reservationtimes, setReservationTimes] = useState([])
    const [view, setView] = useState('')
    // const [times, setTimes] = useState([])    // console.log('22')
    const config = {
        headers: {
            'Authorization': `Bearer ${token}` // 토큰을 Bearer 토큰 형식으로 포함
        }
    };


    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get('/api/reservation/user', config);
            setReservationTimes(response.data.reservation)
            console.log(response.data)
        }
        fetchData();

    }, []);

    // console.log(times)
    // console.log(view)

    const changeView = event => {
        setView(event.target.value)
    }

    const today = new Date()
    const times = reservationtimes.filter((reservationtime) => {
        // console.log(today, '1')
        // console.log(reservationtime.ReservationDatetime, '2')
        // console.log(today < reservationtime.ReservationDatetime)
        return today < new Date(reservationtime.ReservationDatetime)
    })

    times.sort((a, b) => a.ReservationDatetime.localeCompare(b.ReservationDatetime))



    const DeleteReservation = async (reservationid) => {
        console.log(reservationid)
        const response = await axios.delete(`/reservation/${reservationid}`);
        window.location.reload()
    }

    const onDelete = (reservationid) => {

        if (window.confirm("예약을 취소하시겠습니까?")) {

            alert("삭제되었습니다.");
            DeleteReservation(reservationid)

        }
    };



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '200px' }}>
            <div>
                {/* ------------------------------------------
                여기에 뭐라도 넣으면 되지 않을까요?
                ------------------------------------------ */}
                <h2 style={{ fontFamily: 'GmarketSansMedium' }}>
                    내 예약 현황
                </h2>
                <p></p>
                <div onChange={changeView} style={{ paddingBottom: '10px' }}>
                    <input className="btn-check" type="radio" name="view" value="ALL" id="ALL" /><label htmlFor="ALL" className="btn btn-outline-secondary" >ALL</label>
                    <input className="btn-check" type="radio" name="view" value="play" id="play" /><label htmlFor="play" className="btn btn-outline-secondary" >놀이</label>
                    <input className="btn-check" type="radio" name="view" value="visit" id="visit" /><label htmlFor="visit" className="btn btn-outline-secondary" >방문</label>
                </div>

                <div>
                    {view === 'ALL'
                        ? <div className='' style={{ width: '800px' }}>

                            {times.map(item =>
                                <div key={item.ReservationID} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>{item.Type === 'play'
                                        ? <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <h4 style={{ margin: '0px', padding: '10px', fontFamily: 'GmarketSansMedium' }}>놀이</h4>
                                        </div>
                                        : <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <h4 style={{ margin: '0px', padding: '10px', fontFamily: 'GmarketSansMedium' }}>방문</h4>
                                        </div>
                                    }


                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <h4 style={{ margin: '0px', padding: '10px', fontFamily: 'GmarketSansMedium' }}>{item.ReservationDatetime.slice(0, 4)}년 {item.ReservationDatetime.slice(5, 7)}월 {item.ReservationDatetime.slice(8, 10)}일 {item.ReservationDatetime.slice(11, 13)}시</h4>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }} >
                                        <Link to='/mypage'>
                                            <button className="btn" style={{ backgroundColor: 'orange', fontFamily: 'GmarketSansMedium' }} onClick={() => onDelete(item.ReservationID)}>
                                                예약 취소
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                            )}



                        </div>
                        : (view === 'play'
                            ? <div style={{ width: '800px' }}>
                                {times.filter(item => item.Type === 'play')
                                    .map(filteredItem => (
                                        <div key={filteredItem.ReservationID} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <h4 style={{ margin: '0px', padding: '10px', fontFamily: 'GmarketSansMedium' }}>놀이</h4>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h4 style={{ margin: '0px', padding: '10px', fontFamily: 'GmarketSansMedium' }}>{filteredItem.ReservationDatetime.slice(0, 4)}년 {filteredItem.ReservationDatetime.slice(5, 7)}월 {filteredItem.ReservationDatetime.slice(8, 10)}일 {filteredItem.ReservationDatetime.slice(11, 13)}시</h4>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                                <button className="btn" style={{ backgroundColor: 'orange', fontFamily: 'GmarketSansMedium' }} onClick={() => onDelete(filteredItem.ReservationID)}>
                                                    예약 취소
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            : (view === 'visit'
                                ? <div style={{ width: '800px' }}>
                                    {times.filter(item => item.Type === 'visit')
                                        .map(filteredItem => (
                                            <div key={filteredItem.ReservationID} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <h4 style={{ margin: '0px', padding: '10px', fontFamily: 'GmarketSansMedium' }}>방문</h4>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <h4 style={{ margin: '0px', padding: '10px', fontFamily: 'GmarketSansMedium' }}>{filteredItem.ReservationDatetime.slice(0, 4)}년 {filteredItem.ReservationDatetime.slice(5, 7)}월 {filteredItem.ReservationDatetime.slice(8, 10)}일 {filteredItem.ReservationDatetime.slice(11, 13)}시</h4>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <button className="btn" style={{ backgroundColor: 'orange', fontFamily: 'GmarketSansMedium' }} onClick={() => onDelete(filteredItem.ReservationID)}>
                                                        예약 취소
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                : null
                            )

                        )
                    }




                </div>
            </div>


        </div>
    );
};
export default Mypage