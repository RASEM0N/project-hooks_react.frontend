import React from 'react'
import FormArticle from '../common/FormArticle'

function CreateArticle() {
    const errors = null
    // const ininitialValues = {
    //     title: '',
    //     body: '',
    //     description: '',
    //     tagList: '',
    // }
    const handlesSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <FormArticle
                type="create"
                errors={errors}
                // ininitialValues={ininitialValues}
                onSubmit={handlesSubmit}
            />
        </div>
    )
}

export default CreateArticle
