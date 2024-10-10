import React from 'react'
import ConstantScreenAndComponents from '../../Constants/ConstantScreenAndComponents'
import './ItemFormDetails.css'
import moment from 'moment'
const ItemFormDetails = ({ itemDetails, setItemDetails }) => {
    const handleInputChange = (e, field) => {
        setItemDetails({
            ...itemDetails,
            [field]: field == "submissionDate" ? moment(e.target.value).format('MM/DD/YYYY') : e.target.value
        })
    }
    return (
        <div className='mainItemFormDetails'>
            <h3>Item Details</h3>
            <div className="formAllInputs">
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Item Name'}
                    inputType={'text'}
                    inputPlaceholder={"Enter item name"}
                    inputErrorMessage={'Max 50 characters'}
                    onchangeInput={(e) => { handleInputChange(e, 'itemName') }}
                />
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Quantity'}
                    inputType={'number'}
                    inputPlaceholder={"Enter quantity"}
                    inputErrorMessage={'Numeric value'}
                    onchangeInput={(e) => { handleInputChange(e, 'quantity') }}
                />
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Unit Price'}
                    inputType={'numeric'}
                    inputPlaceholder={"Enter unit price"}
                    inputErrorMessage={'Numeric value (USD)'}
                    onchangeInput={(e) => { handleInputChange(e, 'unitPrice') }}
                />
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Date of Submission'}
                    inputType={'date'}
                    inputPlaceholder={"Select date"}
                    inputErrorMessage={'Format: MM/DD/YYYY'}
                    onchangeInput={(e) => { handleInputChange(e, 'submissionDate') }}
                />
            </div>
        </div>
    )
}

export default ItemFormDetails