import React from 'react';
import './Button.css';

const Button = (props) => {
    const classes = [
        "Button",
        props.variant ? props.variant: "default", 
        props.rounded ? "rounded": ""
    ]
    return (
        <button 
        className={classes.join(' ')}
        style={props.style}
        onClick={props.click}>
            {props.children}
        </button>
    );
};

export default Button;