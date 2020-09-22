import React from 'react';
import classes from './SplashPage.module.css';
import Image from 'react-bootstrap/Image';
import Title from '../Title/Title';

import fullLogo from '../../assets/images/full-logo.png';

const splashPage = () => {
    return (
        <div className={classes.SplashPage}>
            <div className={classes.container}>
                <div>
                    <Image src={fullLogo} alt={"Logo"} />
                </div>
                <Title>
                    <p>This web app utilizes the Twitter API to fetch user tweets and present them in different ways.</p>
                    <p>Use the user search feature to search through your favorite user tweets or search by your favorite Twitter topic.</p>
                    <p>You can also select from my recommended list of Twitter users to fetch a random tweet. </p>
                </Title>
            </div>
        </div>
    );
};

export default splashPage;