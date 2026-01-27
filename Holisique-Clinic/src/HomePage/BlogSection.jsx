import "./BlogSection.css";
import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <p className="blog-tag">Our blog</p>
      <h2 className="blog-title">Our Success Stories</h2>
      <p className="blog-subtitle">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>

      <div className="subscribe-wrapper">
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>
            Subscribe
            <span className="circle-arrow">➜</span>
          </button>
        </div>
        <p className="privacy-text">
          We care about your data in our <span>privacy policy</span>
        </p>
      </div>

      <h3 className="recent-title">Recent blog posts</h3>

      <div className="blog-grid">
        <div className="blog-card big">
          <img src={img1} alt="blog" />
          <div className="blog-content">
            <span className="date">20 Jan 2022</span>
            <h4>
              Lorem ipsum dolor sit amet
              <span className="title-arrow">↗</span>
            </h4>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque .“Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
              odio pellentesque .
            </p>
          </div>
        </div>

        <div className="blog-right">
          <div className="blog-card small">
            <img src={img2} alt="blog" />
            <div className="blog-content">
              <span className="date">18 Jan 2025</span>
              <h3>
                Building your API Stack
                <span className="title-arrow">↗</span>
              </h3>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis .
              </p>
            </div>
          </div>

          <div className="blog-card small">
            <img src={img3} alt="blog" />
            <div className="blog-content">
              <span className="date">18 Jan 2025</span>
              <h3>
                Building your API Stack
                <span className="title-arrow">↗</span>
              </h3>
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
