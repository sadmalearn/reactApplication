import React from 'react'
import './HeroSection.css'
const HeroSection = ({ setSelectedField, selectedField }) => {

    return (
        <div className='mainHeroSection'>
            <div className="itemDiv">
                <input type="checkbox" name="InventoryDetails" checked={selectedField.item} id="itemForm" value={"Item"} onChange={() => {
                    setSelectedField({
                        ...selectedField,
                        item: !selectedField.item
                    })
                }} />
                <label htmlFor="itemForm">Item</label>
            </div>
            <div className="supplierDiv">
                <input type="checkbox" name="InventoryDetails" checked={selectedField.supplier} id="supplierForm" value={"Supplier"} onChange={() => {
                    setSelectedField({
                        ...selectedField,
                        supplier: !selectedField.supplier
                    })
                }} />
                <label htmlFor="supplierForm">Supplier</label>
            </div>
        </div>
    )
}

export default HeroSection