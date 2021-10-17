import React from 'react';
import "./HeaderMain.css"
import chair from "../../images/MaskGroup1.png"
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    return (
        <div className="headerMain container">
            <div className="row">
                <div className="col-lg-5">
                    <h1 className="text-capitalize font-weight-bold head-text mb-4">Your New smile <br/>starts here</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quaerat esse delectus nobis dignissimos pariatur nemo facilis eos odio vitae.</p>
                    <Link to="/apointment" > <button className="appointment-btn ">get appointment</button></Link>
                    
                </div>
                <div className="col-lg-7">
                    <img className="headerMain-chair" src={chair} alt="not found"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;