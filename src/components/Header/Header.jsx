import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Header = () => (
    <div className="header" style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="header-content text-center text-light flex flex-center">
                <div className="header-content--left"></div>
                <div className="header-content--right">
                    <h1 className="header-title fw-6">Explore homes on Majestic Views</h1>
                    <p className="para-text">Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</p>
                    <a href = "#" className="btn btn-blue">contact us</a>
                </div>
            </div>
        </div>
    </div>
)

export default Header;