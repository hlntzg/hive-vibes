// components/Navbar.tsx

import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <nav className="navbar">
      <button className="round-btn" onClick={toggleDarkMode}>🌓</button>
      <Link to="/"><button className="round-btn">🏠</button></Link>
      <Link to="/survey"><button className="round-btn">📝</button></Link>
      <Link to="/hive-mood"><button className="round-btn"></button></Link>
    </nav>
  );
};

export default Navbar;
