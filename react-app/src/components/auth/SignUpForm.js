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

  const [validationErrors, setValidationErrors] = useState([]);

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address.');
    };
    if (password !== repeatPassword) {
      errors.push('Passwords must match.');
    };

    if (password === repeatPassword && emailRegex.test(email)) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        data.map(bit => errors.push(bit));
      };
    };

    setValidationErrors(errors);
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
      {validationErrors.length ?
        <div className='auth-errors'>
          {validationErrors.length > 0 &&
            validationErrors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
        </div> : ''}

      <form onSubmit={onSignUp} className='login-form'>
        <img className='auth-logo' src='https://scrapswap.s3.amazonaws.com/logo_whitespace.png' alt='Site logo' />
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
