import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) => (isActive ? "active" : "");

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">

      <Link
        className="navbar-logo"
        to="/"
        onClick={closeMenu}
      >
        SG
      </Link>

      <div className={`navbar-links ${isOpen ? "open" : ""}`}>

        <NavLink
          to="/"
          end
          className={navClass}
          onClick={closeMenu}
        >
          <span>Home</span>
          <span className="navbar-indicator" />
        </NavLink>

        <NavLink
          to="/about"
          className={navClass}
          onClick={closeMenu}
        >
          <span>About</span>
          <span className="navbar-indicator" />
        </NavLink>

        <NavLink
          to="/work"
          className={navClass}
          onClick={closeMenu}
        >
          <span>MyWork</span>
          <span className="navbar-indicator" />
        </NavLink>

        <NavLink
          to="/contact"
          className={navClass}
          onClick={closeMenu}
        >
          <span>Contacts</span>
          <span className="navbar-indicator" />
        </NavLink>

      </div>

      <button
        type="button"
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

    </nav>
  );
}

export default Navbar;