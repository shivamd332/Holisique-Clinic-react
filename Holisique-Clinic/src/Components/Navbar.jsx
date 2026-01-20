import "./Navbar.css";
import logo from "../assets/logo.png";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Holisique Logo" className="logo" />
      </div>

      <ul className="navbar-menu">
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Treatments</li>
        <li>Gallery</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>

      <button className="register-btn">
        Register Now
        <span className="arrow-circle">
          <span className="arrow">➜</span>
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
