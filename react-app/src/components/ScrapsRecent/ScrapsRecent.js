import React from 'react';
import { useSelector } from 'react-redux';

import ScrapCard from '../ScrapCard/ScrapCard';

import './ScrapsRecent.css';

function ScrapsRecent() {

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const allScrapsArr = Object.values(allScraps);
    const recentScraps = (allScrapsArr.slice(-7)).reverse();

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
        </div>
    )
};

export default ScrapsRecent;
