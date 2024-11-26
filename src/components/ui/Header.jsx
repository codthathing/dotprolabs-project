import React from "react";
import PageLogoText from "../commons/PageLogoText";
import PageAside from "../commons/PageAside";
import PageButtons from "../commons/PageButtons";

const Header = () => {
  const asideTexts = [
    { id: 0, text: "home", textColor: true },
    { id: 1, text: "about us" },
    { id: 2, text: "roadmap" },
    { id: 3, text: "FAQs" },
    { id: 4, text: "contact us" },
  ];

  return (
    <header id="page-header">
      <PageLogoText iconId={"header-logo"} />
      <PageAside asideArray={asideTexts} />
      <PageButtons buttonType={"background-button"} buttonClass={"header-button"} buttonText={"connect wallet"} />
    </header>
  );
};

export default Header;
