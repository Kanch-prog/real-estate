import React from "react";
import data from "../../constants/data";
import "./Testimonials.css";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
// slick slider
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    let settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return(
        <div className="testimonials bg-blue section-padding">
            <div className="container">
                <div className="testimonials-content text-center">
                    <Slider {...settings}>
                        {
                            data.testimonials.map((testimonial, index) => {
                                return (
                                    <div className="testimonials-item text-light" key = {index}>
                                        <p className="para-text">
                                            <span><FaQuoteLeft /></span>
                                            &nbsp;
                                            {testimonial.text} <span>&nbsp; <FaQuoteRight /></span>
                                        </p>
                                        <p className="text-upper text fw-5 ls-2">{testimonial.name}</p>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;