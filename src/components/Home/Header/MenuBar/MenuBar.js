import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import {Link as ScrollLink} from "react-scroll";
import { Link  } from "react-router-dom";
import './MenuBar.css';
import cover from '../../../../images/cover.png';
import { UserContext } from '../../../../App';
const MenuBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-white shadow py-2" fixed="top">
            <Navbar.Brand to="/home"><img id="logo" className="mr-2" src={cover} alt="" /><Link to="/home"><span id="logo-title">Painting<span className="title-color">Wizard</span></span></Link> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex align-items-center">
                    <ScrollLink offset={-140} spy={true} smooth={true} duration={1000} to="home" className="p-3 navigation">Home</ScrollLink>
                    <ScrollLink offset={-200} spy={true} smooth={true} duration={1000} to="service" className="p-3 navigation">Service</ScrollLink>
                    <ScrollLink offset={-130} spy={true} smooth={true} duration={1000} to="testimonial" className="p-3 navigation">Testimonial</ScrollLink>
                    <ScrollLink offset={-130} spy={true} smooth={true} duration={1000} to="contact" className="p-3 navigation">Contact</ScrollLink>
                    <Link to="/dashboard" className="p-3 navigation">Dashboard</Link>
                    {(!loggedInUser.email && sessionStorage.length === 0) ? <Link to="/login" className="p-3 navigation"><Button id="btn-action">Login</Button></Link>
                        : <span className="brand-color"><b>{loggedInUser.displayName}</b></span>
                    }
                    {
                        (sessionStorage.length !== 0) &&
                        <Button id="btn-update"
                            onClick={() => {
                                setLoggedInUser({})
                                sessionStorage.clear()
                            }} className="text-white ml-3">
                            Sign Out</Button>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MenuBar;