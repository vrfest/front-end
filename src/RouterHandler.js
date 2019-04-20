import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';



const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
    </main>
)

export default RouteHandler;