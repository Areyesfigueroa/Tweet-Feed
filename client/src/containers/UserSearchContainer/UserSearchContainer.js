import React, { useState, useEffect } from 'react';
import SearchbarContainer from '../SearchbarContainer/SearchbarContainer';
import ScrollToTopBtn from '../../components/ScrollToTopBtn/ScrollToTopBtn';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Title from '../../components/Title/Title';

// TESTING
import TwitterCards from '../../components/TwitterCards/TwitterCards';
import { fetchContentNextResults, fetchUserNextResults } from '../../fakeData';

const UserSearchContainer = () => {

    const [data, setData]=useState([]);
    const [searchType, setSearchType]=useState('');
    const [nextResultsURL, setNextResultsURL]=useState(null);
    const [showStatusLog, setShowStatusLog]=useState(false);
    const [loading, setLoading]=useState(false);
    const [bottomReached, setBottomReached]=useState(false);
    
    const SEARCH_TYPES = {
        USER: 'user',
        CONTENT: 'content'
    }

    useEffect(() => {
        window.addEventListener("scroll", onBottomReached);

        return function cleanup() {
            window.removeEventListener("scroll", onBottomReached);
        }
    }, []);

    useEffect(() => {

        if(loading || showStatusLog) return;

        switch(searchType) {
            case SEARCH_TYPES.CONTENT:
                setLoading(true);
                fetchContentNextResults(nextResultsURL).then((response) => {
                    handleNextResults(response);
                });
                break;
            case SEARCH_TYPES.USER: 
                setLoading(true);
                fetchUserNextResults(nextResultsURL).then((response) => {
                    handleNextResults(response);
                });
                break;
            default: 
                console.log("No search type");
        }
    }, [bottomReached])

    const onBottomReached = () => {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("Bottom Reached");
            setBottomReached(true);
        }
    }

    const handleNextResults = (response) => {
        if(response.error) {
            setShowStatusLog(true);
            setLoading(false);
            return;
        }

        let newData = [...data];
        newData.push(...response.tweets.map((el) => el));

        setData(newData);
        setNextResultsURL(response.nextResultsURL);
        setBottomReached(false);
        setLoading(false);
    }

    const handleSearch = (data, searchType) => {
        setShowStatusLog(false);
        setBottomReached(false);
        setSearchType(searchType);
        setNextResultsURL(data.nextResultsURL);
        setData(data.tweets);
    }

    return (
        <div style={{margin: 'var(--pageMargin)'}}>
            <Title>Search Tweets By User Or Content</Title>
            <SearchbarContainer search={handleSearch} searchTypes={SEARCH_TYPES} />
            {data ? <TwitterCards data={data}/>: null}

            {loading ? <LoadingSpinner/>: null}
            {showStatusLog ? <p>No Data...:(</p>: null}
            
            <ScrollToTopBtn />
        </div>
    );
};

export default UserSearchContainer;