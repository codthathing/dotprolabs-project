import React from "react";
import PageButtons from "../commons/PageButtons";

const LandingSection = () => {
  return (
    <section id="landing-section">
      <h1 id="landing-topic">{"Trusted Multi-Chain \n"}<span style={{color: "#F9D423"}}>DEX</span> Platform</h1>
      <p id="landing-text">{"Trade, earn, and own crypto on the\n all-in-one multi-chain DEX"}</p>
      <div id="landing-buttons-div">
        <PageButtons buttonType={"background-button"} buttonText={"connect wallet"} buttonClass={"landing-button"} />
        <PageButtons buttonType={"transparent-button"} buttonText={"trade wallet"} buttonClass={"landing-button"} />
      </div>
    </section>
  );
};

export default LandingSection;
