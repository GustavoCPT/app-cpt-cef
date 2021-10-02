import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../components/Login/Login'

function Routes() {
    return (
        <Switch >
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    
    );
}

export default Routes;