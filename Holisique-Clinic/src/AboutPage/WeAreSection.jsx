import "./WeAreSection.css";
import mainImg from "../assets/About/weare-doctor.png";
import icon1 from "../assets/About/icon1.png";
import icon2 from "../assets/About/icon2.png";
import icon3 from "../assets/About/icon3.png";


const WeAreSection = () => {
  return (
    <section className="weare-section">
      <div className="weare-tag">
        <span className="weare-line"></span>
        <span>Who We Are</span>
      </div>
      <h2 className="weare-title">Why Choose Us</h2>
      <p className="weare-subtitle">
        Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
        ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Non quae, fugiat consequatur voluptatem nihil ad.
      </p>

      <div className="weare-content">
        <div className="weare-left">
          <div className="weare-item">
            <div className="weare-icon">
              <img src={icon1} alt="icon1" />
            </div>
            <div>
              <h4>Expert Clinical Support and Services</h4>
              <p>
                orem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet .
              </p>
            </div>
          </div>

          <div className="weare-item">
            <div className="weare-icon">
              <img src={icon2} alt="icon2" />
            </div>
            <div>
              <h4>Advance Diagnostic Technology</h4>
              <p>
                orem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet .
              </p>
            </div>
          </div>

          <div className="weare-item">
            <div className="weare-icon">
              <img src={icon3} alt="icon3" />
            </div>
            <div>
              <h4>Help at Hand</h4>
              <p>
                orem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet .
              </p>
            </div>
          </div>
        </div>

        <div className="weare-right">
          <img src={mainImg} alt="doctor" />
        </div>
      </div>
    </section>
  );
};

export default WeAreSection;
