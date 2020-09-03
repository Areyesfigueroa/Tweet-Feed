import React from 'react';
import classes from './Background.module.css';

import Image from "react-bootstrap/Image";

const background = (props) => {
    return (
        <div className={classes.Background} style={props.style}>
            <div 
                className={classes.shadowBox} 
                style={{ backgroundColor: `rgba(1,1,1,${props.shadowOpacity})` }}>
            </div>
            <Image fluid src={props.imgSrc} alt="Background"/>
        </div>
    );
};

export default background;