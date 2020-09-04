import React from 'react';
import Button from '../Button/Button';
import classes from './ScrollToTopBtn.module.css';

const scrollToTopBtn = () => {
    
    return (
        <div className={classes.ScrollToTopBtn}>            
            <Button click={() => window.scrollTo(0,0)} variant="scrollToTop">
                <ion-icon name="chevron-up-outline"></ion-icon>
            </Button>
        </div>
    );
};

export default scrollToTopBtn;