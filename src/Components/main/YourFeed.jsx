import React, { useContext, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Feed from '../common/Feed'
import Paginations from '../common/Paginations'
import { parse, stringify } from 'query-string'
import PolularTags from '../common/PolularTags'
import FeedToogler from './FeedToogler'
import { CurrentUserContext } from '../contexts/currentUser'
import { Redirect } from 'react-router-dom'

const YourFeed = ({ location }) => {
    const [{ isLoggedIn }] = useContext(CurrentUserContext)

    const pageSearch = parse(location.search).page
        ? Number(parse(location.search).page)
        : 1
    const offset = (pageSearch - 1) * 10
    const params = stringify({
        limit: 10,
        offset: offset,
    })
    const apiUrl = `/articles/feed?${params}`
    const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)
    useEffect(() => {
        doFetch()
    }, [doFetch, pageSearch])

    if (!isLoggedIn) return <Redirect to="/login" />

    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1>Medium clone</h1>
                    <p>A place to share knowled</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <FeedToogler />
                        {isLoading && <div>Loading...</div>}
                        {error && <div>Some error happend</div>}
                        {!isLoading && response?.articles.length > 0 && (
                            <React.Fragment>
                                <Feed articles={response.articles} />
                                <Paginations
                                    total={response.articlesCount}
                                    url="/"
                                    currentPage={pageSearch}
                                    limit={10}
                                />
                            </React.Fragment>
                        )}
                        {response?.articles?.length === 0 && (
                            <p>Do you have zero posts</p>
                        )}
                    </div>
                    <div className="col-md-3">
                        <PolularTags />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourFeed
