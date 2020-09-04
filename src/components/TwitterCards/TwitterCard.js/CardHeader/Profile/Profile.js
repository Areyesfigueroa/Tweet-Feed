import React from 'react';
import classes from './Profile.module.css';
import Image from 'react-bootstrap/Image';

const profile = (props) => {
    return (
        <div className={classes.Profile}>
            <Image src={props.img} alt="Profile" roundedCircle fluid/>
            <div className={classes.profileText}>
                <div>{props.name}</div>
                <div>{props.url}</div>
            </div>
        </div>
    );
};

export default profile;