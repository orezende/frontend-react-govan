import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

import Index from './pages/Index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={InitialPage} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={() => <h1> Signup </h1>} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/index" component={Index} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;