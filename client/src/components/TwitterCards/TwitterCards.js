import React from 'react';
import classes from './TwitterCards.module.css';
import TwitterCard from './TwitterCard/TwitterCard';

const TwitterCards = (props) => {
    return (
        <div className={classes.TwitterCards}>
            {console.log(props.data)}
            {props.data.map((el) => (
                <TwitterCard 
                    key={el.id}
                    name={el.name}
                    img={el.profileImg}
                    url={el.screenName}
                    content={el.content}
                    hearts={el.hearts}
                    retweets={el.retweets}
                    date={el.date}
                    time={el.time}
                    location={el.location}/>
            ))}
        </div>
    );
};

export default TwitterCards;