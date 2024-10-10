import React from 'react'
import './InputField.css'
const InputField = ({
    inputLabel="",
    inputPlaceholder="",
    inputErrorMessage="",
    onchangeInput,
    inputType="text"
}) => {
    return (
        <div className="formInput">
            <label htmlFor="" className='inputLabel'>{inputLabel}</label>
            <input type={inputType} className='inputText' max={inputType == "date" ? new Date() : ""} placeholder={inputPlaceholder} onChange={onchangeInput}/>
            <small className='errMessage'>{inputErrorMessage}</small>
        </div>
    )
}

export default InputField