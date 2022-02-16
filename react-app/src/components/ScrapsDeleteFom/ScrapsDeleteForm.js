import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { deleteScrap, loadAllScraps } from '../../store/scraps';

import './ScrapsDeleteForm.css';

const ScrapDeleteForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadAllScraps());
        window.scrollTo(0, 0);
    }, []);

    const sessionUserId = useSelector(state => state.session.user.id);
    const { scrapId } = useParams();

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const selectedScrap = Object.values(Object.values(allScraps).filter(scrap => scrap.id === parseInt(scrapId)))[0];

    const handleDelete = () => {
        const deletedScrap = dispatch(deleteScrap(scrapId));
        history.push('/scraps/delete/confirm');
    };

    const handleCancel = () => {
        history.push(`/scraps/${scrapId}`);
    };


    return (
        <div className='delete-scrap-background'>
            {sessionUserId !== selectedScrap?.userId ? <Redirect to='/' /> : ''}
            <div className='delete-form'>
                <div className='delete-scrap-header'>
                    Are you sure you want to delete this scrap?
                </div>
                <img className='delete-scrap-image' src={selectedScrap?.imageURL} alt='Scrap'/>
                <div className='delete-scrap-title'>
                    {selectedScrap?.title}
                </div>
                <div className='delete-scrap-buttons'>
                    <button onClick={() => handleDelete()}>Delete</button>
                    <button onClick={() => handleCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
};

export default ScrapDeleteForm;
