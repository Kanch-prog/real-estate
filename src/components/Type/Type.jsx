import React from "react";
import data from "../../constants/data";
import "./Type.css";
import images from "../../constants/images";

const Type = () => {  
    return(
        <div className="testimonials bg-whitesmoke section-padding">
            <div className="container">
                <div className="testimonials-content text-center">
                               
                    <h2 className='section-title text-center'>Explore by Property Type</h2>
                    <p className='para-text text-grey text-center'>Get started by choosing from one of our pre-built page templates to showcase your properties.</p>
                    
                   
                        <div className="types-content grid">
                            {
                                data.types.map((type, index) => {
                                    return (
                                        <div className="types-content--item text-center overlay" key={index}>
                                            <div className="image-container">
                                                <img src={type.img} alt="" className="icon" />
                                                <div className="overlay-content">
                                                    <p className="para-text text-dark fw-2">{type.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    
                        <a href = "#" className="btn btn-blue">view all property</a>
                </div>
            </div>
        </div>
        
    )
}

export default Type;