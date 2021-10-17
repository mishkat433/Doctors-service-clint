import React from 'react';
import doctorImage from "../../images/5790-removebg.png";
import "./DoctorsCard.css"


const DoctorsCard = () => {
    return (
        <div className="col-lg-4 text-center ">
            <img className="doctors" src={doctorImage} alt="not found" />
            <div className="dortor-bg">
                <h5 className="">Dr. Robel polith</h5>
                <p><i className="fas fa-phone text-primary"></i>+8801521486215</p>
            </div>
            
        </div>
    );
};

export default DoctorsCard;