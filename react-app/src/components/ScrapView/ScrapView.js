import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import { loadAllScraps } from '../../store/scraps';

import './ScrapView.css';

const ScrapView = () => {

    const dispatch = useDispatch();
    const { scrapId } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadAllScraps());
        window.scrollTo(0, 0);
    }, []);

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const selectedScrap = Object.values(Object.values(allScraps).filter(scrap => scrap.id === parseInt(scrapId)))[0];

    const sessionUserId = useSelector(state => {
        return state.session.user.id
    });
    const selectedScrapOwnerId = selectedScrap?.id;

    const handleEdit = () => {
        history.push(`/scraps/${scrapId}/edit`);
    };

    return (
        <div className='scrap-view-page'>
            <div className='scrap-view-gradient'></div>
            <div className='scrap-view-container'>
                <div className='scrap-view-container-left'>
                    <img src={selectedScrap?.imageURL} />
                    {sessionUserId === selectedScrapOwnerId ?
                        <div className='scrap-view-buttons'>
                            <button onClick={() => handleEdit()}>Edit Scrap</button>
                            <button>Delete Scrap</button>
                        </div>
                        : ''}
                </div>
                <div className='scrap-view-text'>
                    <h1>{selectedScrap?.title}</h1>
                    <div className='scrap-view-user-meta'>
                        <Link to={`/users/${selectedScrap?.user.id}`}>
                            <img className='profile-pic' src={selectedScrap?.user.profilePicURL ? selectedScrap.user.profilePicURL : ''} alt='User profile pic' />
                        </Link>
                        <p>Posted by <Link to={`/users/${selectedScrap?.user.id}`}>{selectedScrap?.user.username}</Link></p>

                    </div>
                    <p>Yarn Weight: {selectedScrap?.yarnWeight.name} Weight</p>
                    <p>Fiber Content: {selectedScrap?.fiberContent}</p>
                    <p>Yardage: {selectedScrap?.yardage} yards</p>
                    <p>Allergens: {selectedScrap?.allergens}</p>
                    <p>{selectedScrap?.swapTargetId === 1 ? <>Looking to Trade</>
                        : selectedScrap?.swapTargetId === 2 ? <>Free with Postage</>
                            : selectedScrap?.swapTargetId === 3 ? <>Free</> :
                                <>Unknown Type of Trade</>}</p>
                    <p>{selectedScrap?.textContent}</p>
                </div>
            </div>
        </div>
    )
};

export default ScrapView;
