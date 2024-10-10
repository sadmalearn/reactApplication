import React, { useState } from 'react';
import './DataTable.css';

const DataTable = ({ allSupplierDetails, selectedSuppliersData, setSelectedSuppliersData }) => {
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedSuppliersData(allSupplierDetails);
        } else {
            setSelectedSuppliersData([]);
        }
    };

    const handleCheckboxChange = (item) => {
        const isAlreadySelected = selectedSuppliersData.find((supplier) => supplier === item);

        if (isAlreadySelected) {
            const updatedSelection = selectedSuppliersData.filter((supplier) => supplier !== item);
            setSelectedSuppliersData(updatedSelection);
        } else {
            setSelectedSuppliersData([...selectedSuppliersData, item]);
        }
    };

    return (
        <div className='mainDataTable'>
            <div className="tableBtn">
                <span>Uploaded Data</span>
                <button>Clear All</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedSuppliersData.length === allSupplierDetails.length}
                            />
                            Supplier
                        </th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Email</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {allSupplierDetails?.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedSuppliersData.includes(item)}
                                    onChange={() => handleCheckboxChange(item)}
                                />
                                {item?.supplier?.supplierName}
                            </td>
                            <td>{item?.itemDetails?.itemName}</td>
                            <td>{item?.itemDetails?.quantity}</td>
                            <td>{item?.supplier?.cityName}</td>
                            <td>{item?.supplier?.countryName}</td>
                            <td>{item?.supplier?.email}</td>
                            <td>{item?.supplier?.phoneCode} {item?.supplier?.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
