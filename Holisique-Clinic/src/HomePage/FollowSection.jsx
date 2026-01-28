import "./FollowSection.css";
import img1 from "../assets/Home/follow1.png";
import img2 from "../assets/Home/follow2.png";
import img3 from "../assets/Home/follow3.png";
import img4 from "../assets/Home/follow4.png";
import img5 from "../assets/Home/follow5.png";


const FollowSection = () => {
  return (
    <section className="follow-section">
      <h3 className="follow-text">Follow @dr_martin on Instagram</h3>

      <div className="follow-images">
        <img src={img1} alt="insta1" />
        <img src={img2} alt="insta2" />
        <img src={img3} alt="insta3" />
        <img src={img4} alt="insta4" />
        <img src={img5} alt="insta5" />
      </div>
    </section>
  );
};

export default FollowSection;
