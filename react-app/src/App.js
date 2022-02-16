import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

import ScrapsPostForm from './components/ScrapsPostForm/ScrapsPostForm';

import ScrapView from './components/ScrapView/ScrapView';

import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import UserView from './components/UserView/UserView';
import { authenticate } from './store/session';

import './index.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>

        <Route path='/' exact={true} >
          <HomePage />
        </Route>

        <ProtectedRoute path='/scraps/create' exact={true} >
          <ScrapsPostForm />
        </ProtectedRoute>

        <Route path='/scraps/:scrapId' exact={true} >
          <ScrapView />
        </Route>

        <ProtectedRoute path='/users/:userId' exact={true} >
          <UserView />
        </ProtectedRoute>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
