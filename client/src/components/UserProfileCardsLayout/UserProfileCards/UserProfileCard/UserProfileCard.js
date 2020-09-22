import React from 'react';
import classes from './UserProfileCard.module.css';
import Image from 'react-bootstrap/Image';

const userProfileCard = (props) => {
    return (
        <div className={classes.UserProfileCard}>
            <div>
                <Image src={props.img} alt="Profile" roundedCircle fluid/>
                <p>{props.name}</p>
                <p>{`@${props.screenName}`}</p>
            </div>
        </div>
    );
};

export default userProfileCard;