import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// import Login from '../components/Login'
// import DashboardRouter from './DashboardRouter'
// import NotFoundPage from '../components/NotFoundPage'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import WarningAlert from 'components/WarningAlert'

const Login = lazy(() => import('../components/Login'))
const DashboardRouter = lazy(() => import('./DashboardRouter'))
const NotFoundPage = lazy(() => import('../components/NotFoundPage'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <WarningAlert />
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <PublicRoute exact path='/' component={Login} />
          <PrivateRoute path='/dashboard' component={DashboardRouter} />
          {/* not found pages   */}
          <Route path='/404' component={NotFoundPage} />
          <Route path='*'>
            <Redirect to='/404' />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
