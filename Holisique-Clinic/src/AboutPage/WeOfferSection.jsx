import "./WeOfferSection.css";
import offerImg from "../assets/About/weoffer-doctor.png";


const WeOfferSection = () => {
  return (
    <section className="weoffer-section">
      <div className="weoffer-left">
        <img src={offerImg} alt="we offer" />
      </div>

      <div className="weoffer-right">
        <div className="weoffer-tag">
          <span className="weoffer-line"></span>
          <span>What We offer</span>
        </div>

        <h2 className="weoffer-title">The Best Medics, Doctors &<br />Physicians</h2>

        <p className="weoffer-text">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Non quae, fugiat consequatur voluptatem
          nihil ad. Lorem ipsum dolor sit amet.Lorem ipsum viverra feugiat.
          Pellen tesque libero ut justo, ultrices in ligula. Semper at
          tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non quae, fugiat consequatur voluptatem nihil ad. Lorem ipsum dolor
          sit amet.
        </p>

        <button className="weoffer-btn">
          Read More <span>↗</span>
        </button>
      </div>
    </section>
  );
};

export default WeOfferSection;
