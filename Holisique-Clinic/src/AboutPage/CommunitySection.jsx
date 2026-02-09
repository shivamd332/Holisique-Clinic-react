import "./CommunitySection.css";
import img1 from "../assets/About/community1.png";
import img2 from "../assets/About/community2.png";
import img3 from "../assets/About/community3.png";


const CommunitySection = () => {
  return (
    <section className="community-section">
      <div className="community-header">
        <div className="community-tag">
          <span className="community-line"></span>
          <span>Community</span>
        </div>

        <h2 className="community-title">Creating Wellness Together</h2>
        <p className="community-subtitle">
          We provide the resources and connections you need to thrive. Let’s
          create a healthier future, together.
        </p>
      </div>

      <div className="community-block">
        <div className="community-img">
          <img src={img1} alt="collaboration" />
        </div>
        <div className="community-text">
          <h3>Discover Our Collaborations</h3>
          <p>
            Together, we work to enhance health services, promote wellness
            initiatives, and improve the overall well-being of our community.
            Discover how these collaborations bring
            <br />
            <span>
              Together, we work to enhance health services, promote wellness
              initiatives, and improve the overall well-being of our community.
              Discover how these collaborations bring innovative solutions and
              valuable resources to meet your health needs.
            </span>
          </p>
          <button className="community-btn">
            Read More <span>↗</span>
          </button>
        </div>
      </div>

      <div className="community-block reverse">
        <div className="community-img">
          <img src={img2} alt="initiatives" />
        </div>
        <div className="community-text">
          <h3>Explore Our Initiatives</h3>
          <p>
            Together, we work to enhance health services, promote wellness
            initiatives, and improve the overall well-being of our community.
            Discover how these collaborations bring innovative solutions and
            valuable resources to meet your health needs.
          </p>
          <button className="community-btn">
            Read More <span>↗</span>
          </button>
        </div>
      </div>

      <div className="community-block">
        <div className="community-img">
          <img src={img3} alt="support center" />
        </div>
        <div className="community-text">
          <h3>Community Support Center</h3>
          <p>
            Together, we work to enhance health services, promote wellness
            initiatives, and improve the overall well-being of our community.
            Discover how these collaborations bring innovative solutions and
            valuable resources to meet your health needs.Together, we work to
            enhance health services, promote wellness initiatives, and improve
            the overall well-being of our community. Discover how these
            collaborations bring innovative solutions and valuable resources to
            meet your health needs.
          </p>
          <button className="community-btn">
            Read More <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
