import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';


const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
        </Switch>
    </main>
)

export default RouteHandler;