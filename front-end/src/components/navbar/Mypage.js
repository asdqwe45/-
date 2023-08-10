import { useEffect, useState } from 'react'
import axios from 'axios'

const Mypage = () => {
    
    const token = localStorage.getItem('rasyueToken');
    const [reservationtimes, setReservationTimes] = useState([])
    const [times, setTimes] = useState([])    // console.log('22')
    const config = {
        headers: {
            'Authorization': `Bearer ${token}` // 토큰을 Bearer 토큰 형식으로 포함
        }
    };


    useEffect(() => {
        
        const fetchData = async () => {

            const response = await axios.get('/reservation/user',config);
            setReservationTimes(response.data.reservation)
            // console.log(response.data)
        }
        fetchData();
        
        
        

        
        
    }, []);
    
    // console.log(times)
    
    


    
    
    
    
    
    return (
        <div className="md-3" style={{ display: 'flex', flexDirection: 'column', paddingTop: '200px', paddingLeft : '300px', paddingRight : '300px' }}>
            <div>
                <h1>
                    마이페이지
                </h1>
            </div>
            <div>
                <p>내 예약 현황</p>
                <div>
                    <input checked='true' className="btn-check" type="radio" name="size" value="small" id="small" /><label htmlFor="small" className="btn btn-outline-secondary">ALL</label>
                    <input className="btn-check" type="radio" name="size" value="medium" id="medium" /><label htmlFor="medium" className="btn btn-outline-secondary">방문 예약</label>
                    <input className="btn-check" type="radio" name="size" value="large" id="large" /><label htmlFor="large" className="btn btn-outline-secondary">놀이 예약</label>
                </div>

                <div>
                    {/* {times.map(item => 
                    <div key={item.ReservationID}>
                    <span>{item.Type} </span>
                    <span>{item.ReservationDatetime}</span>
                    </div>
                        )} */}
                </div>
            </div>
            
            
        </div>
    );
};
export default Mypage