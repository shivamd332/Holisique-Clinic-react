import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Holisique Logo" className="logo" />
      </div>

      <div
        className="hamburger"
        onClick={() => {
          setOpen(!open);
          document.body.classList.toggle("no-scroll");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/treatments" className="nav-link">
            Treatments
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="nav-link">
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
        </li>

        <li className="mobile-register">
          <button
            className="register-btn mobile-btn"
            onClick={() => navigate("/register")}
          >
            Register Now
            <span className="arrow-circle">
              <span className="arrow">➜</span>
            </span>
          </button>
        </li>
      </ul>

      <button
        className="register-btn desktop-btn"
        onClick={() => navigate("/register")}
      >
        Register Now
        <span className="arrow-circle">
          <span className="arrow">➜</span>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
