import React from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import App from '../App'

function AppRouter() {
    return (
        <Router>
            <Route exact path='/' component={App} />
            <LayoutRouter />
        </Router>
    )
}

export default AppRouter
