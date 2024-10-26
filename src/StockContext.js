// StockContext.js
import React, { createContext, useState } from 'react';
import { stockList } from './stockList';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
    const [stocks, setStocks] = useState([]);

    const addStock = (symbol, quantity, purchasePrice, currentPrice) => {
        const isValidStock = stockList.some(stock => stock.symbol === symbol);
        if (!isValidStock) {
            alert('Invalid stock symbol.');
            return;
        }
        
        const profitLoss = quantity * (currentPrice - purchasePrice);
        setStocks(prevStocks => [
            ...prevStocks,
            { symbol, quantity, purchasePrice, currentPrice, profitLoss },
        ]);
    };

    return (
        <StockContext.Provider value={{ stocks, addStock }}>
            {children}
        </StockContext.Provider>
    );
};
