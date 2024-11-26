import dollar_sign from "../../assets/icons/dollar-sign.png";
import safeguard_icon from "../../assets/icons/safeguard-icon.png";
import caller_icon from "../../assets/icons/caller-icon.png";
import switch_icon from "../../assets/icons/switch-icon.png";

const FeatureSection = () => {
  const featuresArray = [
    { id: 0, icon: dollar_sign, topic: "Cheapet TXs", text: "Exchange popular digital currencies at the cheapest possible transaction price" },
    { id: 1, icon: safeguard_icon, topic: "CerTIK", text: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to " },
    { id: 2, icon: caller_icon, topic: "No Contract Sells", text: "No contract sells to fund the marketing wallets" },
    { id: 3, icon: switch_icon, topic: "CrossDex Support", text: "Exchange popular digital currencies at the cheapest possible transaction price" }
  ];

  return (
    <section id="feature-section">
      <h1 id="feature-topic"> Our <span style={{ color: "#E4B40D" }}>Features</span></h1>
      <main id="feature-main">
        {featuresArray.map(({ id, icon, topic, text }) => {
          return (
            <div key={id} className="feature-div">
              <img src={icon} alt="DOLLAR SIGN" className="feature-icon" />
              <h1 className="feature-topic">{topic}</h1>
              <p className="feature-text">{text}</p>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default FeatureSection;