import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

const HeaderContainer = () => {

    const[style, setStyle] = useState({});

    useEffect(() => {
        window.addEventListener('resize', handleBootstrapQueries);
        mediaQuery(window.innerWidth);

        return function cleanup () {
            window.removeEventListener('resize', handleBootstrapQueries);
        }
    }, []);

    const handleBootstrapQueries = () => {
        console.log("Resize");
        mediaQuery(window.innerWidth);
    }

    const mediaQuery = (windowWidth) => {
        //MOBILE
        if(windowWidth <= 991) {
            setStyle({backgroundColor: "var(--lightGreen)"});
        } else if(windowWidth >= 992) {
            setStyle({backgroundColor: "var(--lightGreen)"});
        }
    }

    return (
        <Header style={style}/>
    );
};

export default HeaderContainer;