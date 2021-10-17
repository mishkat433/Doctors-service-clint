import React from 'react';

const ServicesDetails = ({ service}) => {
    console.log(service)
    return (
        <div className="col-lg-4 text-center" style={{height:"300px"}}>
            <img style={{ height: '80px'}} src={service.img} alt=" not found" />
            <h5 className="mt-3 mb-3 h3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere culpa asperiores exercitationem. </p>
        </div>
    );
};

export default ServicesDetails;