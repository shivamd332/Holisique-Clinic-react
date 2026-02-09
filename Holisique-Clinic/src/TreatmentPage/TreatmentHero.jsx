import "./TreatmentHero.css";
import heroImg from "../assets/Treatment/treatment-banner.png";

const TreatmentHero = () => {
  return (
    <section
      className="treatment-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="treatment-hero-overlay">
        <h1>Restoring Health Naturally With Homeopathy</h1>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibenolor sit amet, consectetur adipiscing elit. Ornare non sed est
          cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum
          viverra tempus.”
        </p>
      </div>
    </section>
  );
};

export default TreatmentHero;
