import React from 'react';
import "./DantalCare.css"
import mask3 from "../../images/Mask Group 3.png"

const DantalCare = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-5">
                    <img className="dantal-image" src={mask3} alt="not found"/>
                </div>
                <div className="col-lg-7">
                    <h1 className="dental-head">exceptional dental <br/> care, on your tarms</h1>
                    <p className="dental-para text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam vel architecto illum fuga nostrum animi perspiciatis, qui hic sint esse dolores voluptas reiciendis impedit praesentium debitis expedita ut aut, ratione a temporibus cum. Dolor nemo debitis rem nesciunt, quisquam qui omnis cum obcaecati recusandae tempora aliquid facilis sunt nulla?</p>
                    <button className="appointment-btn">Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default DantalCare;