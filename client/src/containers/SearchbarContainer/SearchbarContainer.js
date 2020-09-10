import React, { useRef } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';

const SearchbarContainer = (props) => {
    const inputRef = useRef(null);
    const handleSearchByUser = () => {
        //Fetch results via api call and update the search function.
        props.search(`${inputRef.current.value}, User Search`); //Pass in the search results
    }
    const handleSearchByContent = () => {
        //Fetch results via api call and update the search function.
        props.search(`${inputRef.current.value}, Content Search`); //Pass in the search results
    }
    return (
        <Searchbar
            reference={inputRef}
            userSearch={handleSearchByUser}
            contentSearch={handleSearchByContent} />
    );
};

export default SearchbarContainer;