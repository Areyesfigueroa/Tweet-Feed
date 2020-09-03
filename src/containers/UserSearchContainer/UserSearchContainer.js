import React from 'react';
import SearchbarContainer from '../SearchbarContainer/SearchbarContainer';

const UserSearchContainer = () => {
    const handleSearch = (data) => {
        console.log(data);
    }
    return (
        <div>
            <SearchbarContainer search={handleSearch}/>
        </div>
    );
};

export default UserSearchContainer;