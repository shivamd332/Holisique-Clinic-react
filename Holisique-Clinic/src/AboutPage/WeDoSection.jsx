import "./WeDoSection.css";
import doctorImg from "../assets/About/wedo-doctor.png";


const WeDoSection = () => {
  return (
    <section className="wedo-section">
      <div className="wedo-left">
        <div className="wedo-tag">
          <span className="wedo-line"></span>
          <span>What We Do</span>
        </div>

        <h2 className="wedo-title">
          We are always Health Give <br /> of best service
        </h2>

        <p className="wedo-text">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Non quae, fugiat consequatur voluptatem
          nihil ad. Lorem ipsum dolor sit amet.Lorem ipsum viverra feugiat.
          Pellen tesque libero ut justo, ultrices in ligula. Semper at
          tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Non quae, fugiat consequatur voluptatem nihil ad. Lorem ipsum dolor
          sit amet.
        </p>

        <button className="wedo-btn">
          Read More <span>↗</span>
        </button>
      </div>

      <div className="wedo-right">
        <img src={doctorImg} alt="doctor" />
      </div>
    </section>
  );
};

export default WeDoSection;
