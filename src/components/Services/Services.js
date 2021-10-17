import React from 'react';
import './Services.css'
import fluoride from "../../images/001-dental.png";
import cavity from "../../images/tooth (1).png";
import whitening from "../../images/tooth.png";
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData=[
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <div className="container services ">
            <h4 className="services-head">Our services</h4>
            <h1 className="services-second">Services we provide</h1>

            <div className="d-flex justify-content-center cards">
                <div className="w-20 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServicesDetails service={service} key={service.name}></ServicesDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;