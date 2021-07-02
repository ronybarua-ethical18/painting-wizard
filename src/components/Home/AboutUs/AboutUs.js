import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'
import aboutUs from '../../../images/aboutUs.jpg';
import './AboutUs.css';
const AboutUs = () => {
    const props = useSpring({ scroll: 100, from: { scroll: 0 } })
    return (
        <div className="container-fluid common-margin">
            <h3 className="section-title text-center mb-5">
                <span className="brand-color"> Learn</span> <span className="title-color">About Us</span>
            </h3>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src={aboutUs} className="img-fluid rounded-lg shadow" alt="" />
                </div>
                <div className="col-md-6" id="about-bg">
                    <animated.div scrollTop={props.scroll}>
                        <h2 className="title-color">Why Are We Best </h2>
                    </animated.div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea amet odit tempora esse similique, explicabo maxime minima numquam fuga adipisci excepturi quasi, nulla laboriosam, possimus voluptatibus. Dolores, aut libero.</p>
                    <ul className="p-0">
                        <li><FontAwesomeIcon className="mr-3 iconic" icon={faCheck}></FontAwesomeIcon>Object Painting</li>
                        <li><FontAwesomeIcon className="mr-3 iconic" icon={faCheck}></FontAwesomeIcon>Wall Painting</li>
                        <li><FontAwesomeIcon className="mr-3 iconic" icon={faCheck}></FontAwesomeIcon>Furniture Painting</li>
                        <li><FontAwesomeIcon className="mr-3 iconic" icon={faCheck}></FontAwesomeIcon>Object Painting</li>
                        <li><FontAwesomeIcon className="mr-3 iconic" icon={faCheck}></FontAwesomeIcon>Exterior Painting</li>
                        <li><FontAwesomeIcon className="mr-3 iconic" icon={faCheck}></FontAwesomeIcon>Other Painting</li>
                    </ul>
                    <Button id="btn-delete">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;