import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';
import Leaf from '../../assets/icons/leaf.svg';
import { logoutUser } from '../../store/actions';

interface NavbarProps {
  authorization: string;
  logoutUser: Function;
}

const Navbar: React.FC<NavbarProps> = ({ authorization, logoutUser }) => {
  const [navbarLoggedIn, setNavbarLoggedIn] = useState(false);

  const handleClick = (): void => {
    logoutUser();
  };

  useEffect(() => {
    const checkToken = (): void => {
      if (authorization) {
        setNavbarLoggedIn(true);
      } else {
        setNavbarLoggedIn(false);
      }
    };
    checkToken();
  }, [authorization]);

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
          <ul>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="/login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
