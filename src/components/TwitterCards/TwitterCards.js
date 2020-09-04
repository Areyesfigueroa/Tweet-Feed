import React from 'react';
import classes from './TwitterCards.module.css';
import TwitterCard from './TwitterCard.js/TwitterCard';

const TwitterCards = (props) => {
    return (
        <div className={classes.TwitterCards}>
            <TwitterCard 
                name={props.data.name}
                img={props.data.image}
                url={props.data.url}
                content={props.data.content}
                date={props.data.date}
                hearts={props.data.hearts}
                retweet={props.data.retweets}/>
        </div>
    );
};

export default TwitterCards;