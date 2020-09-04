import React from 'react';
import classes from './SocialIcons.module.css';

import heartIcon from '../../../../../assets/images/heart-icon.png';
import retweetIcon from '../../../../../assets/images/retweet-icon.png';

import SocialIcon  from './SocialIcon/SocialIcon';

const socialIcons = (props) => {
    return (
        <div className={classes.SocialIcons}>
            <SocialIcon count={props.hearts} img={heartIcon}/>
            <SocialIcon count={props.retweets} img={retweetIcon}/>
        </div>
    );
};

export default socialIcons;