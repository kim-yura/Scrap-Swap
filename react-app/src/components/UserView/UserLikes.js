import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadAllLikes } from '../../store/likes';
import UserSlapCard from './UserSlapCard';

const UserLikes = ({ user, userId }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllLikes());
    }, []);

    const allLikes = useSelector(state => {
        return state.likes
    });

    const allScraps = useSelector(state => {
        return state.scraps;
    });

    const usersLikes = Object.values(Object.values(allLikes).filter(like => like.userId === parseInt(userId)));
    const usersLikesArr = [];
    usersLikes.map(like => {
        const likedScrap = Object.values(Object.values(allScraps).filter(scrap => scrap.id === like.scrapId))[0];
        usersLikesArr.push(likedScrap);
    });

    return (
        <div className='users-likes'>
            <h3>Scraps that Slap for {user.username}</h3>
            <div className={usersLikesArr.length >= 7 ? 'users-likes-gallery-long' : 'users-likes-gallery'}>
                {usersLikesArr.length ?
                    usersLikesArr.map((scrap, idx) => {
                        return (
                            <UserSlapCard scrap={scrap} key={idx} />
                        )
                    })
                    : <div className='missing-likes'>
                        You haven't liked any Scraps!
                    </div>}
            </div>
        </div>
    )
};

export default UserLikes;
