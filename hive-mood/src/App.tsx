// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Mood from './pages/Mood'
import Navbar from './components/Navbar';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/hive-mood" element={<Mood />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
