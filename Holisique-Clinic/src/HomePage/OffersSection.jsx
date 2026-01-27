import "./OffersSection.css";

const OffersSection = () => {
  return (
    <section className="offers-section">
      <h2>Sign up for offers and save 15%</h2>

      <p className="offers-text">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed
        est cursus. Vel hac convallis ipsum, facilisi odio pellentesque .“Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est
        cursus. Vel hac convallis ipsum, facilisi odio pellentesque .
      </p>

      <div className="offers-inputs">
        <input type="text" placeholder="Enter your Name" />
        <input type="email" placeholder="Enter your Email" />
      </div>

      <button className="offers-btn">
        Submit
        <span className="offers-arrow">➜</span>
      </button>
    </section>
  );
};

export default OffersSection;