// src/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-3 mb-3">
                        
                        <p>
                            Contribute to the development of a sugar industry that is efficient, globally competitive, and sustainable through transfer of improved technologies.
                        </p>
                        <div className="social-links">
                            <a href="https://facebook.com" className="text-light me-2"><i className="fab fa-facebook"></i></a>
                            <a href="https://youtube.com" className="text-light me-2"><i className="fab fa-youtube"></i></a>
                            <a href="https://linkedin.com" className="text-light"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="col-md-3 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/about" className="text-light">About Us</a></li>
                            <li><a href="/contact" className="text-light">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* News Section */}
                    <div className="col-md-3 mb-3">
                        <h5>News</h5>
                        <div className="news-item mb-2">
                            <p className="mb-1">Aug 13, 2024</p>
                            <a href="#news1" className="text-light">Real Time Weather Data Monitoring</a>
                        </div>
                        <div className="news-item">
                            <p className="mb-1">Aug 13, 2024</p>
                            <a href="#news2" className="text-light">Pune,Panchwati</a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-3 mb-3">
                        <h5>Contact</h5>
                        <p><i className="fas fa-phone"></i> +501 677-4734</p>
                        <p><i className="fas fa-envelope"></i> tuljabhavani@gmail.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> shivaji nagar,karmala(solapur)413203</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
