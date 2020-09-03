import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button 
        className={`${classes.Button} ${props.variant ? props.variant: classes.default}`}
        style={props.style}
        onClick={props.click}>
            {props.children}
        </button>
    );
};

export default Button;