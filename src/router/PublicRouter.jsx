/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Login from '../containers/Login/Login';
// import LandingPage from '../containers/LandingPage/LandingPage';

export const PublicRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Switch>
          {/* <Route
            exact
            path='/login'
            component={Login}
          /> */}
          <Redirect to='/' />

        </Switch>
      </div>

    </div>
  );
};
