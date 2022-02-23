import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './ScrapsDeleteForm.css';

const ScrapDeleteConfirmation = () => {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleHome = () => {
        history.push('/');
    };


    return (
        <div className='delete-scrap-background'>
            <div className='delete-form'>
                <div className='delete-scrap-header'>
                    Scrap successfully deleted!
                </div>
                <div className='delete-scrap-buttons'>
                    <button onClick={() => handleHome()}>Back to Home</button>
                </div>
            </div>
        </div>
    )
};

export default ScrapDeleteConfirmation;
