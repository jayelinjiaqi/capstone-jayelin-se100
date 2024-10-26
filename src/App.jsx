import { useState } from 'react';
import StockDropdown from './Dropdown';
import QuantityInput from './QuantityInput';
import PurchasePriceInput from './PurchasePriceInput';
import Header from './Header';
import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [purchasePrice, setPurchasePrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState(null);
    const [profitLoss, setProfitLoss] = useState(null);
    const [stockAdded, setStockAdded] = useState(false);

    const handleCalculateProfitLoss = async () => {
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchTerm}&apikey=9CEO3LSJV0UYL9KI`);
            const data = await response.json();
            const price = parseFloat(data['Global Quote']['05. price']);

            setCurrentPrice(price);

            const profitLoss = quantity * (price - parseFloat(purchasePrice));
            setProfitLoss(profitLoss);
            setStockAdded(true);
        } catch (error) {
            console.error("Error fetching current price:", error);
        }
    };

    return (
        <div className="container">
            <Header />
            <div className="input-row">
                <StockDropdown searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <QuantityInput quantity={quantity} setQuantity={setQuantity} />
                <PurchasePriceInput purchasePrice={purchasePrice} setPurchasePrice={setPurchasePrice} />
                <button onClick={handleCalculateProfitLoss}>Add Stock</button>
            </div>

            <div className="stock-list">
                <h2>Stock List</h2>
                {stockAdded ? (
                    <div className="stock-info">
                        <p><strong>Symbol:</strong> {searchTerm}</p>
                        <p><strong>Quantity:</strong> {quantity}</p>
                        <p><strong>Purchase Price:</strong> USD {purchasePrice}</p>
                        <p><strong>Current Price:</strong> USD {currentPrice ? currentPrice.toFixed(2) : 'Loading...'}</p>
                        <p className={profitLoss >= 0 ? 'profit' : 'loss'}>
                            <strong>Profit/Loss:</strong> {profitLoss >= 0 ? `+USD ${profitLoss.toFixed(2)}` : `-USD ${Math.abs(profitLoss).toFixed(2)}`}
                        </p>
                    </div>
                ) : (
                    <p>No stocks added yet.</p>
                )}
            </div>
        </div>
    );
}

export default App;
