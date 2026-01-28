import "./AboutSection.css";
import medicineImg from "../assets/Home/home-about.png"; 


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={medicineImg} alt="Homeopathy Medicine" />
        </div>

        <div className="about-content">
          <span className="about-tag">About Us</span>

          <h2 className="about-title">
            Lorem ipsum dolor sit amet, consectetur
          </h2>

          <p className="about-description">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus.”“Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum,
            facilisi odio pellentesque bibendum viverra tempus.”
          </p>

          <div className="about-divider"></div>

          <button className="about-button">
            About us
            <span className="about-button-arrow">➜</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
