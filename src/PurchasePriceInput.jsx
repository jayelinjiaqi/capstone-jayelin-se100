import './PurchasePriceInput.css';
import React from 'react';

const PurchasePriceInput = ({ purchasePrice, setPurchasePrice }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
            setPurchasePrice(value);
        }
    };

    return (
        <input
            type="text"
            placeholder="Purchase Price (USD)"
            value={purchasePrice}
            onChange={handleChange}
            className="purchaseprice-textbox"
        />
    );
};

export default PurchasePriceInput;
