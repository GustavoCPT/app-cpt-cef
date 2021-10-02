import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../components/Login/Login'
import User from '../pages/Users/User'

function Routes() {
    return (
        <Switch >
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
        </Switch>
    
    );
}

export default Routes;