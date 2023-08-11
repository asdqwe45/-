import { useEffect, useState } from 'react'
import axios from 'axios'
import Remoteplaycarousel from './RemoteplayCarousel'


const Remoteplay = () => {

    const [urgentdog, seturgentdog] = useState()
    let content = <h1>로딩중 ... </h1>
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('/api/urgentdog');

            seturgentdog(response.data)
            
            console.log(response.data)
        }
        fetchData();
    }, [])
    if ( urgentdog !== null){
        content = <Remoteplaycarousel urgentdog={urgentdog}/>
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1 style={{marginBottom : '100px'}}>
                추천 유기견
            </h1>
            {content}
        </div>
    );
};
export default Remoteplay