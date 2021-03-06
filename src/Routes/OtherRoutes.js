import React from 'react';
import { Switch, Route,  } from 'react-router-dom';
import Home from '../pages/Main/Home';
import Login from '../components/Login/Login'
import User from '../pages/User/User'

import UserPosting from '../pages/User/UserPosting'

function OtherRoutes() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <Switch  >
            <Route path="/" exact component={Home} />
            
            <Route path="/user" component={User} />
            <Route path="/posting" component={UserPosting} />
            <Route component={() => <div>Page 404!</div>} />
        </Switch>
    
    );
}

export default OtherRoutes;