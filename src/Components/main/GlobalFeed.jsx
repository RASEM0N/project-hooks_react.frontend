import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Feed from '../common/Feed'
import Paginations from '../common/Paginations'
import { parse, stringify } from 'query-string'

const GlobalFeed = ({ location }) => {
    const pageSearch = parse(location.search).page
        ? Number(parse(location.search).page)
        : 1
    const offset = (pageSearch - 1) * 10
    const params = stringify({
        limit: 10,
        offset: offset,
    })
    const apiUrl = `/articles?${params}`
    const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)
    useEffect(() => {
        doFetch()
    }, [doFetch, pageSearch])

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
                        {isLoading && <div>Loading...</div>}
                        {error && <div>Some error happend</div>}
                        {!isLoading && response && (
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
                    </div>
                    <div className="col-md-3">Populator tags</div>
                </div>
            </div>
        </div>
    )
}

export default GlobalFeed
