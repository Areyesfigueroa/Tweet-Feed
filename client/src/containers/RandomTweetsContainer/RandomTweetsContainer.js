import React, { useEffect, useState, Fragment } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Button from '../../components/Button/Button';

import { fetchData } from '../../https';
import { fetchUserTweets } from '../../https';


import ModalContainer from '../ModalContainer/ModalContainer';
import UserProfileCardsLayout from '../../components/UserProfileCardsLayout/UserProfileCardsLayout';
import Title from '../../components/Title/Title';

const RandomTweetsContainer = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userSelected, setUserSelected] = useState(null);
    const [randomTweet, setRandomTweet] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {


        setUsers(['spiderman, marvel, playstation, insomniac, rockstar']);
        // fetchData(5).then(response => {
        //     setUsers(response);
        //     setLoading(false);
        // });
    }, []);

    useEffect(() => {
        //TESTING use user selected to fetch random tweet.
        if(!userSelected) return;

        setShowModal(true);
        // fetchRandomTweet.then(response => {
        //     console.log(response);
        // });
        fetchData(1).then(response => {
            setRandomTweet(response[0]);
        });
    }, [userSelected]);

    useEffect(() => {
        if(showModal) return;

        setRandomTweet(null); //reset tweet selected.

    }, [showModal]);
    
    const handleCardSelection = (id) => {
        setUserSelected(users.filter((user) => user.id === id));
    };

    const handleRandomSelection = () => handleCardSelection(Math.floor((Math.random() * 5) + 0));

    return (
        <div style={{margin: 'var(--pageMargin)'}}>
            <ModalContainer 
                show={showModal} 
                tweet={randomTweet} 
                close={() => setShowModal(false)}/>

            <Title>Select one of my recommended twitter users to view one of their randomly selected tweet</Title>

            {loading ? <LoadingSpinner /> : <UserProfileCardsLayout data={users} click={handleCardSelection}/>}
            
            {loading ? null : 
            <Button 
                click={handleRandomSelection} 
                style={{padding: "10px", margin: "50px 0"}} 
                rounded>
                    Feeling Lucky?
            </Button>}
        </div>
    );
};

export default RandomTweetsContainer;