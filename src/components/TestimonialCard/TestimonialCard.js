import React from 'react';
import "./TestimonialCard.css"

const TestimonialCard = (props) => {
    const { quote, img, name, from } = props.info;
    return (
        <div className="col-lg-4 text-center">
            <div className="full-card">
                <p className="p card-text text-secondary">{quote}</p>
                <div className="images d-flex mt-5 pt-5">
                    <img src={img} alt="not found" />
                    <div className="par">
                        <h4 className="text-primary">{name}</h4>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;