import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../../theme/useTheme";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme}-mode`}>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home Page
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme} className="mode-toggle-button">
          Toggle Mode
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
