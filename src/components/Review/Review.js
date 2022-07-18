import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import AppointmentTable from '../AppointmentTable/AppointmentTable';
import Navbar from '../Navbar/Navbar';

const Review = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("https://afternoon-brook-91177.herokuapp.com/appointmentInfo?email=" + loginUser.email)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [loginUser.email])
    const dd = setLoginUser;
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-lg-8 ml-3">
                    <h4 className="text-primary">Your All Appointments</h4>
                    <AppointmentTable myInfo={info}></AppointmentTable>
                </div>
                <div className="col-lg-4">{dd}</div>
            </div>
        </div>
    );
};

export default Review;