import React from 'react';
import "./BuisnessInfo.css";


const BuisnessInfo = () => {
    return (
        <section className="container-fluid full">
            <div className="row">
                <div className="col-lg-4 ">
                    <div className="bg-primary fullCard d-flex">
                        <div className="icons"><i className="far fa-clock icon"></i></div>
                        <div className="detail">
                            <h3>Opening Hours</h3>
                            <h4>We are open 7 days</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className=" bg-dark fullCard d-flex">
                        <div className="icons"><i className="fas fa-map-marker-alt icon"></i></div>
                        <div className="detail">
                            <h3>Visit Our Location</h3>
                            <h4>pekua, cox's bazar</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className=" bg-primary fullCard d-flex ">
                        <div className="icons"><i className="fas fa-phone-alt icon"></i></div>
                        <div className="detail">
                            <h3>Call us now</h3>
                            <h4>+8801521486215</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuisnessInfo;