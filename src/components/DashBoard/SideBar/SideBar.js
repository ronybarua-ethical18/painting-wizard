import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faHome, faThList, faUserShield, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import './SideBar.css';
import logo from '../../../images/cover.png';
import { Button } from 'react-bootstrap';
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
                <Link to="/home"><FontAwesomeIcon icon={faThList} className="mr-3"></FontAwesomeIcon>Book</Link>
            </div>
            <div id="navigationLink" className="bg-white p-3">
                <Link to="/bookings"><FontAwesomeIcon icon={faThList} className="mr-3"></FontAwesomeIcon>Booking List</Link>
            </div>
            <div id="navigationLink" className="bg-white mt-3 p-3">
                <Link to="/dashboard">
                    <FontAwesomeIcon icon={faHome} className="mr-3"></FontAwesomeIcon>Review</Link>
            </div>
            {isAdmin && <main>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/orders"><FontAwesomeIcon icon={faThList} className="mr-3"></FontAwesomeIcon>Order List</Link>
                </div>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/addService"><FontAwesomeIcon icon={faPlusSquare} className="mr-3"></FontAwesomeIcon>Add Service</Link>
                </div>
                <div id="navigationLink" className="bg-white p-3 mt-3">
                    <Link to="/admin">
                        <FontAwesomeIcon icon={faUserShield} className="mr-3"></FontAwesomeIcon>Make Admin</Link>
                </div>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/manageServices">
                        <FontAwesomeIcon icon={faWrench} className="mr-3"></FontAwesomeIcon>Manage Services</Link>
                </div>
                <div id="navigationLink" className="bg-white mt-3 p-3">
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} className="mr-3"></FontAwesomeIcon>Go Home</Link>
                </div>
            </main>}
            {/* <Button id="btn-update" onClick={() => handleSignOut()}>Log Out</Button> */}
        </div>
    );
};

export default SideBar;