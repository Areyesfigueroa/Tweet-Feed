import React from 'react';
import classes from './TwitterCard.module.css';
import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';

const TwitterCard = (props) => {
    return (
        <div className={classes.TwitterCard}>
            <CardHeader 
                img={props.img} 
                name={props.name} 
                url={props.url}
                hearts={props.hearts}
                retweets={props.retweets} />
            <CardBody content={props.content}/>
            <CardFooter date={props.date} time={props.time} location={props.location}/>
        </div>
    );
};

export default TwitterCard;