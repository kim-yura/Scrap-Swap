import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './ScrapsDeleteForm.css';

const ScrapDeleteConfirmation = () => {

    const dispatch = useDispatch();
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
