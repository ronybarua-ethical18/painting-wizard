import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import cover from '../../../../images/cover.png';
import { UserContext } from '../../../../App';
const MenuBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect  expand="lg" className="bg-white shadow py-2" fixed="top">
            <Navbar.Brand to="/home"><img id="logo" className="mr-2" src={cover} alt="" /><span id="logo-title">Painting<span className="title-color">Wizard</span></span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex align-items-center">
                    <Link to="/home" className="p-3 navigation">Home</Link>
                    <Link to="/" className="p-3 navigation">About</Link>
                    <Link to="/" className="p-3 navigation">Service</Link>
                    <Link to="/" className="p-3 navigation">Testimonial</Link>
                    <Link to="/" className="p-3 navigation">Pricing</Link>
                    <Link to="/" className="p-3 navigation">Contact</Link>
                    <Link to="/dashboard" className="p-3 navigation">Dashboard</Link>
                    {!loggedInUser.email ? <Link to="/login" className="p-3 navigation"><Button id="btn-action">Login</Button></Link>
                    :<span  className="brand-color"><b>{loggedInUser.displayName}</b></span>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;