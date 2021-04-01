import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'

function PolularTags() {
    const [{ isLoading, response }, doFetch] = useFetch('/tags')

    useEffect(() => {
        doFetch()
    }, [doFetch])

    return (
        <div className="sidebar">
            <p>Popular Tags</p>
            <div className="tag-list">
                {isLoading && <p>Loading tags...</p>}
                {!isLoading &&
                    response &&
                    response.tags.map((tag) => {
                        return !tag ? undefined : (
                            <Link
                                to={`/tags/${tag}`}
                                className="tag-default tag-pill"
                                key={tag}
                            >
                                {tag}
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

export default PolularTags
