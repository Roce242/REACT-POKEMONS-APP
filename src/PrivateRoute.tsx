import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthentificationService from './services/authentification-service';
  
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = AuthentificationService.isAuthenticated;
    if (!isAuthenticated) {    
      return <Redirect to={{ pathname: '/login' }} />
    }
  
    return <Component {...props} />
  }} />
);
  
export default PrivateRoute;