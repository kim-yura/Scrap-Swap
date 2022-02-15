import React from 'react';

import './ScrapCard.css';

function ScrapCard({scrap}) {
    return(
        <div className='card'>
            <h3>{scrap.title}</h3>
            <img src={scrap.imageURL} />
        </div>
    )
};

export default ScrapCard;
