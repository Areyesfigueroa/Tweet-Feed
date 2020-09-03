import React from 'react';
import classes from './SplashPage.module.css';


const splashPage = () => {
    return (
        <div className={classes.SplashPage}>
            <div>
                <h1 className={classes.title}>Twitter Showcase</h1>
                <div className={classes.content}>
                    <p>This web app utilizes the Twitter API to fetch user tweets and present them in different ways.</p>
                    <p>Use the user search feature to search through your favorite user tweets or search by your favorite Twitter topic</p>
                    <p>You can also select from my recommended list of Twitter users to fetch a random tweet. </p>
                </div>
            </div>
        </div>
    );
};

export default splashPage;