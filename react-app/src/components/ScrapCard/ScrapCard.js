import React from 'react';
import { Link } from 'react-router-dom';

import './ScrapCard.css';

function ScrapCard({ scrap }) {
    return (
        <div className='card'>
            <Link to={`/scraps/${scrap.id}`}><img className='card-image' src={scrap.imageURL} alt='Scrap yarn' /></Link>
            <Link to={`/scraps/${scrap.id}`}><h3 className='card-title'>{scrap.title}</h3></Link>
            <p className='card-user'>Uploaded by <Link to={`/users/${scrap.user.id}`}>{scrap.user.username}</Link></p>
            <p className='card-target'>Looking {scrap.swapTargetId === 1 ? 'for trade'
                : scrap.swapTargetId === 2 ? 'to send for postage'
                    : scrap.swapTargetId === 3 ? 'to send for free'
                        : ''
            }</p>
        </div>
    )
};

export default ScrapCard;
