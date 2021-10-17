import React from 'react';
import "./Contact.css";


const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <h3 className="services-head text-center pt-5">contact us</h3>
                <h1 className="apointment-head text-white text-center text-capitalize mt-3">always connect with us</h1>
                <form action="" className="form-group mt-5">
                    <input className="form-control input" type="text" placeholder="Name*" />
                    <input className="form-control input" type="text" placeholder="Subject*" />
                    <textarea className="form-control textarea mt-4" cols="120" rows="8" placeholder="Your Message*"></textarea>
                    <button className="appointment-btn butto" type="submit">Send</button>
                </form>
            </div>
        </div>
        
    );
};

export default Contact;