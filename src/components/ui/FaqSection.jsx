import { useState } from "react";
import plus_icon from "../../assets/icons/plus-icon.png";
import down_icon from "../../assets/icons/down-icon.png";

const FaqSection = () => {
  const [faqsArray, setFaqsArray] = useState([
    { id: 0, topic: "How do I get a Referral Code?", shown: false },
    { id: 1, topic: "Do I get rewarded in tokens or ETH when I refer buyers?", text: "You receive your rewards in ETH instantly once someone you refer makes a transaction!", shown: true },
    { id: 2, topic: "How do I get a Referral Code?", shown: false },
  ]);

  const updateFaqsArray = (id, text) => {
    setFaqsArray(prevState => prevState.map((faq) => {
      if(faq.id === id && text) {
        return {...faq, shown: !faq.shown}
      };
      return faq;
    }));
  };

  return (
    <section id="faq-section">
      <h1 id="faq-topic">FAQs</h1>
      <main id="faq-main">
        {faqsArray.map(({ id, topic, text, shown }) => {
          return (
            <div key={id} className="faq-div">
              <div className="faq-inner-div">
                <h1 className="faq-topic">{topic}</h1>
                {shown && <p className="faq-text">{text}</p>}
              </div>
              <img onClick={() => updateFaqsArray(id, text)} src={shown ? down_icon : plus_icon} alt="SHOW FAQs ICON" className="faq-icon" />
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default FaqSection;