import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuBar.css';
import cover from '../../../../images/cover.png';
const MenuBar = () => {
    return (
        <Navbar collapseOnSelect  expand="lg" className="bg-white shadow py-3" fixed="top">
            <Navbar.Brand to="/home"><img id="logo" className="mr-2" src={cover} alt="" /><span id="logo-title">PaintingWizard</span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex align-items-center">
                    <Link to="/aboutUs" className="p-3 navigation">About Us</Link>
                    <Link to="/service" className="p-3 navigation">Service</Link>
                    <Link to="/testimonial" className="p-3 navigation">Testimonial</Link>
                    <Link to="/contactUs" className="p-3 navigation">Contact Us</Link>
                    <Link to="/dashboard" className="p-3 navigation"><Button id="btn-action">Admin</Button></Link>
                    <Link to="/login" className="p-3 navigation"><Button id="btn-action">Login</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;