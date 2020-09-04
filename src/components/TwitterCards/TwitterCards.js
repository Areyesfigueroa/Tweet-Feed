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
                hearts={props.data.hearts}
                retweet={props.data.retweets}
                date={props.data.date}
                time={props.data.time}
                location={props.data.location}/>
        </div>
    );
};

export default TwitterCards;