import React from 'react';
import classes from './SocialIcon.module.css';
import Image from 'react-bootstrap/Image';

const socialIcon = (props) => {
    return (
        <div className={classes.SocialIcon}>
            <div>
                {props.count}
            </div>
            <div>
                <Image src={props.img} alt={"Icon"} fluid/>
            </div>
        </div>
    );
};

export default socialIcon;