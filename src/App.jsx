import { useState } from 'react';
import './App.css';
import StockDropdown from './Dropdown';
import QuantityInput from './QuantityInput';
import PurchasePriceInput from './PurchasePriceInput';
import Header from './Header';
import StockProvider from './StockContext';

function App() {
    return (
        <StockProvider>
            <div className="container">
                <Header />
                <div className="input-row">
                    <StockDropdown />
                    <QuantityInput />
                    <PurchasePriceInput />
                    <button>Calculate</button>
                </div>
                <StockList />
            </div>
        </StockProvider>
    );
}

export default App;
