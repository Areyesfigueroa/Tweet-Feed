import React from 'react';
import classes from './TwitterCards.module.css';
import TwitterCard from './TwitterCard/TwitterCard';

const TwitterCards = (props) => {
    return (
        <div className={classes.TwitterCards}>
            {props.data.map((el, i) => (
                <TwitterCard 
                    key={i}
                    name={el.name}
                    img={el.image}
                    url={el.url}
                    content={el.content}
                    hearts={el.hearts}
                    retweet={el.retweets}
                    date={el.date}
                    time={el.time}
                    location={el.location}/>
            ))}
        </div>
    );
};

export default TwitterCards;