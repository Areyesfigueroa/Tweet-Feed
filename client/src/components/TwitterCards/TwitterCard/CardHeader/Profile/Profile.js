import React from 'react';
import classes from './Profile.module.css';
import Image from 'react-bootstrap/Image';

const profile = (props) => {
    return (
        <div className={classes.Profile}>
            <Image src={props.img} alt="Profile" roundedCircle fluid/>
            <div className={classes.profileText}>
                <div>{props.name}</div>
                <div>
                    <a href={`https://twitter.com/${props.url}`} target="_blank">{props.url}</a>
                </div>
            </div>
        </div>
    );
};

export default profile;