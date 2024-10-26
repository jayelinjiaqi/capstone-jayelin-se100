// Header.jsx
import './Header.css';
import financeLogo from './assets/finance.jpg';

const Header = () => (
    <div className="header">
        <img src={financeLogo} alt="Finance Logo" className="logo" />
        <h1>Finance Dashboard</h1>
    </div>
);

export default Header;
