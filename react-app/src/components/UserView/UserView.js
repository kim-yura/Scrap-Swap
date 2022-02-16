import React, { useState, useEffect } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';

import './UserView.css';

function UserView() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
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

  if (!user) {
    return <Redirect to='/' />;
  }

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
      </ul>
    </div>
  );
}
export default UserView;
