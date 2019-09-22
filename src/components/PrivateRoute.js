import React from 'react';

import { Redirect, Route } from 'react-router-dom';

import { isAuth } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);


export default PrivateRoute;