import React, { useEffect, useState, Fragment } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Button from '../../components/Button/Button';

import { fetchData } from '../../fakeData';
import ModalContainer from '../ModalContainer/ModalContainer';
import UserProfileCardsLayout from '../../components/UserProfileCardsLayout/UserProfileCardsLayout';

const RandomTweetsContainer = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userSelected, setUserSelected] = useState(null);
    const [randomTweet, setRandomTweet] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchData(5).then(response => {
            setUsers(response);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        //TESTING use user selected to fetch random tweet.
        if(!userSelected) return;

        setShowModal(true);
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
        <div>

            <ModalContainer 
                show={showModal} 
                tweet={randomTweet} 
                close={() => setShowModal(false)}/>

            <h4 style={{margin: "50px 0 30px 0"}}>
                Pick a user to view one of their randomly selected tweet.
            </h4>

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