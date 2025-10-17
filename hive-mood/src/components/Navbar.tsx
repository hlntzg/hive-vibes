// components/Navbar.tsx

import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/"><h1>HIVE VIBES</h1></Link>
      <div className="right-buttons">
        <Link to="/survey"><button className="round-btn">ᝰ.ᐟ</button></Link>
        <Link to="/hive-mood"><button className="round-btn">💬</button></Link>
        <button className="round-btn" onClick={toggleDarkMode}>☾☼</button>
      </div>
    </nav>
  );
};

export default Navbar;

//➜]
//🗪