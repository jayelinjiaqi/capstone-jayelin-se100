import React from 'react';
import financeLogo from './assets/finance.jpg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src={financeLogo} alt="Finance Logo" className="finance-logo" />
            <h1>Finance Dashboard</h1>
        </header>
    );
};

export default Header;
