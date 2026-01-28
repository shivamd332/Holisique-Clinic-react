import "./AboutUsSection.css";
import stethoscopeImg from "../assets/About/stethoscope.png";


const AboutUsSection = () => {
  return (
    <section
      className="aboutus-section"
      style={{ backgroundImage: `url(${stethoscopeImg})` }}
    >
      <div className="aboutus-content">
        <p className="aboutus-tag">About Us</p>

        <h2 className="aboutus-title">
          Healing Experiences – For Everyone,
          <br /> All The Time
        </h2>

        <div className="aboutus-line"></div>

        <p className="aboutus-text">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibendum viverra tempus.”“Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum,
          facilisi odio pellentesque bibendum viverra tempus.”“Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel
          hac convallis ipsum, facilisi odio pellentesque bibendum viverra
          tempus.”“Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio
          pellentesque bibendum viverra tempus.”
        </p>

        <button className="aboutus-btn">
          Read More <span>↗</span>
        </button>
      </div>
    </section>
  );
};

export default AboutUsSection;
