import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalFeed from './main/GlobalFeed'
import Article from './main/Article'
import Authorization from './auth/Authorization'
import Register from './auth/Register'
import TagFeed from './main/TagFeed'
import YourFeed from './main/FeedToogler'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={GlobalFeed} />
            <Route path="/articles/:id" component={Article} />
            <Route path="/login" component={Authorization} />
            <Route path="/feed" component={YourFeed} />
            <Route path="/register" component={Register} />
            <Route path="/tags/:slug" component={TagFeed} />
        </Switch>
    )
}

export default Routes
