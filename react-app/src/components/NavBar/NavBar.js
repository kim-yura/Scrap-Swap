import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginSignup from '../auth/LoginSignup';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav>

      <ul className='navbar-top'>
        <div className='navbar-top-left'>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
        </div>
        <div className='navbar-top-right'>
          {(user) ? <NavLink className='logged-in' to={`/users/${user.id}`}>Welcome, {user.username}!</NavLink> : ''}
          {(user) ? <div className='logged-in'>|</div> : ''}
          {(user) ? <LogoutButton className='logout-button' /> : <LoginSignup className='login-signup' />}
        </div>
      </ul>

      <ul className='navbar-bottom'>

      </ul>
    </nav>
  );
}

export default NavBar;
