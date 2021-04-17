import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faHome, faThList, faUserShield, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import logo from '../../../images/cover.png';
const SideBar = () => {
    return (
        <div className="p-4" id="sidebar">
            <div className="navigationLink mb-3 d-flex align-items-center">
                <img id="logo" className="mr-3" src={logo} alt="" /><span id="logo-title">PaintingWizard</span>
            </div>
            <div id="navigationLink" className="bg-white p-3">
                <Link to="/bookings"><FontAwesomeIcon icon={faThList} className="mr-3"></FontAwesomeIcon>Booking List</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/orders"><FontAwesomeIcon icon={faThList} className="mr-3"></FontAwesomeIcon>Order List</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/dashboard"><FontAwesomeIcon icon={faPlusSquare} className="mr-3"></FontAwesomeIcon>Add Service</Link>
            </div>
            <div id="navigationLink" className="bg-white p-3 mt-3">
                <Link to="/patients">
                    <FontAwesomeIcon icon={faUserShield} className="mr-3"></FontAwesomeIcon>Make Admin</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/manageServices">
                    <FontAwesomeIcon icon={faWrench} className="mr-3"></FontAwesomeIcon>Manage Services</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/addReview">
                    <FontAwesomeIcon icon={faHome} className="mr-3"></FontAwesomeIcon>Review</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/home">
                    <FontAwesomeIcon icon={faHome} className="mr-3"></FontAwesomeIcon>Go Home</Link>
            </div>
        </div>
    );
};

export default SideBar;