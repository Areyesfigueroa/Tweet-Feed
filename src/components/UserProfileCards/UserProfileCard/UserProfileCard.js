import React from 'react';
import classes from './UserProfileCard.module.css';
import Image from 'react-bootstrap/Image';

const userProfileCard = (props) => {
    console.log(props);
    return (
        <div className={classes.UserProfileCard}>
            <div>
                <Image src={props.img} alt="Profile" roundedCircle fluid/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
};

export default userProfileCard;