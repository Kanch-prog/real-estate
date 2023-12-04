import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section-padding bg-dark">
            <div className="container">
                <div className="footer-content grid text-light text-center">
                    <div className="footer-content--item">
                        <a href = "#" className="footer-navlink">practice</a>
                        <p className="para-text">Copyright &copy;2023 All rights reserved | This template is made with ❤️ by KK.</p>
                    </div>
                    
                    <div className="footer-content--item">
                        <a href = "mailto:kanchana@gmail.com">kanchana@gmail.com</a>
                        <span>+44 986 689 009</span>
                    </div>

                    <div className="footer-content--item">
                        <h3 className="footer-title">Navigation</h3>
                        <ul className="footer-links">
                            <li><a href = "#">About</a></li>
                            <li><a href = "#">Services</a></li>
                            <li><a href = "#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-content--item">
                        <h3 className="footer-title">Services</h3>
                        <ul className="footer-links">
                            <li><a href = "#">Real Estate</a></li>
                            <li><a href = "#">Construction</a></li>
                            <li><a href = "#">Legals</a></li>
                        </ul>
                    </div>

                    <div className="footer-content--item">
                        <h3 className="footer-title">Social LInks</h3>
                        <ul className="footer-links">
                            <li><a href = "#">Facebook</a></li>
                            <li><a href = "#">Twitter</a></li>
                            <li><a href = "#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;