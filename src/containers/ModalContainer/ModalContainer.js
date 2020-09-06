import React from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Modal from '../../components/Modal/Modal';
import TwitterCard from '../../components/TwitterCards/TwitterCard/TwitterCard';

const ModalContainer = (props) => {
    const twitterCard = () => (
        <TwitterCard 
            style={{margin: '0'}}
            name={props.tweet.name}
            img={props.tweet.image}
            url={props.tweet.url}
            content={props.tweet.content}
            hearts={props.tweet.hearts}
            retweet={props.tweet.retweets}
            date={props.tweet.date}
            time={props.tweet.time}
            location={props.tweet.location}/>
    )
    const modalBody = props.tweet === null ? <LoadingSpinner />:twitterCard();
    return (
        <Modal centered show={props.show} close={props.close} title="Random Tweet">
            {modalBody}
        </Modal>
    );
};

export default ModalContainer;