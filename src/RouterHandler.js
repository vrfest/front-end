import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import ScrollToTop from './components/ScrollToTop';

const RouteHandler = () => (
    <main>
        <ScrollToTop>
        <Switch>
            <Route exact path='/landing' component={LandingPage} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
        </ScrollToTop>
    </main>
)

export default RouteHandler;