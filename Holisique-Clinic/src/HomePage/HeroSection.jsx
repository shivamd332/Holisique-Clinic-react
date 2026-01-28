import "./HeroSection.css";
import doctorImg from "../assets/Home/home-banner.png";
import whatsappIcon from "../assets/whatsapp.png";


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">HOLISIQUE</h1>

          <h2 className="hero-subtitle">
            Homeopathy Clinic Center In <br /> Mumbai
          </h2>

          <p className="hero-description">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout. The Point
            Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal
            Distribution Of Letters, As Opposed To Using 'Content Here, Content
            Here', Making It Look Like Readable English.
          </p>

          <button className="hero-button">
            Get Appointment
            <span className="hero-button-circle">
              <span className="hero-button-arrow">➜</span>
            </span>
          </button>
        </div>

        <div className="hero-image">
          <img src={doctorImg} alt="Doctor" />
        </div>
      </div>

      <a href="#" className="whatsapp-float">
        <img src={whatsappIcon} alt="WhatsApp" />
      </a>
    </section>
  );
};

export default HeroSection;