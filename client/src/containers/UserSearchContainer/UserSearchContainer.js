import React, { useState, useEffect } from 'react';
import SearchbarContainer from '../SearchbarContainer/SearchbarContainer';
import ScrollToTopBtn from '../../components/ScrollToTopBtn/ScrollToTopBtn';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Title from '../../components/Title/Title';

// TESTING
import TwitterCards from '../../components/TwitterCards/TwitterCards';
import { fetchData } from '../../fakeData';

const UserSearchContainer = () => {

    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(false);
    const [bottomReached, setBottomReached]=useState(false);


    useEffect(() => {
        window.addEventListener("scroll", onBottomReached);

        return function cleanup() {
            window.removeEventListener("scroll", onBottomReached);
        }
    }, []);



    // useEffect(() => {
    //     setLoading(true);
    //     fetchData(4).then((response) => {
    //         let newData = [...data];
    //         response.forEach((el) => newData.push(el));

    //         setData(newData);
    //         setLoading(false);
    //         setBottomReached(false);
    //     });
    // }, [bottomReached])

    const onBottomReached = () => {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("Bottom Reached");
            setBottomReached(true);
        }
    }

    return (
        <div style={{margin: 'var(--pageMargin)'}}>
            <Title>Search Tweets By User Or Content</Title>
            <SearchbarContainer search={setData}/>
            {data ? <TwitterCards data={data}/>: null}

            {loading ? <LoadingSpinner/>: null}
            
            <ScrollToTopBtn />
        </div>
    );
};

export default UserSearchContainer;