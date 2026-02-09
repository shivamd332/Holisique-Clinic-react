import "./Appointment.css";
import appointImg from "../assets/Treatment/appointment.png";


const Appointment = () => {
  return (
    <section className="appointment-wrapper">
      <div className="appointment-left">
        <p className="appointment-tag">pediatric health services</p>

        <h2 className="appointment-title">
          A World Of Health Services with Specialist Doctors & Technology
        </h2>

        <p className="appointment-text">
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
          consectetur adipiscing elit. Non quae, fugiat consequatur volutpatem
          nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum viverra.
        </p>

        <button className="appointment-btn">
          Book Appointment
          <span className="appointment-arrow">➜</span>
        </button>
      </div>

      <div className="appointment-right">
        <img src={appointImg} alt="appointment" />
      </div>
    </section>
  );
};

export default Appointment;
