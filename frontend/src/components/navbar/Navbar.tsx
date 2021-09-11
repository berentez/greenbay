import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';
import Leaf from '../../assets/icons/leaf.svg';

interface NavbarProps {
  authorization: string;
}

const Navbar: React.FC<NavbarProps> = ({ authorization }) => {
  const [navbarLoggedIn, setNavbarLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <img src={Leaf} alt="leaf" />
      {!navbarLoggedIn ? (
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
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
