import React from 'react';
import classes from './CardHeader.module.css';

import Profile from './Profile/Profile';
import SocialIcons from './SocialIcons/SocialIcons';

const cardHeader = (props) => {
    return (
        <div className={classes.CardHeader}>
            <Profile img={props.img} name={props.name} url={props.url} /> 
            <SocialIcons hearts={100} retweets={100}/>
        </div>
    );
};

export default cardHeader;