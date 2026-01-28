import "./ChooseUsSection.css";
import doctorImg from "../assets/Home/chooseUs.png";


const ChooseUs = () => {
  return (
    <section className="chooseus-section">
      <div className="chooseus-container">
        <div className="chooseus-content">
          <span className="chooseus-tag">Why Choose Us</span>

          <h2 className="chooseus-title">
            Why choose <br /> Dr. Serena Martin?
          </h2>

          <p className="chooseus-desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus.”“Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum,
            facilisi odio pellentesque bibendum viverra tempus.”
          </p>

          <div className="chooseus-stats">
            <div className="stat-box">
              <span className="stat-no">01</span>
              <h3>10+</h3>
              <p>
                Years Of <br /> Experience
              </p>
            </div>

            <div className="stat-box">
              <span className="stat-no">02</span>
              <h3>50k+</h3>
              <p>
                Happy <br /> Patients
              </p>
            </div>

            <div className="stat-box">
              <span className="stat-no">03</span>
              <h3>1000+</h3>
              <p>
                Treatment <br /> Completed
              </p>
            </div>
          </div>
        </div>

        <div className="chooseus-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
