import React, { useState } from 'react';
import SearchbarContainer from '../SearchbarContainer/SearchbarContainer';

// TESTING
import TwitterCards from '../../components/TwitterCards/TwitterCards';
import profileImg from '../../assets/images/profile.png';

const dummyData = {
    name: "Aliel Reyes",
    image: profileImg,
    url: "@alielreyes",
    content: "This is a post content",
    date: "09/16/1994",
    hearts: 10000,
    retweets: 11000
}

const UserSearchContainer = () => {

    const [searchData, setSearchData]= useState(dummyData);

    return (
        <div>
            <SearchbarContainer search={setSearchData}/>
            {searchData ? <TwitterCards data={searchData}/> : null}
        </div>
    );
};

export default UserSearchContainer;