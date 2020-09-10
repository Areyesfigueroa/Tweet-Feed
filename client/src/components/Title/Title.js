import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
    return (
        <h4 className={classes.Title}>
            {props.children}
        </h4>
    );
};

export default Title;