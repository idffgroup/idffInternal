import React from 'react';
import { Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Main from './containers/Main';
import Home from './containers/Home';
import LoginForm from "./containers/login/LoginForm";
import RegisterAccount from "./containers/register/RegisterAccount";
import MenuComponent from "./containers/menu/MenuComponent";
import LoginFormForgotPassword from "./containers/forgotpassword/ForgotPassword";
import RegisterAccountDetails from  "./containers/register/RegisterAccountDetails";

export default (
    <div>
        <Route path="/" component={Main} history={hashHistory}>
            <IndexRoute component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route component={LoginFormForgotPassword} path="/forgotpassword"/>
            <Route path="/register" component={RegisterAccount} />
            <Route path="/register/details" component={RegisterAccountDetails} />           
            <Route path="/menu" component={MenuComponent}>
                {/*<Route component={EmployeesList} path="/employees/list" />
                <Route component={EmployeeAdd} path="/employees/add" />*/}
            </Route>
        </Route>
    </div>
);
