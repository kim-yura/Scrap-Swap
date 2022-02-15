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
    const recentScraps = (allScrapsArr.slice(-4)).reverse();

    return (
        <div className='home-container'>
            <h2>Browse Recent Scraps</h2>
            {recentScraps.map(scrap => {
                return(
                    <ScrapCard scrap={scrap} />
                )
            })}
        </div>
    )
};

export default ScrapsRecent;
