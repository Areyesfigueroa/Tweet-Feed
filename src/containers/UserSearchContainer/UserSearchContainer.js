import React, { useState, useEffect } from 'react';
import SearchbarContainer from '../SearchbarContainer/SearchbarContainer';
import ScrollToTopBtn from '../../components/ScrollToTopBtn/ScrollToTopBtn';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// TESTING
import TwitterCards from '../../components/TwitterCards/TwitterCards';
import { fetchData } from '../../fakeData';

const UserSearchContainer = () => {

    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [bottomReached, setBottomReached]=useState(false);


    useEffect(() => {
        window.addEventListener("scroll", onBottomReached);

        setLoading(true);
        fetchData(4).then((response) => {
            setData(response);
            console.log(response);
            setLoading(false);
        });

        return function cleanup() {
            window.removeEventListener("scroll", onBottomReached);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        fetchData(4).then((response) => {
            let newData = [...data];
            response.forEach((el) => newData.push(el));

            setData(newData);
            setLoading(false);
            setBottomReached(false);
        });
    }, [bottomReached])

    

    const onBottomReached = () => {
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("Bottom Reached");
            setBottomReached(true);
        }
    }

    return (
        <div>
            <SearchbarContainer search={setData}/>
            {data ? <TwitterCards data={data}/>: <LoadingSpinner /> }

            {loading ? <LoadingSpinner/>: null}
            
            <ScrollToTopBtn />
        </div>
    );
};

export default UserSearchContainer;