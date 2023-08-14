import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DogInfoShow from '../admin/doginfoShow'
import ReservationShow from '../admin/reservationShow'
import UserInfoShow from '../admin/userinfoShow'
import Userpage from './Userpage'

const Mypage = () => {


    const admin = localStorage.getItem('admin');
    console.log(admin)
    console.log(typeof(admin))



    return (
        <div>
            {admin === '0'
            ?   <Userpage />
            :   <div>
                    <DogInfoShow />
                    <ReservationShow/>
                    <UserInfoShow/>
                </div>
        }
            
            
        </div>
    );
};
export default Mypage