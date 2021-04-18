import React from 'react';
import './HeaderMain.css';
import banner from '../../../../images/banners.jpg';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';
const HeaderMain = () => {
    return (
        <div className="container-fluid">
            <div className="row no-gutters" id="headerMain">
                <div className="col-md-6 col-sm-12 col-xs-12 p-0 d-flex text-left align-items-center" id="content">
                    <div className="main-content p-4">
                        <h1 className="text-white">Welcome to Painting Wizard</h1>
                        <div className="service p-3 bg-white rounded-lg my-4">
                            <span className="mr-3"><FontAwesomeIcon className="mr-3 iconic" icon={faCheckCircle}></FontAwesomeIcon>Special Offer</span>
                            <span><FontAwesomeIcon className="mr-3 iconic" icon={faCheckCircle}></FontAwesomeIcon>Professional Workers</span>
                        </div>
                        <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis numquam quos, temporibus a magnam aut non quas eligendi voluptates illo repudiandae laudantium, ab laboriosam quae cupiditate sunt blanditiis eum animi.</p>
                        <Button id="btn-brand">Get Started</Button>
                    </div>
                </div>
                <div className="col-md-6 p-0 col-sm-12 col-xs-12">
                    <img id="banner" src={banner} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;