import React from 'react';
import { Link } from 'react-router-dom';

const UserScrapCard = ({ scrap }) => {
    return (
        <div className='user-view-card'>
            <Link to={`/scraps/${scrap.id}`}><img className='user-view-card-image' src={scrap.imageURL} alt='Scrap' /></Link>
            <Link to={`/scraps/${scrap.id}`}><div className='user-view-card-title'>{scrap.title}</div></Link>
            <p className='user-view-card-target'>Looking {scrap.swapTargetId === 1 ? 'for trade'
                : scrap.swapTargetId === 2 ? 'to send for postage'
                    : scrap.swapTargetId === 3 ? 'to send for free'
                        : ''
            }</p>
        </div>
    );
};

export default UserScrapCard;
