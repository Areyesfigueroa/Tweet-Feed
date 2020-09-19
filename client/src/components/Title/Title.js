import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
    return (
        <div className={classes.Title}>
            <h5>
                {props.children}
            </h5>
        </div>
    );
};

export default Title;