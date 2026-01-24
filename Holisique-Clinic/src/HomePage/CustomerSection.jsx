import "./CustomerSection.css";

import girlImg from "../assets/girlcustomer.png";
import boyImg from "../assets/boycustomer.png";

const CustomerSection = () => {
  return (
    <section className="customer-section">
      <span className="customer-tag">1000+ Happy Customers</span>

      <h2 className="customer-title">
        Our satisfied customers <br /> love us!
      </h2>

      <div className="customer-wrapper">
        <button className="nav-arrow left">←</button>

        <div className="testimonial-card">
          <img src={girlImg} alt="Customer" className="customer-img" />

          <div className="testimonial-content">
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque .
            </p>

            <div className="testimonial-footer">
              <span className="customer-name">Jenny Wilson</span>
              <span className="testimonial-date">07/02/2025</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <img src={boyImg} alt="Customer" className="customer-img" />

          <div className="testimonial-content">
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque .
            </p>

            <div className="testimonial-footer">
              <span className="customer-name">Devon Lane</span>
              <span className="testimonial-date">12/01/2025</span>
            </div>
          </div>
        </div>

        <button className="nav-arrow right">→</button>
      </div>
    </section>
  );
};

export default CustomerSection;
