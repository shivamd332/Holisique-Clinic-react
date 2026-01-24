import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Holisique Logo" className="logo" />
      </div>

      <div className="hamburger" onClick={() => {
        setOpen(!open);
        document.body.classList.toggle("no-scroll");
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Treatments</li>
        <li>Gallery</li>
        <li>Blogs</li>
        <li>Contact Us</li>

        <li className="mobile-register">
          <button className="register-btn mobile-btn">
            Register Now
            <span className="arrow-circle">
              <span className="arrow">➜</span>
            </span>
          </button>
        </li>
      </ul>

      <button className="register-btn desktop-btn">
        Register Now
        <span className="arrow-circle">
          <span className="arrow">➜</span>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
