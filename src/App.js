import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar__links">
          <Link to="/about">0 сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
