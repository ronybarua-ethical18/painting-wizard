import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faHome, faThList, faUserShield, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
const SideBar = () => {
    return (
        <div className="p-4" id="sidebar">
            <div id="navigationLink" className="bg-white p-3">
                <Link to="/dashboard"><FontAwesomeIcon icon={faThList} className="mr-3"></FontAwesomeIcon>Booking List</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">    
                <Link to="/addService"><FontAwesomeIcon icon={faPlusSquare} className="mr-3"></FontAwesomeIcon>Add Service</Link>
            </div>
            <div id="navigationLink" className="bg-white p-3 mt-3">
                <Link to="/patients">
                    <FontAwesomeIcon icon={faUserShield} className="mr-3"></FontAwesomeIcon>Make Admin</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/addDoctor">
                    <FontAwesomeIcon icon={faWrench} className="mr-3"></FontAwesomeIcon>Manage Services</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/home">
                    <FontAwesomeIcon icon={faHome} className="mr-3"></FontAwesomeIcon>Go Home</Link>
            </div>
        </div>
    );
};

export default SideBar;