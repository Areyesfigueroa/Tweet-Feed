import React from 'react';
import classes from './TwitterCard.module.css';
import CardHeader from './CardHeader/CardHeader';

const TwitterCard = (props) => {
    return (
        <div className={classes.TwitterCard}>
            <CardHeader 
            img={props.img} 
            name={props.name} 
            url={props.url}
            hearts={props.hearts}
            retweets={props.retweets} />
        </div>
    );
};

export default TwitterCard;