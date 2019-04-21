import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Signup from './views/Signup';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import Payment from './views/Payment';
import ScrollToTop from './components/ScrollToTop';
import test from './playground/Modal';

const RouteHandler = () => (
    <main>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/homepage' component={HomePage} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/payment' component={Payment} />
                <Route exact path='/test' component={test} />
            </Switch>
        </ScrollToTop>
    </main>
)

export default RouteHandler;