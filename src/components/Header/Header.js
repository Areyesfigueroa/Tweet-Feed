import React from 'react';

import classes from './Header.module.css';

import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import logo from '../../assets/images/logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const header = (props) => {
    const hamburgerBtnStyle = {
        backgroundColor: "var(--middleGreen)",
        padding: "9px"
    }
    return (
        <div className={classes.Header}>
            <Navbar collapseOnSelect style={props.style} expand="lg" variant="dark">
                <NavigationItem link="/home" style={{margin: '0'}}>
                    <Image rounded src={logo} alt="logo"/>
                </NavigationItem>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={hamburgerBtnStyle}/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <NavigationItems />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default header;