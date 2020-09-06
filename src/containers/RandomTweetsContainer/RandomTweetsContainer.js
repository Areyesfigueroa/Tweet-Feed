import React, { useEffect, useState, Fragment } from 'react';
import UserProfileCards from '../../components/UserProfileCards/UserProfileCards';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Button from '../../components/Button/Button';

import { fetchData } from '../../fakeData';

const RandomTweetsContainer = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(5).then(response => {
            setUsers(response);
            setLoading(false);
        });
    }, []);

    const handleCardSelection = (id) => {
        console.log(users.filter((user) => user.id === id));
    }

    const handleRandomSelection = () => {
        const id = Math.floor((Math.random() * 5) + 0);
        handleCardSelection(id);
    }

    const userProfileCards = () => (
        <Fragment>
            <UserProfileCards data={users.slice(0, 2)} click={handleCardSelection}/>
            <UserProfileCards data={users.slice(2, 3)} click={handleCardSelection}/>
            <UserProfileCards data={users.slice(3, 5)} click={handleCardSelection}/>
        </Fragment>
    )
    return (
        <div>
            <h4 
                style={{margin: "50px 0 30px 0"}}>
                    Pick a user to view one of their randomly selected tweet.
            </h4>

            {loading ? <LoadingSpinner /> : userProfileCards()}
            
            {loading ? 
            null
            : 
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