import React from 'react';
import classes from "./CardBody.module.css";

const cardBody = (props) => {
    return (
        <div className={classes.CardBody}>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
            {/* {props.content} */}
        </div>
    );
};

export default cardBody;