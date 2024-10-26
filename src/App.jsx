// App.jsx
import { useState } from 'react';
import './App.css';
import StockDropdown from './Dropdown';
import QuantityInput from './QuantityInput';
import PurchasePriceInput from './PurchasePriceInput';
import Header from './Header';
import { StockProvider } from './StockContext';
import StockList from './StockList';

function App() {
    return (
        <StockProvider>
            <div className="container">
                <Header />
                <div className="input-container">
                    <StockDropdown />
                    <QuantityInput />
                    <PurchasePriceInput />
                </div>
                <button className="calculate-button">Calculate Profit/Loss</button>
                <StockList />
            </div>
        </StockProvider>
    );
}

export default App;
