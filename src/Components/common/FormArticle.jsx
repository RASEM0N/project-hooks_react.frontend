import React, { useState } from 'react'
import ErrorMessage from '../auth/ErrorMessage'

function FormArticle({
    onSubmit,
    ininitialValues = {
        title: '',
        body: '',
        description: '',
        tagList: '',
    },
    errors = null,
}) {
    console.log(errors)
    const [title, setTitle] = useState(ininitialValues?.title)
    const [body, setBody] = useState(ininitialValues?.body)
    const [description, setDescription] = useState(ininitialValues?.description)
    const [tagList, setTagList] = useState(ininitialValues?.tagList)

    const handlesSubmit = (e) => {
        e.preventDefault()

        console.log(tagList)

        onSubmit({
            title,
            body,
            description,
            tagList: !tagList ? [] : tagList.split(','),
        })
    }

    return (
        <div className="edit-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        {errors && <ErrorMessage errors={errors} />}
                        <form onSubmit={handlesSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg ng-untouched ng-pristine ng-valid"
                                        placeholder="Article title"
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control ng-pristine ng-valid ng-touched"
                                        placeholder="What's this article about?"
                                        value={body}
                                        onChange={(e) =>
                                            setBody(e.target.value)
                                        }
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        className="form-control ng-pristine ng-valid ng-touched"
                                        placeholder="Write your article (in markdown)"
                                        rows={8}
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control ng-untouched ng-pristine ng-valid"
                                        placeholder="Enter tags"
                                        value={tagList}
                                        onChange={(e) =>
                                            setTagList(e.target.value)
                                        }
                                    />
                                </fieldset>
                                <button
                                    className="btn btn-lg pull-xs-right btn-primary"
                                    type="submit"
                                >
                                    Publish Article
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormArticle
