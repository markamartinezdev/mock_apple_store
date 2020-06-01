import React from 'react'

const FormInput = (props) => {
    return (
        <div className="form-content">
            <label className="form-label">{props.label}</label>
            <input className="form-input" type={props.type ? props.type : 'text'} onChange={props.onChange} placeholder={`${props.placeHolder ? props.placeHolder : ""}`}/>
        </div>
    )
}

export default FormInput