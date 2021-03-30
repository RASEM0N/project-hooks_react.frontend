import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalFeed from './main/GlobalFeed'
import Article from './main/Article'
import Authorization from './auth/Authorization'
import Register from './auth/Register'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={GlobalFeed} />
            <Route path="/articles/:id" component={Article} />
            <Route path="/login" component={Authorization} />
            <Route path="/register" component={Register} />
        </Switch>
    )
}

export default Routes
