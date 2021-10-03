import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login/Login'


function SignRoutes() {
    return (
        <Switch >
            <Route path="/" exact component={Login} />
            <Route component={() => <div>Page 404!</div>} />
        </Switch>
    
    );
}

export default SignRoutes;