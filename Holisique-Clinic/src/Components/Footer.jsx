import "./Footer.css";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
import locationIcon from "../assets/location.png";
import mapImage from "../assets/map.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/insta.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="Holisique" className="footer-logo" />

        <p className="footer-desc">
          We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat... Read More
        </p>

        <div className="footer-contact">
          <div className="contact-item">
            <span className="icon-bg">
              <img src={phoneIcon} alt="phone" />
            </span>
            <div>
              <h4>Tel</h4>
              <p>310-437-2766</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon-bg">
              <img src={mailIcon} alt="mail" />
            </span>
            <div>
              <h4>Mail</h4>
              <p>user@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon-bg">
              <img src={locationIcon} alt="location" />
            </span>
            <div>
              <h4>Address</h4>
              <p>706 road Mumbai, CT 012778</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-line-middle" />

      <div className="footer-middle">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Treatments</li>
            <li>Gallery</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Treatments</h3>
          <ul>
            <li>Hair Fall</li>
            <li>PCOS</li>
            <li>Thyroied</li>
            <li>Migraine</li>
            <li>Psoriosis</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Working Hours</h3>
          <ul>
            <li>Monday 09:00 – 17:00</li>
            <li>Tuesday 09:00 – 17:00</li>
            <li>Wednesday 09:00 – 17:00</li>
            <li>Thursday 09:00 – 17:00</li>
            <li>Friday 09:00 – 17:00</li>
            <li>Sat – Sunday – Closed</li>
          </ul>
        </div>

        <div className="footer-map">
          <img src={mapImage} alt="Map" />
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-line-bottom" />

        <div className="footer-bottom-content">
          <div className="footer-links">
            <span>Privacy policy</span>
            <span>Sitemap</span>
            <span>Terms of Use</span>
          </div>

          <p className="copyright">
            © 2025 Holisique, All Rights Reserved & Design and Developed by WASS
          </p>

          <div className="social-icons-footer">
            <img src={whatsapp} alt="whatsapp" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
