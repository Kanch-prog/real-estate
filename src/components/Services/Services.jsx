import React from "react";
import data from "../../constants/data";
import "./Services.css";
import images from "../../constants/images";

const Services = () => {
    return (
        <div className="services section-padding bg-whitesmoke" style = {{background: `url(${images.services}) center/cover no-repeat`
        }}>
         <h2 className='section-title text-center text-light'>How do we help people?</h2>
            <div className="container bg-blue">
                <div className="services-content grid">
                    {
                        data.services.map((service, index) => {
                            return (
                                <div className="services-content--item text-center" key = {index}>
                                    <img src = {service.img} alt = "" className="icon" />
                                    <h4 className="text-upper text-light">{service.title}</h4>
                                    <p className="para-text text-light">{service.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;