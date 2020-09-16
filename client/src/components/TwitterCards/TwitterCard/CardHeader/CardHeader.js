import React from 'react';
import classes from './CardHeader.module.css';

import Profile from './Profile/Profile';
import SocialIcons from './SocialIcons/SocialIcons';

const cardHeader = (props) => {
    return (
        <div className={classes.CardHeader}>
            <Profile img={props.img} name={props.name} url={props.url} /> 
            <SocialIcons hearts={props.hearts} retweets={props.retweets}/>
        </div>
    );
};

export default cardHeader;