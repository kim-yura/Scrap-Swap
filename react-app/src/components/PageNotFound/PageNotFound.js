import { React } from 'react';
import { useHistory } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound() {
    const history = useHistory();

    const handleHome = () => {
        history.push('/');
    };

    return (
        <div className='pnf-page'>
            <div className='pnf-gradient' />
            <div className='pnf-content'>
                <img src='https://scrapswap.s3.amazonaws.com/like_no.png' alt='gray-logo' />
                <h1>Page not found</h1>
                <h3>Oops! The selected resource doesn't exist or can't be located.</h3>
                <button onClick={handleHome}>Back to Home</button>
            </div>
        </div>
    )
};

export default PageNotFound;
