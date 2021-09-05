import React from 'react'
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Login from '../components/Login';
import NotFoundPage from '../components/NotFoundPage';

import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path="/" component={Login} />
            <PrivateRoute path="/dashboard" component={DashboardRouter} />  
            {/* not found pages   */}
            <Route path="/404" component={NotFoundPage} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </BrowserRouter>
      )
}

export default AppRouter
