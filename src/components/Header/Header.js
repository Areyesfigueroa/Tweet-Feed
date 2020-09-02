import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import logo from '../../assets/images/twitter-logo.png';


const header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                    <Image style={{height: "50px"}} rounded src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#user-search">User Search</Nav.Link>
                    <Nav.Link href="#random-tweets">Random Tweets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default header;