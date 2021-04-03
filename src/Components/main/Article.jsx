import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TagFeed from './TagFeed'
import useFetch from '../../Hooks/useFetch'
import { CurrentUserContext } from '../contexts/currentUser'

const Article = ({ match }) => {
    const slug = match.params.slug
    const apiUrl = `/articles/${slug}`

    const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)
    const [{ currentUser }] = useContext(CurrentUserContext)

    const isMyArticle =
        currentUser?.username === response?.article?.author?.username

    useEffect(() => {
        doFetch()
    }, [doFetch])

    return (
        <div className="article-page">
            {!isLoading && response && (
                <React.Fragment>
                    <div className="banner">
                        <div className="container">
                            <h1>{response.article.title}</h1>
                            <div className="article-meta">
                                <Link
                                    to={`/profiles/${response.article.author.username}`}
                                >
                                    <img
                                        src={response.article.author.image}
                                        alt="IMG"
                                    />
                                </Link>
                                <div className="info">
                                    <Link
                                        to={`/profiles/${response.article.author.username}`}
                                        className="author"
                                    >
                                        {response.article.author.username}
                                    </Link>
                                    <span className="date">
                                        {
                                            response.article.createdAt.split(
                                                'T'
                                            )[0]
                                        }
                                    </span>
                                </div>
                                {!isMyArticle && (
                                    <span>
                                        <button className="btn btn-sm action-btn btn-outline-secondary">
                                            <i className="ion-plus-round"></i>{' '}
                                            Follow{' '}
                                            {response.article.author.username}
                                        </button>
                                        <button className="btn btn-sm btn-outline-primary">
                                            <i className="ion-heart"></i>{' '}
                                            Favorite Article
                                            <span className="counter">
                                                {' '}
                                                (0){' '}
                                            </span>
                                        </button>
                                    </span>
                                )}
                                {isMyArticle && (
                                    <span>
                                        <Link
                                            className="btn btn-sm action-btn btn-outline-secondary"
                                            to={`/create/article/${response.article.slug}`}
                                        >
                                            <i className="ion-edit"></i> Edit
                                            Article
                                        </Link>
                                        <button className="btn btn-sm btn-outline-danger">
                                            <i className="ion-trash-a"></i>{' '}
                                            Delete Article
                                        </button>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="container page">
                        <div className="row article-content">
                            <div className="col-md-12">
                                <div>
                                    <p>{response.article.body}</p>
                                    <ul className="tag-list">
                                        {response.article.tagList.map((tag) => (
                                            <li
                                                className="tag-default tag-pill tag-outline"
                                                key={tag}
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default Article
