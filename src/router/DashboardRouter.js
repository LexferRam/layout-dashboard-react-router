import React from 'react'
import {Route, Redirect, Switch, useRouteMatch } from "react-router-dom";

//pages
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import CategoriesRouter from './CategoriesRouter';

//layout router
import DashboardLayoutRouter from './DashboardLayoutRouter';

const DashboardRouter = () => {
    const {url} = useRouteMatch()

    return (
        <Switch>
            <DashboardLayoutRouter
                exact
                path={`${url}`}
                component={Page1}
            />
            <DashboardLayoutRouter
                exact
                path={`${url}/page2`}
                component={Page2}
            />
            <DashboardLayoutRouter
                exact
                path={`${url}/page3`}
                component={Page3}
            />
            <Route
                path={`${url}/category`}
                component={CategoriesRouter}         
             />
            <DashboardLayoutRouter path="*">
                <Redirect to="/404" />
            </DashboardLayoutRouter>
        </Switch>
    )
}

export default DashboardRouter
