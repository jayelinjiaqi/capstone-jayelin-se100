import React, { useContext, useEffect } from 'react';
import { StockContext } from './StockContext';
import './StockList.css';

const StockList = () => {
    const { stocks } = useContext(StockContext);

    useEffect(() => {
        const fetchPrices = async () => {
            for (const stock of stocks) {
                if (!stock.currentPrice) {
                    // Optional: Fetch current price again if stock list updates
                }
            }
        };
        fetchPrices();
    }, [stocks]);

    return (
        <div className="stock-list">
            <h2>Stock List</h2>
            {stocks.length === 0 ? (
                <p>No stocks added yet.</p>
            ) : (
                stocks.map((stock, index) => (
                    <div key={index} className="stock-info">
                        <p><strong>Symbol:</strong> {stock.symbol}</p>
                        <p><strong>Quantity:</strong> {stock.quantity}</p>
                        <p><strong>Purchase Price:</strong> USD {stock.purchasePrice}</p>
                        <p><strong>Current Price:</strong> USD {stock.currentPrice.toFixed(2)}</p>
                        <p className={stock.profitLoss >= 0 ? 'profit' : 'loss'}>
                            <strong>Profit/Loss:</strong> {stock.profitLoss >= 0 ? `+USD ${stock.profitLoss.toFixed(2)}` : `-USD ${Math.abs(stock.profitLoss).toFixed(2)}`}
                        </p>
                    </div>
                ))
            )}
        </div>
    );
};

export default StockList;
