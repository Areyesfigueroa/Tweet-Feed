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
        
        if(searchType === SEARCH_TYPES.CONTENT) {
            setLoading(true);
            fetchContentNextResults(nextResultsURL).then((response) => {
                console.log(response);
                // let newData = [...data];
                // response.forEach((el) => newData.push(el));
    
                // setData(newData);
                setLoading(false);
                // setBottomReached(false);
            });
        } else if(searchType === SEARCH_TYPES.USER) {
            setLoading(true);
            fetchUserNextResults(nextResultsURL).then((response) => {
                console.log(response);
                // let newData = [...data];
                // response.forEach((el) => newData.push(el));
    
                // setData(newData);
                setLoading(false);
                // setBottomReached(false);
            });
        } else {
            console.log("No search type");
        }
    }, [bottomReached])

    const onBottomReached = () => {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("Bottom Reached");
            setBottomReached(true);
        }
    }

    const handleSearch = (data, searchType) => {
        setSearchType(searchType);
        setData(data.tweets);
        setNextResultsURL(data.nextResultsURL);
    }

    return (
        <div style={{margin: 'var(--pageMargin)'}}>
            <Title>Search Tweets By User Or Content</Title>
            <SearchbarContainer search={handleSearch} searchTypes={SEARCH_TYPES} />
            {data ? <TwitterCards data={data}/>: null}

            {loading ? <LoadingSpinner/>: null}
            
            <ScrollToTopBtn />
        </div>
    );
};

export default UserSearchContainer;