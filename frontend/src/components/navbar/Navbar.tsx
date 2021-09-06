import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

interface NavbarProps {
  authorization: string;
}

const Navbar: React.FC<NavbarProps> = ({ authorization }) => {
  const [navbarLoggedIn, setNavbarLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      {!navbarLoggedIn ? (
        <div className="navbar-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Registration</Link>
        </div>
      ) : (
        <div className="navbar-links">
          <Link to="/stats">My Stats</Link>
          <Link to="/login">Logout</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
