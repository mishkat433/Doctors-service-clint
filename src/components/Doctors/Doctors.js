import React from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const Doctors = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <h3 className="services-head text-center">our doctors</h3>
                <div className="d-flex justify-content-center cards">
                    <div className="w-20 row pt-3">
                       <DoctorsCard></DoctorsCard>
                       <DoctorsCard></DoctorsCard>
                       <DoctorsCard></DoctorsCard>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Doctors;