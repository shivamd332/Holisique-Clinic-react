import "./ServiceSection.css";

import hairImg from "../assets/hair.png";
// import skinImg from "../assets/skin.png";
import pcosImg from "../assets/pcos.png";
import thyroidImg from "../assets/thyroid.png";
import migraineImg from "../assets/migraine.png";
import psoriasisImg from "../assets/psoriasis.png";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <span className="services-tag">Services</span>

        <h2 className="services-title">Our Treatments</h2>

        <p className="services-desc">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibendum viverra tempus.”“Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum,
          facilisi odio pellentesque bibendum viverra tempus.”
        </p>

        <div className="services-filters">
          <button className="filter-btn active">Show All</button>
          <button className="filter-btn">Skin Problems</button>
          <button className="filter-btn">Skin Problems</button>
          <button className="filter-btn">Skin Problems</button>
        </div>

        <div className="services-grid">
          <div className="service-card image-card">
            <img src={hairImg} alt="Hair Fall Treatment" />
            <span className="card-title">
              Hair Fall Treatment <br></br>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </span>
          </div>

          <div className="service-card highlight-card">
            <h3>Skin Treatment</h3>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum, facilisi odio
              pellentesque bibendum viverra tempus.”“Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ornare non sed est cursus.
            </p>
            <span className="arrow">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            </span>
          </div>

          <div className="service-card image-card">
            <img src={pcosImg} alt="PCOS Treatment" />
            <span className="card-title">
              PCOS Treatment <br></br>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </span>
          </div>

          <div className="service-card image-card">
            <img src={thyroidImg} alt="Thyroid Treatment" />
            <span className="card-title">
              Thyroid Treatment <br></br>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </span>
          </div>

          <div className="service-card image-card">
            <img src={migraineImg} alt="Migraine Treatment" />
            <span className="card-title">
              Migraine Treatment <br></br>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </span>
          </div>

          <div className="service-card image-card">
            <img src={psoriasisImg} alt="Psoriasis Treatment" />
            <span className="card-title">
              Psoriasis Treatment <br></br>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>

        <button className="services-cta">
          Show All Services
          <span className="cta-circle">
            <span className="cta-arrow">➜</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
