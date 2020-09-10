import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <NavigationItem link={'/home'} exact>Home</NavigationItem>
        <NavigationItem link={'/user-search'}>User Search</NavigationItem>
        <NavigationItem link={'/random-tweets'}>Random Tweets</NavigationItem>
    </div>
);

export default navigationItems;