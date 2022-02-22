import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';

import { createFollow, deleteFollow } from '../../store/session';
import { loadAllScraps } from '../../store/scraps';
import UserLikes from './UserLikes';
import UserScrapCard from './UserScrapCard';
import UsersFollows from './UsersFollows';

import './UserView.css';

function UserView() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadAllScraps())
    window.scrollTo(0, 0);

    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  const allScraps = useSelector(state => {
    return state.scraps;
  });

  const sessionUser = useSelector(state => {
    return state.session.user
  });

  const sessionUserId = useSelector(state => {
    return state.session.user?.id || ''
  });

  const usersScraps = Object.values(Object.values(allScraps).filter(scrap => scrap.userId === parseInt(userId)));

  const editUser = () => {
    history.push(`/users/edit`);
  };

  if (user.user === '') {
    return <Redirect to='/page-not-found' />
  };

  const followUser = async () => {
    const follow = {
      followerId: sessionUserId,
      followingId: userId
    };
    await dispatch(createFollow(follow));
  };

  const unfollowUser = async () => {
    const unfollow = {
      followerId: sessionUserId,
      followingId: parseInt(userId)
    };
    console.log(unfollow);
    await dispatch(deleteFollow(unfollow));
  };

  return (
    <div className='user-view-page'>
      <div className='scrap-view-gradient'></div>

      <ul className='user-view-body'>
        <li>
          <img className='user-view-profile-pic' src={user.profile_pic_url ? user.profile_pic_url : ''} alt='User profile' />
        </li>
        <li className='user-view-header'>
          {user.username}'s Page
        </li>
        <li className='user-view-bio-header'>
          Bio
        </li>
        <li className='user-view-bio'>
          {user.bio}
        </li>

        {sessionUserId === parseInt(userId) ?
          <div className='user-options'>
            <button className='user-option-button'
              onClick={() => editUser()}>Edit Profile</button>
          </div>
          : ''}

        {sessionUserId === parseInt(userId) ?
          <>
            <UsersFollows user={user} />
          </>
          : ''
        }

        {sessionUserId !== parseInt(userId) ?
          sessionUser.following_id.includes(parseInt(userId)) ?
            <div className='follow-options'>
              <button className='follow-button'
                onClick={unfollowUser}>
                Unfollow User
              </button>
            </div>
            :
            <div className='follow-options'>
              <button className='follow-button'
                onClick={followUser}>
                Follow User
              </button>
            </div>

          : ''}

        <h3>{user.username}'s Scraps</h3>
        <div className={usersScraps.length > 5 ? 'user-view-scraps-gallery-long' : 'user-view-scraps-gallery'}>
          {usersScraps.length ?
            usersScraps.map((scrap, idx) => {
              return (
                <UserScrapCard scrap={scrap} key={idx} />
              )
            })
            : <div className='user-view-no-scraps'>
              <img src='https://scrapswap.s3.amazonaws.com/like_no.png' alt='Gray yarn logo' />
              This user has no Scraps!
            </div>}
        </div>

        {sessionUserId === parseInt(userId) ?
          <>
            <UserLikes user={user} userId={userId} />
          </>
          : ''
        }
      </ul >

    </div >
  );
}
export default UserView;
