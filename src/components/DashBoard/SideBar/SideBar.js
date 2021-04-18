import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faBookOpen, faBookReader, faEye, faHome, faThList, faUserShield, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import './SideBar.css';
import logo from '../../../images/cover.png';
const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://mighty-ocean-87134.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    
    return (
        <div className="p-4" id="sidebar">
            <div className="navigationLink mb-3 d-flex align-items-center">
                <img id="server-logo" className="mr-2" src={logo} alt="" /><span id="sidebar-logo-title"><span className="brand-color">Painting</span><span className="title-color">Wizard</span></span>
            </div>
            <div id="navigationLink" className="bg-white mt-3 mb-3 p-3">
                <Link to="/home" className="link-style">
                    <FontAwesomeIcon icon={faBookOpen} className="mr-3 brand-color"></FontAwesomeIcon>Book</Link>
            </div>
            <div id="navigationLink" className="bg-white p-3">
                <Link to="/bookings" className="link-style"><FontAwesomeIcon icon={faBookReader} className="mr-3 brand-color"></FontAwesomeIcon>Booking List</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/dashboard" className="link-style">
                    <FontAwesomeIcon icon={faEye} className="mr-3 brand-color"></FontAwesomeIcon>Review</Link>
            </div>
            {isAdmin && <main>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/orders" className="link-style"><FontAwesomeIcon icon={faThList} className="mr-3 brand-color"></FontAwesomeIcon>Order List</Link>
                </div>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/addService" className="link-style"><FontAwesomeIcon icon={faPlusSquare} className="mr-3 brand-color"></FontAwesomeIcon>Add Service</Link>
                </div>
                <div id="navigationLink" className="bg-white p-3 mt-3">
                    <Link to="/admin" className="link-style">
                        <FontAwesomeIcon icon={faUserShield} className="mr-3 brand-color"></FontAwesomeIcon>Make Admin</Link>
                </div>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/manageServices" className="link-style">
                        <FontAwesomeIcon icon={faWrench} className="mr-3 brand-color"></FontAwesomeIcon>Manage Services</Link>
                </div>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/home" className="link-style">
                        <FontAwesomeIcon icon={faHome} className="mr-3 brand-color"></FontAwesomeIcon>Go Home</Link>
                </div>
            </main>}
        </div>
    );
};

export default SideBar;