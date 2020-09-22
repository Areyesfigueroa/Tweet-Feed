import React from 'react';
import classes from './UserProfileCards.module.css';
import UserProfileCard from './UserProfileCard/UserProfileCard';
import Button from '../../Button/Button';

const userProfileCards = (props) => {
    return (
        <div className={classes.UserProfileCards}>
            {props.data.map((el) => (
                <Button key={el.id} click={() => props.click(el.id)} variant="profile" rounded>
                    <UserProfileCard img={el.profileImg} name={el.name} screenName={el.screenName}/>
                </Button>
            ))}
        </div>
    );
};

export default userProfileCards;