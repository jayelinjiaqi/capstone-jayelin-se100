// PurchasePriceInput.jsx
import { useState } from 'react';
import './PurchasePriceInput.css';

const PurchasePriceInput = () => {
    const [purchasePrice, setPurchasePrice] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*\.?\d{0,2}$/.test(value)) setPurchasePrice(value);
    };

    return (
        <input
            type="text"
            value={purchasePrice}
            onChange={handleChange}
            placeholder="Purchase Price (USD)"
            className="purchaseprice-input"
        />
    );
};

export default PurchasePriceInput;
