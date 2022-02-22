import React from 'react';
import { useSelector } from 'react-redux';

import ImageCarousel from './ImageCarousel';
import ScrapsRecent from '../ScrapsRecent/ScrapsRecent';
import ScrapsRecentFromFollows from '../ScrapsRecentFromFollows/ScrapsRecentFromFollows';

import './HomePage.css';

const HomePage = () => {
    window.scrollTo(0, 0);

    const sessionUser = useSelector(state => {
        return state.session.user || ''
    });

    return (
        <>
            <ImageCarousel />
            <ScrapsRecent />
            {sessionUser ?
                <ScrapsRecentFromFollows sessionUser={sessionUser} />
                : ''
            }
        </>
    )
};

export default HomePage;
