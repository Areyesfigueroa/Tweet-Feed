import React,{ Fragment } from 'react';
import UserProfileCards from './UserProfileCards/UserProfileCards';

const userProfileCardsLayout = (props) => {
    return (
        <Fragment>
            <UserProfileCards data={props.data.slice(0, 2)} click={props.click}/>
            <UserProfileCards data={props.data.slice(2, 3)} click={props.click}/>
            <UserProfileCards data={props.data.slice(3, 5)} click={props.click}/>
        </Fragment>
    );
};

export default userProfileCardsLayout;