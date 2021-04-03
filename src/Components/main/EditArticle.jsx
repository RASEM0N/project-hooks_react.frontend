import React, { useContext, useEffect } from 'react'
import FormArticle from '../common/FormArticle'
import useFetch from '../../Hooks/useFetch'
import { Redirect } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/currentUser'

function EditArticle({ match }) {
    const slug = match.params.slug
    const errors = null
    const apiUrl = '/articles'
    let ininitialValues
    const [resp, doF] = useFetch(`${apiUrl}/${slug}`)
    const [{ response, error, isLoading }, doFetch] = useFetch(
        `${apiUrl}/${slug}`
    )
    const [{ currentUser }] = useContext(CurrentUserContext)

    useEffect(() => {
        doF()
    }, [doF])

    const handlesSubmit = (data) => {
        console.log(data)
        doFetch({
            method: 'PUT',
            data: {
                article: data,
            },
        })
    }

    if (!isLoading && response)
        return <Redirect to={`/article/${response.article.slug}`} />

    if (resp.isLoading) return <p>Loading...</p>

    if (resp.response) {
        const { body, description, tagList, title } = resp.response.article

        ininitialValues = {
            title,
            body,
            description,
            tagList: tagList.join(', '),
        }
    }

    return (
        <div>
            <FormArticle
                ininitialValues={ininitialValues}
                errors={error ? error?.errors : null}
                onSubmit={handlesSubmit}
            />
        </div>
    )
}

export default EditArticle
