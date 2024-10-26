import React, { useContext, useState, useCallback } from 'react';
import StockDropdown from './Dropdown';
import QuantityInput from './QuantityInput';
import PurchasePriceInput from './PurchasePriceInput';
import { StockContext } from './StockContext';
import './StockForm.css';

const StockForm = () => {
    const { addStock } = useContext(StockContext);
    const [symbol, setSymbol] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [purchasePrice, setPurchasePrice] = useState('');

    const handleCalculate = useCallback(async () => {
        try {
            const response = await fetch(
                `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=9CEO3LSJV0UYL9KI`
            );
            const data = await response.json();
            const currentPrice = parseFloat(data['Global Quote']['05. price']);

            const profitLoss = quantity * (currentPrice - parseFloat(purchasePrice));

            addStock({ symbol, quantity, purchasePrice, currentPrice, profitLoss });
        } catch (error) {
            console.error("Error fetching stock data:", error);
        }
    }, [symbol, quantity, purchasePrice, addStock]);

    return (
        <div className="input-row">
            <StockDropdown symbol={symbol} setSymbol={setSymbol} />
            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            <PurchasePriceInput purchasePrice={purchasePrice} setPurchasePrice={setPurchasePrice} />
            <button onClick={handleCalculate}>Calculate Profit/Loss</button>
        </div>
    );
};

export default StockForm;
