import React, { useRef } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';

import { fetchUserTweets, fetchContentTweets } from '../../fakeData';

const SearchbarContainer = (props) => {
    const inputRef = useRef(null);

    const handleSearchByContent = () => {
        console.log("Searching by Content");
        fetchContentTweets(inputRef.current.value)
        .then(res => {
          console.log(res);
          props.search(res, props.searchTypes.CONTENT); //Pass in the search results
        })
        .catch(error => console.log("Search by user Error"));
    }

    const handleSearchByUser = () => {
        console.log("Searching by User");
        fetchUserTweets(inputRef.current.value)
        .then(res => {
          console.log(res);
          props.search(res, props.searchTypes.USER); //Pass in the search results
        })
        .catch(error => console.log("Search by content Error"));
    }
    return (
        <Searchbar
            reference={inputRef}
            userSearch={handleSearchByUser}
            contentSearch={handleSearchByContent} />
    );
};

export default SearchbarContainer;