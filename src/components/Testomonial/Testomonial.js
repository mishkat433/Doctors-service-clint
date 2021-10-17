import React from 'react';
import "./Testomonial.css";
import wilson from "../../images/Ellipse 1.png";
import ema from "../../images/Ellipse 2.png";
import aliza from "../../images/Ellipse 3.png";
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis',
        name: 'Ema Gomez',
        from: 'Canada',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis',
        name: 'Aliza Farari',
        from: 'Finland',
        img: aliza
    }
]

const Testomonial = () => {
    return (
        <div className="testomonial container">
            <div className="testomonial-body">
                <h3 className="services-head text-left">testimonial</h3>
                <h1 className="apointment-head text-capitalize">What's our patients <br />says</h1>
            </div>
            <div className="d-flex justify-content-center cards">
                <div className="w-20 row pt-3">
                    {
                        testimonialData.map(data => <TestimonialCard info={data} key={data.name}></TestimonialCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Testomonial;