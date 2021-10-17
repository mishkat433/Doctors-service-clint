import React from 'react';
import BlogCards from '../BlogCards/BlogCards';
import "./Blog.css";
import wilson from "../../images/Ellipse 1.png";
import ema from "../../images/Ellipse 2.png";
import aliza from "../../images/Ellipse 3.png";

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: ema,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: aliza,
        date: '23 April 2019'
    },
]

const Blog = () => {
    return (
        <div className="container mt-5">
            <h3 className="services-head text-center">our blog</h3>
            <h1 className="apointment-head text-center text-capitalize mt-3">from our blog news</h1>
            <div className="d-flex justify-content-center cards">
                <div className="w-20 row pt-3">
                    {
                        blogData.map(data => <BlogCards blogDetails={data} key={data.name}></BlogCards>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Blog;