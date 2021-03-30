import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalFeed from './main/GlobalFeed'
import Article from './main/Article'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={GlobalFeed} />
            <Route path="/articles/:id" component={Article} />
        </Switch>
    )
}

export default Routes
