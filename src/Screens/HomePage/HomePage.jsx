import React, { useEffect, useState } from 'react'
import ConstantScreenAndComponents from '../../Constants/ConstantScreenAndComponents'
import './HomePage.css'
import APIUrl from '../../Constants/APIUrlConstants'
import { APICall } from '../../APIMethods/APIMethods'
const HomePage = () => {
    const [selectedSuppliersData, setSelectedSuppliersData] = useState([]);
    const [selectedField, setSelectedField] = useState({
        item: true,
        supplier: false
    })
    // API NOT FOUND IN Document I am USING DUMMY DATA
    const [allSupplierDetails, setAllSupplierDetails] = useState([{
        supplier: {
            supplierName: "ABC Supplies",
            cityName: "New York",
            countryName: "USA",
            email: "abc@supplies.com",
            phoneCode: "+1",
            phoneNumber: "1234567890"
        },
        itemDetails: {
            itemName: "Laptops",
            quantity: 100
        }
    },
    {
        supplier: {
            supplierName: "Tech Gear",
            cityName: "San Francisco",
            countryName: "USA",
            email: "info@techgear.com",
            phoneCode: "+1",
            phoneNumber: "0987654321"
        },
        itemDetails: {
            itemName: "Monitors",
            quantity: 50
        }
    },
    {
        supplier: {
            supplierName: "ElectroMart",
            cityName: "London",
            countryName: "UK",
            email: "contact@electromart.co.uk",
            phoneCode: "+44",
            phoneNumber: "5551234567"
        },
        itemDetails: {
            itemName: "Keyboards",
            quantity: 200
        }
    },
    {
        supplier: {
            supplierName: "Supply Chain Solutions",
            cityName: "Mumbai",
            countryName: "India",
            email: "sales@supplychain.in",
            phoneCode: "+91",
            phoneNumber: "9876543210"
        },
        itemDetails: {
            itemName: "Printers",
            quantity: 25
        }
    },
    {
        supplier: {
            supplierName: "Global Distributors",
            cityName: "Tokyo",
            countryName: "Japan",
            email: "support@globaldistributors.jp",
            phoneCode: "+81",
            phoneNumber: "1239876543"
        },
        itemDetails: {
            itemName: "Desks",
            quantity: 75
        }
    }])
    const [itemDetails, setItemDetails] = useState({
        "itemName": "",
        "quantity": "",
        "unitPrice": "",
        "currency": "$",
        "submissionDate": ""
    })
    const [supplierDetails, setSupplierDetails] = useState({
        "supplierName": "",
        "companyName": "",
        "email": "",
        "phoneCode": "+91",
        "phoneNumber": "",
        "countryId": "",
        "stateId": "",
        "cityId": ""
    })

    const validateItemDetails = () => {
        const { itemName, quantity, unitPrice, currency, submissionDate } = itemDetails;

        if (itemName.trim() === "") {
            alert("Item Name is required");
            return false;
        }

        if (isNaN(quantity) || quantity <= 0) {
            alert("Quantity should be a positive number");
            return false;
        }

        const parsedUnitPrice = parseFloat(unitPrice);
        if (isNaN(parsedUnitPrice) || parsedUnitPrice <= 0) {
            alert("Unit Price should be a positive float value");
            return false;
        }


        const currentDate = new Date();
        const selectedDate = new Date(submissionDate);
        if (selectedDate < currentDate) {
            alert("Submission date should be today or a future date");
            return false;
        }

        return true;
    };


    const validateSupplierDetails = () => {
        const { supplierName, companyName, email, phoneCode, phoneNumber, countryId, stateId, cityId } = supplierDetails;

        if (supplierName.trim() === "") {
            alert("Supplier Name is required");
            return false;
        }
        if (companyName.trim() === "") {
            alert("Company Name is required");
            return false;
        }

        if (!email.includes('@') && !email.includes('.')) {
            alert("Please enter a valid email");
            return false;
        }

        if (phoneCode.charAt(0) !== '+' || isNaN(phoneCode.substring(1))) {
            alert("Phone code should start with '+' and be followed by digits");
            return false;
        }

        if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
            alert("Phone Number should be a valid 10-digit number");
            return false;
        }

        if (countryId.trim() === "" || stateId.trim() === "" || cityId.trim() === "") {
            alert("Country, State, and City are required");
            return false;
        }

        return true;
    };
    useEffect(() => {
        // API NOT FOUND IN Document I am USING DUMMY DATA
        APICall(APIUrl.getAllSuppliers, 'GET')
            .then((res) => {
                if (res.data) {
                    setAllSupplierDetails(res.data)
                }
            })
    })
    const handleSubmitDetails = () => {
        if (validateItemDetails() && validateSupplierDetails()) {
            const body = {
                "itemDetails": {
                    ...itemDetails
                },
                "supplier": {
                    ...supplierDetails
                }
            }
            APICall(APIUrl.supplierItemSave, 'POST', body)
                .then((res) => {

                    console.log(res)
                })
        }
    }

    return (
        <div className='mainHomePageDiv'>
            <ConstantScreenAndComponents.Header />
            <ConstantScreenAndComponents.HeroSection setSelectedField={setSelectedField} selectedField={selectedField} />
            {selectedField?.item && <ConstantScreenAndComponents.ItemFormDetails itemDetails={itemDetails} setItemDetails={setItemDetails} />}
            {selectedField?.supplier && <ConstantScreenAndComponents.SupplierDetails supplierDetails={supplierDetails} setSupplierDetails={setSupplierDetails} />}

            <h2>Submitted Data</h2>
            <p>The data submitted by users will be displayed below</p>
            <button type="button" className='saveButton' onClick={() => { handleSubmitDetails() }}>Save Changes</button>

            <div className="tableDiv">
                <ConstantScreenAndComponents.DataTable selectedSuppliersData={selectedSuppliersData} setSelectedSuppliersData={setSelectedSuppliersData} allSupplierDetails={allSupplierDetails} />
            </div>

        </div>
    )
}

export default HomePage