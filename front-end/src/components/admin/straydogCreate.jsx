import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './admin.css';




const StraydogCreate = () => {

    // 강아지 정보 입력 시 필요한 변수들 변경 위함.

    const [Sex, setSex] = useState(null)
    const changeSex = event => {
        setSex(event.target.value);
        console.log(event.target.value);
    };
    const [Age, setAge] = useState(null)
    const changeAge = event => {
        setAge(event.target.value);
        console.log(event.target.value);
    };
    const [ChipNumber, setChipNumber] = useState(null)
    const changeChipNumber = event => {
        setChipNumber(event.target.value);
        console.log(event.target.value);
    };
    const [Image, setImage] = useState(null)
    const changeImage = event => {
        setImage(event.target.value);
        console.log(event.target.value);
    };
    const [Breed, setBreed] = useState(null)
    const changeBreed = event => {
        setBreed(event.target.value);
        console.log(event.target.value);
    };
    const [RemainedDay, setRemainedDay] = useState(null)
    const changeRemainedDay = event => {
        setRemainedDay(event.target.value);
        console.log(event.target.value);
    };
    const [DogSize, setDogSize] = useState(null)
    const changeDogSize = event => {
        setDogSize(event.target.value);
        console.log(event.target.value);
    };
    const [Weight, setWeight] = useState(null)
    const changeWeight = event => {
        setWeight(event.target.value);
        console.log(event.target.value);
    };
    const [Status, setStatus] = useState(null)
    const changeStatus = event => {
        setStatus(event.target.value);
        console.log(event.target.value);
    };
    const [EnteredDay, setEnteredDay] = useState(null)
    const changeEnteredDay = event => {
        setEnteredDay(event.target.value);
        console.log(event.target.value);
    };
    const [DiscoveredPlace, setDiscoveredPlace] = useState(null)
    const changeDiscoveredPlace = event => {
        setDiscoveredPlace(event.target.value);
        console.log(event.target.value);
    };
    const [Comment, setComment] = useState(null)
    const changeComment = event => {
        setComment(event.target.value);
        console.log(event.target.value)
    }

    const admin = localStorage.getItem('admin');
    const userid = localStorage.getItem('userid');
    // =====================================================
    const navigate = useNavigate()
    
    // const changeFormatDate = (date) => {
    //     const year = date.getFullyear()
    //     const month = date.getMonth()
    //     const day = date.getDate()
    //     console.log(year+' '+month+' '+day)
    //     return
    // }
    


    // CREATE 버튼 눌렀을 때 시행
    const Create = (e) => {
        // e.preventDefault();

        // 필수 조건들 다 채웠는지 확인
        if (Sex === null || Sex === '') {
            alert('성별을 입력하세요')
        } else if (Age === null) {
            alert('추정 나이를 입력하세요')
        } else if (Image === null || Image === '') {
            alert('사진을 입력하세요')
        } else if (Breed === null || Breed === '') {
            alert('견종을 입력하세요')
        } else if (RemainedDay === null) {
            alert('남은 날짜를 입력하세요')
        } else if (DogSize === null || DogSize === '') {
            alert('크기를 입력하세요')
        } else if (Weight === null) {
            alert('무게를 입력하세요')
        } else if (EnteredDay === null) {
            alert('입소 날짜를 입력하세요')
        } else if (DiscoveredPlace === null || DiscoveredPlace === '') {
            alert('발견 장소를 입력하세요')
        }

        else {
            // e.preventDefault();
            
            axios.post('/straydog', JSON.stringify(
                {
                    "Sex": Sex,
                    "Age": parseInt(Age),
                    "ChipNumber": ChipNumber,
                    "Image": Image,
                    "Breed": Breed,
                    "RemainedDay": parseInt(RemainedDay),
                    "DogSize": DogSize,
                    "Weight": parseInt(Weight),
                    "Status": "stray",
                    "EnteredDay": EnteredDay,
                    "DiscoveredPlace": DiscoveredPlace,
                    "LostLocation": null,
                    "LostDate": null,
                    "ReturnedHome": null,
                    "Comment" : Comment,
                    "UserID" : userid
                    
                }), { headers: { "Content-Type": 'application/json' } })
                .then(function (response) {
                    console.log(response);
                    navigate('/straydog')
                })
                .catch(function (error) {
                    console.log(error);
                });


        }
        // POST 요청 

        // =====================================================
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px', paddingLeft : '200px', paddingRight : '200px'}}>
            <h1 style={{paddingBottom : '50px', fontFamily : 'GmarketSansMedium'}}>| 유기견 추가 |</h1>
            <div style={{width : '800px', border : 'gray 5px solid', paddingLeft : '100px', paddingRight : '100px', paddingTop: '50px', fontFamily: 'Noto Sans'}} >

                <div onChange={changeSex} className='input_div'>
                    <div className='kk'>성 별 </div>
                    <div>
                        <input className="btn-check" type="radio" name="sex" value="Male" id="male"/><label htmlFor="male" className="btn btn-outline-secondary">수컷</label>
                        <input className="btn-check" type="radio" name="sex" value="Female" id="female"/><label htmlFor="female" className="btn btn-outline-secondary">암컷</label>
                    </div>
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='age' className='kk'> 추정 나이 </label><input id='age' type="number" className='input_text' onChange={changeAge} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='chip_number' className='kk'> 칩번호 </label><input id='chip_number' type="text" className='input_text' onChange={changeChipNumber} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='image' className='kk'> 사 진 </label><input id='image' type="text" className='input_text' onChange={changeImage} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='breed' className='kk'> 견 종 </label><input id='breed' type="text" className='input_text' onChange={changeBreed} />
                </div>
                <hr />
                <div onChange={changeDogSize} className='input_div'>
                    <div className='kk'>크기</div>
                    <div>
                    <input className="btn-check" type="radio" name="size" value="small" id="small" /><label htmlFor="small" className="btn btn-outline-secondary" >소형견</label>
                    <input className="btn-check" type="radio" name="size" value="medium" id="medium" /><label htmlFor="medium" className="btn btn-outline-secondary" >중형견</label>
                    <input className="btn-check" type="radio" name="size" value="large" id="large" /><label htmlFor="large" className="btn btn-outline-secondary" >대형견</label>
                    </div>   
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='weight' className='kk'> 무 게 </label><input id='weight' type="number" className='input_text' onChange={changeWeight} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='status' className='kk'> 상 태 </label><input id='status' value="stray" type="text" className='input_text' style={{backgroundColor : '#EEEEEE'}}/>
                </div>
                <hr />


        

        {/* STRAY */}
                <div className='input_div'>
                    <label htmlFor='entered_day' className='kk'> 입소 날짜 </label><input id='entered_day' type="date" className='input_text' style={{width : '220px'}} min="2000-01-01" max="2100-12-31" onChange={changeEnteredDay} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='discovered_place' className='kk'> 발견 장소 </label><input id='discovered_place' type="text" className='input_text' onChange={changeDiscoveredPlace} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='remained_day' className='kk'> 남은 날짜 </label><input id='remained_day' type="number" className='input_text' onChange={changeRemainedDay} />
                </div>
                {/* LOST */}
                {/* 이건 어차피 유기견 추가에는 필요 없음.
                <div>
                    <label htmlFor='lost_location'> 잃어 버린 곳 </label><input id='lost_location' type="text" onChange={changeLostLocation}/>
                    <label htmlFor='lost_date'> 잃어버린 날짜 </label><input id='lost_date' type="text" onChange={changeLostDate}/>
                    <label htmlFor='returned_home'> 귀가 여부 </label><input id='returned_home' type="text" onChange={changeReturnedHome}/>
                </div> */}


                {/* <input type="submit" /> */}
                {/* <input type="submit" style={{width : '100px', height : '100px'}} value="추가" OnClick={Create}></input> */}
                <hr/>
                <div className='input_div'>
                    <label htmlFor='comment'> 추가 내용 </label><textarea id='comment' className='input_text' type="text" rows="5" cols="23" onChange={changeComment}/>
                </div>
                <hr/>
                <div style={{display : 'flex', justifyContent : 'center', marginTop : '10px', marginBottom : '10px'}}>
                    <button className="btn btn-secondary" onClick={Create} style={{ width: '200px', height: '50px' }}>유기견 추가하기</button>
                </div>
            
            </div>
        </div>
    );
};
export default StraydogCreate