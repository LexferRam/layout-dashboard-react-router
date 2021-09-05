import Category from 'components/Category';
import React from 'react'
import { Redirect, Switch, useRouteMatch } from "react-router-dom";

//layout router
import DashboardLayoutRouter from './DashboardLayoutRouter';

const CategoriesRouter = () => {
    const {url} = useRouteMatch()

    return (
        <Switch>
            <DashboardLayoutRouter
                exact
                path={`${url}/category1`}
                component={Category}
            />
            <DashboardLayoutRouter path="*">
                <Redirect to="/404" />
            </DashboardLayoutRouter>
        </Switch>
    )
}

export default CategoriesRouter
