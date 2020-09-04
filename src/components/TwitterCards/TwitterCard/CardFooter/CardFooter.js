import React from 'react';
import classes from './CardFooter.module.css';

const cardFooter = (props) => {
    return (
        <div className={classes.CardFooter}>
            {props.date} · {props.time} · {props.location}
        </div>
    );
};

export default cardFooter;