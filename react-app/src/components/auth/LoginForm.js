import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import './Auth.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleDemoLogin = async () => {
    setEmail('yura@aa.io');
    setPassword('password');
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    };
  };

  if (user) {
    return <Redirect to='/' />;
  };

  return (
    <div className='login-background'>
      {errors.length ?
        <div className='auth-errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div> : ''}

      <form onSubmit={onLogin} className='login-form'>
        <img className='auth-logo' src='/images/logo_whitespace.png' alt='Site logo' />
        <h3>
          Log In as an Existing User
        </h3>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit'>Login</button>
        <button onClick={() => handleDemoLogin()}>Demo User</button>
        <h3>
          No account? <Link className='auth-link' to={'/sign-up'}>Sign up here</Link>
        </h3>
      </form>
    </div>
  );
};

export default LoginForm;
