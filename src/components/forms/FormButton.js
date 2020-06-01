import React from 'react'

const FormButton = (props) => {
    return (
        <button className="form-submit" onClick={props.onClick}>{props.text}</button>
    )
}

export default FormButton