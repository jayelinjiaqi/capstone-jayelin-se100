import './QuantityInput.css';
import React from 'react';

const QuantityInput = ({ quantity, setQuantity }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        if (value >= 1) {
            setQuantity(value);
        }
    };

    return (
        <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={handleChange}
            min="1"
            className="quantity-textbox"
        />
    );
};

export default QuantityInput;
