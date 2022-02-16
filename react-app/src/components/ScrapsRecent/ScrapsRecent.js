import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadAllScraps } from '../../store/scraps';

import ScrapCard from '../ScrapCard/ScrapCard';

import './ScrapsRecent.css';

function ScrapsRecent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllScraps())
    }, []);

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const allScrapsArr = Object.values(allScraps);
    const recentScraps = (allScrapsArr.slice(-5)).reverse();

    return (
        <div className='home-container'>
            <h2 className='home-container-header'>Browse Recent Scraps</h2>
            <div className='home-container-row'>
                {recentScraps.map((scrap, idx) => {
                    return (
                        <ScrapCard scrap={scrap} key={idx}/>
                    )
                })}
            </div>
            <div className='home-container'>
                Hello
            </div>
        </div>
    )
};

export default ScrapsRecent;
