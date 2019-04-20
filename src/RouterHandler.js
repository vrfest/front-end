import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Login from './views/Login';


const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Login} />
        </Switch>
    </main>
)

export default RouteHandler;