import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AddDish from '../components/AddDish';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/add" component={AddDish} />
                <Route path="/home" component={HomePage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;