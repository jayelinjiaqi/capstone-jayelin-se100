// Dropdown.jsx
import { useState } from 'react';
import { stockList } from './stockList';
import './Dropdown.css';

const StockDropdown = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value) {
            const filteredSuggestions = stockList.filter(stock =>
                stock.symbol.toLowerCase().startsWith(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="dropdown-container">
            <input
                type="text"
                placeholder="Enter stock symbol"
                value={searchTerm}
                onChange={handleChange}
                className="dropdown-input"
            />
            {suggestions.length > 0 && (
                <div className="suggestions">
                    {suggestions.map((stock, index) => (
                        <div key={index} className="suggestion-item">
                            {stock.symbol} - {stock.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StockDropdown;
