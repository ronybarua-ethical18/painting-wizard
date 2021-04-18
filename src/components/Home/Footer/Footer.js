import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container-fluid" id="footer-overlay">
            <div className="shadow overlay-message py-5 px-5 d-flex justify-content-between align-items-center flex-wrap">
                <h2 className="text-white">Confused About The Final<br/>
Steps For Your Home?</h2>
                <Button id="btn-touch">Get In Touch</Button>
            </div>
            <div className="main-footer">
                <div className="row no-gutters">
                    <div className="col-md-4 p-4">
                        <h5 className="mb-4">Company Information</h5>
                        <address>
                            South Khulshi,Road#3,b-block,JamalKhan.
                        </address>
                        <p>Phone Number: +908-46567436</p>
                        <p>Email: dummy@gmail.com</p>
                        <b>Official website: dummy-info.web.com</b>
                    </div>
                    <div className="col-md-4 p-4">
                        <div className="our-activities">
                            <h5 className="mb-4">What we do</h5>
                            <ul className="p-0">
                                <li>Object Painting</li>
                                <li>Exterior Painting</li>
                                <li>Residential Painting</li>
                                <li>Furniture Painting</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 p-4">
                        <div className="social-ions text-left">
                            <h5 className="mb-4">Find Us On Social Platform</h5>
                            <ul className="p-0">
                                <li><FontAwesomeIcon icon={faFacebook} className="mr-3 fa-2x" spin></FontAwesomeIcon>Facebook</li>
                                <li><FontAwesomeIcon icon={faInstagram} className="mr-3 fa-2x" spin></FontAwesomeIcon>Instagram</li>
                                <li><FontAwesomeIcon icon={faTwitter} className="mr-3 fa-2x" spin></FontAwesomeIcon> Twitter</li>
                                <li><FontAwesomeIcon icon={faGoogle} className="mr-3 fa-2x" spin></FontAwesomeIcon> Google</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <footer className="p-4 text-center">CopyRight {new Date().toDateString} All right Reserved</footer>
            </div>
        </div>
    );
};

export default Footer;