import React from 'react';
import { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import "./AvailableCard.css";

const AvailableCard = (props) => {
    const {subject, visitingHour,totalSpace}= props.data

    const [IsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-lg-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand titl">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <p>{totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="appointment-btn mt-0 text-white" type="submit">GEt Appointment</button> 
                     
                    <AppointmentForm modalIsOpen={IsOpen} appointmentOn={subject} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default AvailableCard;