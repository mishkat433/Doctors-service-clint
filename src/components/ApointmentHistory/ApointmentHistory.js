import React from 'react';
import "./ApointmentHistory.css";
import doctor from "../../images/5790-removebg.png"

const ApointmentHistory = () => {
    return (
        <div className="apointmentHistory">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="doctor" src={doctor} alt="" />
                    </div>
                    <div className="col-lg-8">
                        <h4 className="services-head text-left mt-5">appointment</h4>
                        <h1 className="text-white apointment-head">Make an appointment <br />today</h1>
                        <p className="apointment-para"> consectetur adipisicing elit. Suscipit facere eos consequuntur accusamus provident distinctio beatae pariatur porro quam ducimus.!</p>
                        <button className="appointment-btn">Learn more</button>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default ApointmentHistory;