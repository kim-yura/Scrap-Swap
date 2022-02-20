import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

import ScrapsPostForm from './components/ScrapsPostForm/ScrapsPostForm';
import ScrapsEditForm from './components/ScrapsEditForm/ScrapsEditForm';
import ScrapDeleteForm from './components/ScrapsDeleteFom/ScrapsDeleteForm';
import ScrapDeleteConfirmation from './components/ScrapsDeleteFom/ScrapsDeleteConfirmation';

import ScrapView from './components/ScrapView/ScrapView';

import SearchForm from './components/Search/SearchForm';

import ProtectedRoute from './components/auth/ProtectedRoute';
import UserView from './components/UserView/UserView';
import UserEdit from './components/UserEdit/UserEdit';
import { authenticate } from './store/session';

import PageNotFound from './components/PageNotFound/PageNotFound';

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
        <ProtectedRoute path='/scraps/:scrapId/edit' exact={true} >
          <ScrapsEditForm />
        </ProtectedRoute>
        <ProtectedRoute path='/scraps/:scrapId/delete' exact={true} >
          <ScrapDeleteForm />
        </ProtectedRoute>
        <ProtectedRoute path='/scraps/delete/confirm' exact={true} >
          <ScrapDeleteConfirmation />
        </ProtectedRoute>

        <Route path='/scraps/:scrapId' exact={true} >
          <ScrapView />
        </Route>

        <ProtectedRoute path='/users/edit' exact={true}>
          <UserEdit />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <UserView />
        </ProtectedRoute>

        <Route path='/search' exact={true} >
          <SearchForm />
        </Route>

        <Route path='/page-not-found' exact={true}>
          <PageNotFound />
        </Route>
      </Switch>

      <PageNotFound />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
