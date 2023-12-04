import React, {useState} from "react";
import images from "../../constants/images";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand-and-toggler flex">
                    <a href = "index.html" alt = "" className="navbar-brand">
                        <img src = {images.logo} alt = "site logo" />
                    </a>
                    <button type = "button" className="navbar-open--btn text-light" onClick={() => setToggleMenu(true)}>
                        <FaBars size = {26} />
                    </button>
                </div>

                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href = "#home" className = "nav-link text-upper fw-6 text-light nav-active">home</a>
                        </li>
                        <li className="nav-item">
                            <a href = "#work" className = "nav-link text-upper fw_6 text-light">Property</a>
                        </li>
                        <li className="nav-item">
                            <a href = "#work" className = "nav-link text-upper fw_6 text-light">About</a>
                        </li>
                        <li className="nav-item">
                            <a href = "#work" className = "nav-link text-upper fw_6 text-light">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href = "#work" className = "nav-link text-upper fw_6 text-light">testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a href = "#work" className = "nav-link text-upper fw_6 text-light">contact</a>
                        </li>
                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar-smallscreen">
                        <button type = "button" className="navbar-close--btn text-light" onClick={() => setToggleMenu(false)}>
                            <FaTimes size = {32} />
                        </button>
                        <ul className="navbar-nav--smallscreen text-light">
                            <li className = "nav-item">
                                <a href = "#home" className="nav-link text-upper fw-6 nav-active text-light">home</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#about" className="nav-link text-upper fw-6 text-light">property</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#about" className="nav-link text-upper fw-6 text-light">about</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#about" className="nav-link text-upper fw-6 text-light">blog</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#about" className="nav-link text-upper fw-6 text-light">testimonials</a>
                            </li>
                            <li className = "nav-item">
                                <a href = "#about" className="nav-link text-upper fw-6 text-light">contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;