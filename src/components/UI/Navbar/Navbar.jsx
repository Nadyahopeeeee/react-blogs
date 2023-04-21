import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <Link to="/about">0 сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </nav>
  );
};

export default Navbar;
