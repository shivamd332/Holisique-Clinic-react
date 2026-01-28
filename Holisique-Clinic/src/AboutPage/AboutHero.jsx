import "./AboutHero.css";
import bgImage from "../assets/About/about-banner.png";


const AboutHero = () => {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="about-hero-overlay">
        <h1>Your Health, Our Priority</h1>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibendum viverra tempus.”“Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum,
          facilisi odio pellentesque bibendum viverra tempus.”
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
