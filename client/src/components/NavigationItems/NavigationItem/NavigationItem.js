import React from 'react';

import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem} style={props.style}>
            <NavLink to={props.link} activeClassName={classes.active} exact>
                {props.children}
            </NavLink>
        </li>
    );
};

export default navigationItem;