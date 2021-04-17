import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import aboutUs from '../../../images/aboutUs.jpg';
import './AboutUs.css';
const AboutUs = () => {
    return ( 
        <div className="container-fluid common-margin">
            <h3 className="section-title text-center mb-5">
               <span className="brand-color"> Learn</span> <span className="title-color">About Us</span>
            </h3>
            <div className="row">
                <div className="col-md-6">
                    <img src={aboutUs} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-6" id="about-bg">
                    <h2>Why Are We Best </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea amet odit tempora esse similique, explicabo maxime minima numquam fuga adipisci excepturi quasi, nulla laboriosam, possimus voluptatibus. Dolores, aut libero.</p>
                    <ul className="p-0">
                        <li><FontAwesomeIcon className="mr-3"  icon={faCheck}></FontAwesomeIcon>Object Painting</li>
                        <li><FontAwesomeIcon className="mr-3" icon={faCheck}></FontAwesomeIcon>Wall Painting</li>
                        <li><FontAwesomeIcon className="mr-3" icon={faCheck}></FontAwesomeIcon>Furniture Painting</li>
                        <li><FontAwesomeIcon className="mr-3" icon={faCheck}></FontAwesomeIcon>Object Painting</li>
                        <li><FontAwesomeIcon className="mr-3" icon={faCheck}></FontAwesomeIcon>Exterior Painting</li>
                        <li><FontAwesomeIcon className="mr-3" icon={faCheck}></FontAwesomeIcon>Other Painting</li>
                    </ul>
                    <Button>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;