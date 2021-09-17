/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  showModal,
  setShowModal,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) => (
        (isAuthenticated) ?
          (
            <Component
              {...props}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) :
          (<Redirect to='/auth/landingPage' />)
      )}
    />
  );
};
