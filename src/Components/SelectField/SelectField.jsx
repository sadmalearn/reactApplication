import React from 'react'
import './SelectField.css'
const SelectField = ({
    inputLabel="", 
    inputErrorMessage="",
    onchangeInput, 
    selectList=[]
    
}) => {
    return (
        <div className="formInput">
            <label htmlFor="" className='inputLabel'>{inputLabel}</label>
            <select name="" id="" onChange={onchangeInput}>
                {selectList.map((item)=>(
                    <option value={item?.Id}>{item?.Name}</option>
                ))}
            </select>
            <small className='errMessage'>{inputErrorMessage}</small>
        </div>
    )
}

export default SelectField