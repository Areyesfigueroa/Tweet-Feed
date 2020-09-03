import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Background from '../../components/Background/Background';
import splashBG from '../../assets/images/splash-bg.jpg';


const UserSearchContainer = () => {

    return (
        <div>
            <Background imgSrc={splashBG} shadowOpacity={0.5}/>
            <Searchbar />
        </div>
    );
};

export default UserSearchContainer;