import React from 'react';
import { useSelector } from 'react-redux';

import ScrapCard from '../ScrapCard/ScrapCard';


function ScrapsRecentFromFollows({sessionUser}) {

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const followingsIdArr = [];
    sessionUser.following.forEach((follow) => {
        followingsIdArr.push(follow.id);
    });

    const allScrapsArr = Object.values(allScraps);
    const followingsScrapsArr = allScrapsArr.filter(scrap => followingsIdArr.includes(scrap.userId));
    const recentScraps = (followingsScrapsArr.slice(-7)).reverse();

    return (
        <div className='home-container'>
            <h2 className='home-container-header'>Recent Scraps From Users You Follow</h2>
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

export default ScrapsRecentFromFollows;
