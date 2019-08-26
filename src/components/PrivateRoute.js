import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { isAuth } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={async props =>{
            try{
                await isAuth();
                return ( <Component {...props} />) 
            }catch{
                return ( <Redirect to={{ pathname: "/", state: { from: props.location } }} />)
            }
        }
            // await isAuth() ? 
            //     
            //     :
            //     
        }
    />
);


export default PrivateRoute;