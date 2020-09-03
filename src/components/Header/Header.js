import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import logo from '../../assets/images/twitter-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const header = () => {
    return (
        <Navbar collapseOnSelect style={{ backgroundColor: "rgba(1,1,1,0)" }} expand="lg" variant="dark">
            <NavigationItem link="/home">
                <Image style={{height: "50px"}} rounded src={logo} alt="logo"/>
            </NavigationItem>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <NavigationItems />
            </Navbar.Collapse>
        </Navbar>
    );
};

export default header;