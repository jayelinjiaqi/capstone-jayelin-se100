// QuantityInput.jsx
import { useState } from 'react';
import './QuantityInput.css';

const QuantityInput = () => {
    const [quantity, setQuantity] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) setQuantity(value);
    };

    return (
        <input
            type="text"
            value={quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="quantity-input"
        />
    );
};

export default QuantityInput;
