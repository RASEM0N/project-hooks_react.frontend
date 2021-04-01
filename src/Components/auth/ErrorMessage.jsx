import React from 'react'

function ErrorMessage({ errors }) {
    console.log(errors)
    return (
        <ul className="error-messages">
            {Object.keys(errors)
                .map((element) => `${element}: ${errors[element].join(' ')}`)
                .map((error) => (
                    <li key={error}>{error}</li>
                ))}
        </ul>
    )
}

export default ErrorMessage
