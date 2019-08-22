import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={InitialPage} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={() => <h1> Signup </h1>} />
            <Route path="/register" component={() => <h1> Register </h1>} />
            <PrivateRoute path="/app" component={() => <h1> App </h1>} />
            <Route path="*" component={() => <h1> Page not found </h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;