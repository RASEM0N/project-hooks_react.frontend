import React, { useEffect } from 'react'
import FormArticle from '../common/FormArticle'
import useFetch from '../../Hooks/useFetch'
import { Redirect } from 'react-router-dom'

function CreateArticle() {
    const errors = null
    const apiUrl = '/articles'
    const [{ response, error, isLoading }, doFetch] = useFetch(apiUrl)

    const handlesSubmit = (data) => {
        doFetch({
            method: 'POST',
            data: {
                article: data,
            },
        })
    }

    if (!isLoading && response)
        return <Redirect to={`/article/${response.article.slug}`} />

    return (
        <div>
            <FormArticle
                errors={error ? error?.errors : null}
                onSubmit={handlesSubmit}
            />
        </div>
    )
}

export default CreateArticle
