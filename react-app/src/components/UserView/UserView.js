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
    return null;
  }

  return (
    <div className='user-view-page'>
      <div className='scrap-view-gradient'></div>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul>
    </div>
  );
}
export default UserView;
