import { useState } from "react";
import "./FaqSection.css";
import faqImg from "../assets/About/faq-doctor.png";


const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer:
        "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .",
    },
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer:
        "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .",
    },
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer:
        "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .",
    },
    {
      question: "Lorem ipsum viverra feugiat. Pellen tesque libero ut ?",
      answer:
        "orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet .",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-left">
        <div className="faq-tag">
          <span className="faq-line"></span>
          <span>Faqs</span>
        </div>

        <h2 className="faq-title">
          We Are Always Health Give <br /> Of Best Service
        </h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-right">
        <img src={faqImg} alt="faq" />
      </div>
    </section>
  );
};

export default FaqSection;
