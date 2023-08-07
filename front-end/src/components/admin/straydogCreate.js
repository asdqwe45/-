import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    // 분실견
    // const [LostLocation, setLostLocation] = useState(null)
    // const changeLostLocation = event => {
    //     setLostLocation(event.target.value);
    //     console.log(event.target.value);
    //   };
    // const [LostDate, setLostDate] = useState(null)
    // const changeLostDate = event => {
    //     setLostDate(event.target.value);
    //     console.log(event.target.value);
    //   };
    // const [ReturnedHome, setReturnedHome] = useState(null)
    // const changeReturnedHome = event => {
    //     setReturnedHome(event.target.value);
    //     console.log(event.target.value);
    //   };


    // =====================================================
    const navigate = useNavigate()
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
            axios.post('/api/straydog', JSON.stringify(
                {
                    "Sex": Sex,
                    "Age": Age,
                    "ChipNumber": ChipNumber,
                    "Image": Image,
                    "Breed": Breed,
                    "RemainedDay": RemainedDay,
                    "DogSize": DogSize,
                    "Weight": Weight,
                    "Status": "stray",
                    "EnteredDay": EnteredDay,
                    "DiscoveredPlace": DiscoveredPlace,
                    "LostLocation": null,
                    "LostDate": null,
                    "ReturnedHome": null
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1>
                도그 추가 폼폼폼 미쳤다잇
            </h1>
            <hr />
            <div style={{ display: "flex" }}>
                <div >
                    {/* <div> */}
                    {/* <label htmlFor='sex'> 성 별 </label><input id='sex' type="text" onChange={changeSex}/> */}
                    {/* </div> */}
                    <div onChange={changeSex}>
                        성 별
                        <input type="radio" name="theme" value="Male" id="male" /><label htmlFor="male">수컷</label>
                        <input type="radio" name="theme" value="Female" id="female" /><label htmlFor="female">암컷</label>
                    </div>
                    <div>
                        <label htmlFor='age'> 추정 나이 </label><input id='age' type="number" onChange={changeAge} />
                    </div>
                    <div>
                        <label htmlFor='chip_number'> 칩번호 </label><input id='chip_number' type="text" onChange={changeChipNumber} />
                    </div>
                    <div>
                        <label htmlFor='image'> 사 진 </label><input id='image' type="text" onChange={changeImage} />
                    </div>
                    <div>
                        <label htmlFor='breed'> 견 종 </label><input id='breed' type="text" onChange={changeBreed} />
                    </div>



                </div>
                <div>
                    <div onChange={changeDogSize}>
                        크기
                        <input type="radio" name="size" value="small" id="small" /><label htmlFor="small">소형견</label>
                        <input type="radio" name="size" value="medium" id="medium" /><label htmlFor="medium">중형견</label>
                        <input type="radio" name="size" value="large" id="large" /><label htmlFor="large">대형견</label>
                    </div>
                    <div>
                        <label htmlFor='weight'> 무 게 </label><input id='weight' type="number" onChange={changeWeight} />
                    </div>
                    <div>
                        <label htmlFor='status'> 상 태 </label><input id='status' value="stray" type="text" />
                    </div>

                </div>
            </div>
            <hr />
            {/* STRAY */}
            <div>
                <label htmlFor='entered_day'> 입소 날짜 </label><input id='entered_day' type="date" min="2000-01-01" max="2100-12-31" onChange={changeEnteredDay} />
                <label htmlFor='discovered_place'> 발견 장소 </label><input id='discovered_place' type="text" onChange={changeDiscoveredPlace} />
                <label htmlFor='remained_day'> 남은 날짜 </label><input id='remained_day' type="number" onChange={changeRemainedDay} />
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
            <hr />

            <button onClick={Create} style={{ width: '100px', height: '100px' }}>유기견 추가하기</button>
        </div>
    );
};
export default StraydogCreate