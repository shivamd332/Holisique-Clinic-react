import "./ProcessSection.css";
import consultIcon from "../assets/Home/icon-file.png";
import doctorIcon from "../assets/Home/icon-doctor.png";
import followIcon from "../assets/Home/icon-user.png";


const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-left">
          <span className="process-tag">Our Process</span>

          <h2 className="process-title">
            A Step by step guide to our <br /> Treatment Process
          </h2>

          <p className="process-desc">
            The goal of our clinic is to provide friendly, caring dentistry and
            the highest level of general, cosmetic, and specialist dental
            treatments. With dental practices throughout the world.
          </p>

          <button className="process-btn">
            Explore More
            <span className="btn-arrow">➜</span>
          </button>
        </div>

        <div className="process-right">
          <div className="process-step">
            <div className="step-icon">
              <span className="step-no">1</span>
              <img src={consultIcon} alt="Consultation" />
            </div>

            <div className="step-content">
              <h4>Initial Consultation</h4>
              <p>
                Your journey begins with an in-depth consultation. We'll listen
                to your concerns, discuss your goals.
              </p>
            </div>
          </div>

          <div className="process-step active">
            <div className="step-icon">
              <span className="step-no active">2</span>
              <img src={doctorIcon} alt="Treatment" />
            </div>
            <div className="step-content">
              <h4>Treatment By Doctors</h4>
              <p>
                Once the plan is finalized, we'll proceed with your treatment.
                Our expert team will guide you.
              </p>
            </div>
          </div>

          <div className="process-step">
            <div className="step-icon">
              <span className="step-no">3</span>
              <img src={followIcon} alt="Follow Up" />
            </div>
            <div className="step-content">
              <h4>Follow-Up Care</h4>
              <p>
                After your treatment, we'll schedule any necessary follow-up
                appointments to monitor your progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;