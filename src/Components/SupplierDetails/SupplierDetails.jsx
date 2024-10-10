import React, { useEffect, useState } from 'react'
import ConstantScreenAndComponents from '../../Constants/ConstantScreenAndComponents'
import { apiBaseUrl } from '../../Profiles/Profile'
import APIUrl from '../../Constants/APIUrlConstants'
import { APICall } from '../../APIMethods/APIMethods'

const SupplierDetails = ({supplierDetails, setSupplierDetails}) => {

    const [allCountry, setAllCountry] = useState([ ])
    const [allState, setAllState] = useState([ ])
    const [allCity, setAllCity] = useState([])
    const handleInputChange = (e, field) => {

            setSupplierDetails({
                ...supplierDetails,
                [field] : e.target.value
            })
        
        
    }
    useEffect(()=>{
        APICall(APIUrl.getAllCountry, 'GET')
        .then((res)=>{
            let newArray = []
            res?.data?.countyList?.map((item)=>{
                const newObj = {
                    Id : item?.countryId,
                    Name : item?.name,
                    ...item
                }
                newArray.push(newObj)
            })
            setAllCountry(newArray)
        })
        
    },[])
    const getAllStateByCountry = (id) =>{
        APICall(APIUrl.getAllState.replace('{countryId}',id, 'GET'))
        .then((res)=>{
            let newArray = []
            res?.data?.stateList?.map((item)=>{
                const newObj = {
                    Id : item?.stateId,
                    Name : item?.name,
                    ...item
                }
                newArray.push(newObj)
            })
            setAllState(newArray)
        })
    }
    const handleAllCities = (stateId, CountryId) =>{
        APICall(APIUrl.getAllCities.replace('{countryId}&stateId={stateId}',CountryId+"&stateId="+stateId, 'GET'))
        .then((res)=>{
            let newArray = []
            res?.data?.cityList?.map((item)=>{
                const newObj = {
                    Id : item?.cityId,
                    Name : item?.name,
                    ...item
                }
                newArray.push(newObj)
            })
            setAllCity(newArray)
        })
    }
    
    return (
        <div className='mainSupplierFormDetails'>
            <h3>Supplier Details</h3>
            <div className="formAllInputs">
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Supplier Name'}
                    inputType={'text'}
                    maxLength="225"
                    inputValue={supplierDetails?.supplierName}
                    inputPlaceholder={"Enter Supplier name"}
                    inputErrorMessage={'Max 50 characters'}
                    onchangeInput={(e) => { handleInputChange(e, 'supplierName') }}
                />
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Company Name'}
                    inputType={'text'}
                    inputValue={supplierDetails?.companyName}
                    inputPlaceholder={"Enter Company Name"}
                    inputErrorMessage={'Max 50 characters'}
                    onchangeInput={(e) => { handleInputChange(e, 'companyName') }}
                />
                <ConstantScreenAndComponents.SelectField
                    inputLabel={'Country'}
                    selectList={allCountry}
                    // inputPlaceholder={"Enter Company Name"}
                    inputErrorMessage={'Select country from the list'}
                    onchangeInput={(e) => { handleInputChange(e, 'countryId'); getAllStateByCountry(e.target.value) }}
                />
                <ConstantScreenAndComponents.SelectField
                    inputLabel={'State'}
                    selectList={allState}
                    // inputPlaceholder={"Enter Company Name"}
                    inputErrorMessage={'Select state from the list'}
                    onchangeInput={(e) => { handleInputChange(e, 'stateId');handleAllCities(e.target.value,supplierDetails?.countryId) }}
                /> 
                <ConstantScreenAndComponents.SelectField
                    inputLabel={'City'}
                    selectList={allCity}
                    // inputPlaceholder={"Enter Company Name"}
                    inputErrorMessage={'Select City from the list'}
                    onchangeInput={(e) => { handleInputChange(e, 'cityId') }}
                />
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Email Address'}
                    inputType={'email'}
                    inputPlaceholder={"Enter email address"}
                    inputErrorMessage={'Valid email format'}
                    onchangeInput={(e) => { handleInputChange(e, 'email') }}
                />
                <ConstantScreenAndComponents.InputField
                    inputLabel={'Phone Number'}
                    inputType={'number'}
                    inputPlaceholder={"Enter Phone Number"}
                    inputErrorMessage={'Valid Phone Number'}
                    onchangeInput={(e) => { handleInputChange(e, 'phoneNumber') }}
                />
            </div>
        </div>
    )
}

export default SupplierDetails