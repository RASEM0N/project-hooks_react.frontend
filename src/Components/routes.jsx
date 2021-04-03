import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalFeed from './main/GlobalFeed'
import Article from './main/Article'
import Authorization from './auth/Authorization'
import Register from './auth/Register'
import TagFeed from './main/TagFeed'
import YourFeed from './main/YourFeed'
import CreateArticle from './main/CreateArticle'
import EditArticle from './main/EditArticle'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={GlobalFeed} />
            <Route path="/article/:slug" component={Article} />
            <Route exact path="/create/article" component={CreateArticle} />
            <Route path="/create/article/:slug" component={EditArticle} />
            <Route path="/login" component={Authorization} />
            <Route path="/feed" component={YourFeed} />
            <Route path="/register" component={Register} />
            <Route path="/tags/:slug" component={TagFeed} />
        </Switch>
    )
}

export default Routes
