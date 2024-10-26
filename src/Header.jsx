import React from 'react';
import './Header.css';
import financeLogo from '/src/assets/finance.jpg'; // Adjusted path

const Header = () => {
    return (
        <div className="header">
            <img src={financeLogo} alt="Finance Logo" className="finance-logo" />
            <h1>Finance Dashboard</h1>
        </div>
    );
};

export default Header;
