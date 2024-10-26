import React, { createContext, useState, useCallback } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
    const [stocks, setStocks] = useState([]);

    const addStock = (stock) => {
        setStocks((prevStocks) => [...prevStocks, stock]);
    };

    return (
        <StockContext.Provider value={{ stocks, addStock }}>
            {children}
        </StockContext.Provider>
    );
};
