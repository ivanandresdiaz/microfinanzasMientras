/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from '@pages/Home/Home';
import { PublicRouter } from './PublicRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import '../styles/Global.scss';
import { Modal } from '../componentsLess/Modal';
import NavBar from '../componentsFull/NavBar';
import { DivWholeApp } from './styledApp';
import Nosotros from '../pages/Nosotros';

const App = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const user = 'user';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (user) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn, dispatch]);

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <HashRouter>
        <Toaster
          style={{ textAlign: 'center' }}
          position='top-center'
          reverseOrder={false}
        />
        <DivWholeApp>
          <Switch>
            <PublicRoute
              showModal={showModal}
              setShowModal={setShowModal}
              exact
              path='/'
              component={Home}
              isAuthenticated={isLoggedIn}
            />

            <PublicRoute
              exact
              path='/auth'
              component={PublicRouter}
              isAuthenticated={isLoggedIn}
            />
            <PublicRoute
              showModal={showModal}
              setShowModal={setShowModal}
              exact
              path='/nosotros'
              component={Nosotros}
              isAuthenticated={isLoggedIn}
            />
            <Redirect to='/' />
          </Switch>
        </DivWholeApp>
      </HashRouter>
    </div>

  );
};
export default App;

