import React from 'react';
import classes from "./CardBody.module.css";

const cardBody = (props) => {
    return (
        <div className={classes.CardBody}>
            {props.content}
        </div>
    );
};

export default cardBody;