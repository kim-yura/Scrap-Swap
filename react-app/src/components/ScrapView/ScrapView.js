import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import CommentsView from '../CommentsView/CommentsView';

import { loadAllScraps } from '../../store/scraps';
import { loadAllLikes, createLike, deleteLike } from '../../store/likes';

import './ScrapView.css';

const ScrapView = () => {

    const dispatch = useDispatch();
    const { scrapId } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadAllScraps());
        dispatch(loadAllLikes());
        window.scrollTo(0, 0);
    }, [dispatch]);

    const allScraps = useSelector(state => {
        return state.scraps
    });

    const selectedScrap = Object.values(Object.values(allScraps).filter(scrap => scrap.id === parseInt(scrapId)))[0];

    const allLikes = useSelector(state => {
        return state.likes
    });

    const sessionUserId = useSelector(state => {
        return state.session.user?.id || ''
    });
    const selectedScrapOwnerId = selectedScrap?.user.id;

    const selectedLikes = Object.values(Object.values(allLikes).filter(like => like.scrapId === parseInt(scrapId)));
    const userLikesCheck = () => {
        const found = selectedLikes.filter(like => like.userId === parseInt(sessionUserId));
        if (found.length) {
            return true;
        };
        return false;
    };

    const handleEdit = () => {
        history.push(`/scraps/${scrapId}/edit`);
    };
    const handleDelete = () => {
        history.push(`/scraps/${scrapId}/delete`);
    };

    const handleLike = async (e) => {
        e.preventDefault();
        animateLike();
        const newLike = {
            userId: sessionUserId,
            scrapId
        };
        await dispatch(createLike(newLike));
    };

    const handleUnlike = async (e) => {
        e.preventDefault();
        animateLike();
        const deletedLikeId = selectedLikes.filter(like => like.userId === parseInt(sessionUserId))[0].id;
        const deletedLike = {
            id: deletedLikeId
        };
        await dispatch(deleteLike(deletedLike));
    };

    const handleHome = () => {
        history.push('/');
    };

    const animateLike = () => {
        document.getElementById('like-icon').className = 'bounce';
        setTimeout(() => {
            try {
                document.getElementById('like-icon').className = 'like-counter-icon';
            }
            catch { };
        }, 500);
    };

    // if (!selectedScrap) {
    //     return <Redirect to='/page-not-found' />
    //   };

    let colorsArr = [];
    if (selectedScrap) {
        colorsArr = (selectedScrap.colors.split(' ')).filter(ele => (ele !== ''));
    };

    return (
        <>
            {selectedScrap ?

                <div className='scrap-view-page'>
                    <div className='scrap-view-gradient'></div>
                    <div className='scrap-view-container'>
                        <div className='scrap-view-container-left'>
                            <img src={selectedScrap?.imageURL} alt='User-uploaded scrap' />
                            {sessionUserId === selectedScrapOwnerId ?
                                <div className='scrap-view-buttons'>
                                    <button onClick={() => handleEdit()}>Edit Scrap</button>
                                    <button onClick={() => handleDelete()}>Delete Scrap</button>
                                </div>
                                : ''}
                        </div>
                        <div className='scrap-view-text'>
                            <div className='scrap-view-title-like'>
                                <h1>{selectedScrap?.title}</h1>
                                <div className='like-icon-and-counter'>
                                    {userLikesCheck() ?
                                        <img className='like-counter-icon'
                                            src='https://scrapswap.s3.amazonaws.com/like_yes.png'
                                            alt='like-button'
                                            id='like-icon'
                                            onClick={handleUnlike} /> :
                                        <img className='like-counter-icon'
                                            src='https://scrapswap.s3.amazonaws.com/like_no.png'
                                            alt='like-button'
                                            id='like-icon'
                                            onClick={handleLike} />}

                                    <div className='like-counter'>{selectedLikes.length}</div>
                                </div>
                            </div>
                            <div className='scrap-view-user-meta'>
                                <Link to={`/users/${selectedScrap?.user.id}`}>
                                    <img className='profile-pic' src={selectedScrap?.user.profilePicURL ? selectedScrap.user.profilePicURL : 'https://scrapswap.s3.amazonaws.com/logo_whitespace.png'} alt='User profile pic' />
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
                            <div className='scrap-colors'>
                                {colorsArr.map(color =>
                                    <div className='scrap-color'>
                                        {color === 'red' ? 'Red' :
                                            color === 'redorange' ? 'Red-orange' :
                                                color === 'orange' ? 'Orange' :
                                                    color === 'orangeyellow' ? 'Orange-yellow' :
                                                        color === 'yellow' ? 'Yellow' :
                                                            color === 'yellowgreen' ? 'Yellow-green' :
                                                                color === 'green' ? 'Green' :
                                                                    color === 'bluegreen' ? 'Blue-green' :
                                                                        color === 'blue' ? 'Blue' :
                                                                            color === 'bluepurple' ? 'Blue-purple' :
                                                                                color === 'purple' ? 'Purple' :
                                                                                    color === 'pink' ? 'Pink' :
                                                                                        color === 'white' ? 'White' :
                                                                                            color === 'gray' ? 'Gray' :
                                                                                                color === 'black' ? 'Black' :
                                                                                                    color === 'natural' ? 'Natural' :
                                                                                                        color === 'multicolored' ? 'Multicolored' :
                                                                                                            color === 'rainbow' ? 'Rainbow' : ''}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <CommentsView scrapId={scrapId} />
                </div>
                :
                <div className='pnf-page'>
                    <div className='pnf-gradient' />
                    <div className='pnf-content'>
                        <img src='https://scrapswap.s3.amazonaws.com/like_no.png' alt='gray-logo' />
                        <h1>Page not found</h1>
                        <h3>Oops! The selected resource doesn't exist or can't be located.</h3>
                        <button onClick={handleHome}>Back to Home</button>
                    </div>
                </div>}
        </>
    )
};

export default ScrapView;
