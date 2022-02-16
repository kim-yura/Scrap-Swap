import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import './Auth.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords must match.']);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-background'>
      {errors.length ?
        <div className='auth-errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div> : ''}

      <form onSubmit={onSignUp} className='login-form'>
        <img className='auth-logo' src='/images/logo_whitespace.png' alt='Site logo' />
        <h3>
          Sign Up for an Account
        </h3>
        <input
          type='text'
          name='username'
          placeholder='Enter a username'
          onChange={updateUsername}
          value={username}
          required={true}
        />
        <input
          type='text'
          name='email'
          placeholder='Enter an email address'
          onChange={updateEmail}
          value={email}
          required={true}
        />
        <input
          type='password'
          name='password'
          placeholder='Enter a password'
          onChange={updatePassword}
          value={password}
          required={true}
        />
        <input
          type='password'
          name='repeat_password'
          placeholder='Enter your password again'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        />
        <button type='submit'>Sign Up</button>
        <h3>
          Already have an account? <Link className='auth-link' to={'/login'}>Sign in here</Link>
        </h3>
      </form>
    </div>
  );
};

export default SignUpForm;
