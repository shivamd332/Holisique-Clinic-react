import "./Register.css";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-left"></div>

      <div className="register-right">
        <h1 className="title">Welcome</h1>
        <p className="subtitle">Sign in to continue your progress</p>

        <form className="register-form">
          <label>Name</label>
          <input type="text" placeholder="Enter Your Name" />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter Your Number" />

          <label>Aadhaar Card</label>
          <input type="text" placeholder="Enter Your Aadhaar Number" />

          <label>Pan Card</label>
          <input type="text" placeholder="Enter Your Pan Number" />

          <label>Email I’d</label>
          <input type="email" placeholder="Enter Your Email I’d" />

          <button type="submit">Register now</button>
        </form>

        <div className="social-icons">
          <img src={instagram} alt="Instagram" />
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Register;
