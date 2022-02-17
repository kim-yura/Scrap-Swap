import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';

import { loadAllScraps } from '../../store/scraps';
import UserScrapCard from './UserScrapCard';

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

  const sessionUserId = useSelector(state => {
    return state.session.user?.id || ''
  });

  const usersScraps = Object.values(Object.values(allScraps).filter(scrap => scrap.userId === parseInt(userId)));

  // TODO: MAKE THIS WORK
  if (!user) {
    return <Redirect to='/' />;
  };

  const editUser = () => {
    history.push(`/users/edit`);
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
          Lorem ipsum dolor sit amet.
        </li>

        {sessionUserId === parseInt(userId) ?
          <div className='user-options'>
            <button className='user-option-button'
            onClick={() => editUser()}>Edit Profile</button>
          </div>
          : ''}

        <h3>{user.username}'s Scraps</h3>
        <div className='user-view-scraps-gallery'>
          {usersScraps.length ?
            usersScraps.map((scrap, idx) => {
              return (
                <UserScrapCard scrap={scrap} key={idx} />
              )
            })
            : 'no scraps found'}

        </div>
      </ul>

    </div>
  );
}
export default UserView;
