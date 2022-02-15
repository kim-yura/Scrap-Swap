import React from 'react';

import ImageCarousel from './ImageCarousel';
import ScrapsRecent from '../ScrapsRecent/ScrapsRecent';

import './HomePage.css';

const HomePage = () => {
    window.scrollTo(0,0);

    return (
        <>
            <ImageCarousel />
            <ScrapsRecent />
        </>
    )
};

export default HomePage;
