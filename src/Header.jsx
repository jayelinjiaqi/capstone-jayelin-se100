import './Header.css';
import React from 'react';
import financeLogo from './assets/finance.png'; // Import the finance logo

const Header = () => {
    return (
        <div className="header">
            <img src={financeLogo} alt="Finance Logo" className="finance-logo" />
            <h1>Finance Dashboard</h1>
        </div>
    );
};

export default Header;
