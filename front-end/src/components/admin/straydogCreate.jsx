import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './admin.css';

const StraydogCreate = () => {


    const [Sex, setSex] = useState(null)
    const changeSex = event => {
        setSex(event.target.value);
    };
    const [Age, setAge] = useState(null)
    const changeAge = event => {
        setAge(event.target.value);
    };
    const [ChipNumber, setChipNumber] = useState(null)
    const changeChipNumber = event => {
        setChipNumber(event.target.value);
    };
    const [Image, setImage] = useState(null)
    const [PreviewImage, setPreviewImage] = useState(null);
    const changeImage = event => {
        setImage(event.target.files[0]);
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    const [Breed, setBreed] = useState(null)
    const changeBreed = event => {
        setBreed(event.target.value);
    };
    const [RemainedDay, setRemainedDay] = useState(null)
    const changeRemainedDay = event => {
        setRemainedDay(event.target.value);
    };
    const [DogSize, setDogSize] = useState(null)
    const changeDogSize = event => {
        setDogSize(event.target.value);
    };
    const [Weight, setWeight] = useState(null)
    const changeWeight = event => {
        setWeight(event.target.value);
    };
    const [EnteredDay, setEnteredDay] = useState(null)
    const changeEnteredDay = event => {
        setEnteredDay(event.target.value);
    };
    const [DiscoveredPlace, setDiscoveredPlace] = useState(null)
    const changeDiscoveredPlace = event => {
        setDiscoveredPlace(event.target.value);
    };
    const [Comment, setComment] = useState(null)
    const changeComment = event => {
        setComment(event.target.value);
    }
    const userid = localStorage.getItem('userid');
    const navigate = useNavigate()
    const Create = () => {

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
            const formData = new FormData();
            formData.append('Sex', Sex);
            formData.append('Age', parseInt(Age));
            formData.append('ChipNumber', ChipNumber);
            formData.append('Image', Image);
            formData.append('Breed', Breed);
            formData.append('RemainedDay', parseInt(RemainedDay));
            formData.append('DogSize', DogSize);
            formData.append('Weight', parseInt(Weight));
            formData.append('Status', 'stray')
            formData.append('EnteredDay', EnteredDay)
            formData.append('DiscoveredPlace', DiscoveredPlace)
            formData.append('LostLocation', null)
            formData.append('LostDate', '')
            formData.append('ReturnedHome', null)
            formData.append('Comment', Comment)
            formData.append("UserID", userid)

            axios.post('/api/straydog', formData)
                .then(function (response) {
                    navigate('/straydog')
                })
                .catch(function (error) {
                    alert('관리자만 가능합니다.')
                    navigate('/straydog')
                })
        }
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px', paddingLeft: '200px', paddingRight: '200px' }}>
            <h1 style={{ paddingBottom: '50px', fontFamily: 'GmarketSansMedium' }}>| 유기견 추가 |</h1>
            <div style={{ width: '800px', border: 'gray 5px solid', paddingLeft: '100px', paddingRight: '100px', paddingTop: '50px', fontFamily: 'Noto Sans' }} >

                <div onChange={changeSex} className='input_div'>
                    <div className='kk'>성 별 </div>
                    <div>
                        <input className="btn-check" type="radio" name="sex" value="Male" id="male" /><label htmlFor="male" className="btn btn-outline-secondary">수컷</label>
                        <input className="btn-check" type="radio" name="sex" value="Female" id="female" /><label htmlFor="female" className="btn btn-outline-secondary">암컷</label>
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

                    <label htmlFor='image' className='kk'> 사 진 </label>
                    {PreviewImage && <img src={PreviewImage} alt="미리보기" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
                    <input id='image' type="file" accept="image/*" className='input_text' onChange={changeImage} style={{ width: '200px' }} />

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
                    <label htmlFor='status' className='kk'> 상 태 </label><input id='status' defaultValue="stray" type="text" className='input_text' style={{ backgroundColor: '#EEEEEE' }} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='entered_day' className='kk'> 입소 날짜 </label><input id='entered_day' type="date" className='input_text' style={{ width: '220px' }} min="2000-01-01" max="2100-12-31" onChange={changeEnteredDay} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='discovered_place' className='kk'> 발견 장소 </label><input id='discovered_place' type="text" className='input_text' onChange={changeDiscoveredPlace} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='remained_day' className='kk'> 남은 날짜 </label><input id='remained_day' type="number" className='input_text' onChange={changeRemainedDay} />
                </div>
                <hr />
                <div className='input_div'>
                    <label htmlFor='comment'> 추가 내용 </label><textarea id='comment' className='input_text' type="text" rows="5" cols="23" onChange={changeComment} />
                </div>
                <hr />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '10px' }}>
                    <button className="btn btn-secondary" onClick={Create} style={{ width: '200px', height: '50px' }}>유기견 추가하기</button>
                </div>

            </div>
        </div>
    );
};
export default StraydogCreate