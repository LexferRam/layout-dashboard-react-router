import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import DashboardLayout from './layouts/DashboardLayout';

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  console.log(Component)
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
    />
  );
};


const Appp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <DashboardLayoutRoute
          exact
          path="/dashboard"
          component={() => <>Page 1</>}
        />
        <DashboardLayoutRoute
          exact
          path="/dashboard/page2"
          component={() => <>Page 2</>}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Appp
