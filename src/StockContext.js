import React, { createContext, useState, useCallback } from 'react';
import { stockList } from './stockData'; // Updated import

export const StockContext = createContext();

const StockProvider = ({ children }) => {
    const [stocks, setStocks] = useState([]);

    const addStock = (symbol, quantity, purchasePrice, currentPrice) => {
        const newStock = {
            symbol,
            quantity,
            purchasePrice,
            currentPrice,
            profitLoss: quantity * (currentPrice - purchasePrice)
        };
        setStocks([...stocks, newStock]);
    };

    const fetchCurrentPrice = useCallback(async (symbol) => {
        // API call logic
        return 100; // Placeholder price
    }, []);

    return (
        <StockContext.Provider value={{ stocks, addStock, fetchCurrentPrice }}>
            {children}
        </StockContext.Provider>
    );
};

export default StockProvider;
