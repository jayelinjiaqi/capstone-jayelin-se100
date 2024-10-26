import './Dropdown.css';
import { useState } from 'react';
import { stockList } from './stockList';

const StockDropdown = ({ searchTerm, setSearchTerm }) => {
    const [suggestions, setSuggestions] = useState([]);

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

    const handleSuggestionClick = (symbol) => {
        setSearchTerm(symbol);
        setSuggestions([]);
    };

    return (
        <div className="dropdown-container">
            <input 
                type="text" 
                placeholder="Stock Symbol" 
                value={searchTerm} 
                onChange={handleChange}
                className="searchInput"
            />
            {suggestions.length > 0 && (
                <div className="suggestionBox">
                    {suggestions.map((stock, index) => (
                        <div 
                            key={index} 
                            className="suggestionItem" 
                            onClick={() => handleSuggestionClick(stock.symbol)}
                        >
                            {stock.symbol} - {stock.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default StockDropdown;
