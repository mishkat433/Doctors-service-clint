import React from 'react';
import "./BlogCards.css"

const BlogCards = (props) => {
    const { title, description, author, authorImg, date } = props.blogDetails
    return (
        <div className="col-lg-4">
            <div className="full-card top" >
                <div className="images d-flex mb-3">
                    <img src={authorImg} alt="image not found" />
                    <div className="par">
                        <h4>{author}</h4>
                        <p className="m-0">{date}</p>
                    </div>
                </div>
                <h4 className="mb-3 heading">{title}</h4>
                <p className="p card-text text-secondary text-justify">{description}</p>
                <i class="fas fa-long-arrow-alt-right arow"></i>
                
            </div>
        </div>
    );
};

export default BlogCards;