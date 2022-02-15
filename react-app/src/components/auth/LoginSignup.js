import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginSignup = () => {
    return (
        <div className='login-signup'>
            <li>
                <NavLink className='login-signup-link' to='/login' exact={true} activeClassName='active'>
                    Login
                </NavLink>
            </li>
            <li className='login-signup-link'>|</li>
            <li>
                <NavLink className='login-signup-link' to='/sign-up' exact={true} activeClassName='active'>
                    Sign Up
                </NavLink>
            </li>
        </div>
    )
}

export default LoginSignup;
