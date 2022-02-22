import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadAllScraps } from '../../store/scraps';

import ImageCarousel from './ImageCarousel';
import ScrapsRecent from '../ScrapsRecent/ScrapsRecent';
import ScrapsRecentFromFollows from '../ScrapsRecentFromFollows/ScrapsRecentFromFollows';

import './HomePage.css';

const HomePage = () => {
    window.scrollTo(0, 0);

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => {
        return state.session.user || ''
    });

    useEffect(() => {
        dispatch(loadAllScraps())
    }, []);

    return (
        <div className='home-body'>
            <ImageCarousel />
            <ScrapsRecent />
            {sessionUser ?
                <ScrapsRecentFromFollows sessionUser={sessionUser} />
                : ''
            }
        </div>
    )
};

export default HomePage;
