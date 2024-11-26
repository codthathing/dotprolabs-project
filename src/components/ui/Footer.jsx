import moonex_logo_text from "../../assets/icons/moonex-logo-text.png";
import message_icon from "../../assets/icons/message-icon.png";
import teddy_icon from "../../assets/icons/teddy-icon.png";
import twitter_icon from "../../assets/icons/twitter-icon.png";
import PageAside from "../commons/PageAside";

const Footer = () => {
  const asideTexts = [
    { id: 1, text: "about us" },
    { id: 2, text: "roadmap" },
    { id: 3, text: "FAQs" },
    { id: 4, text: "contact us" },
  ];

  const socialIcons = [
    {id: 0, icon: message_icon},
    {id: 1, icon: teddy_icon},
    {id: 2, icon: twitter_icon}
  ];

  return (
    <footer id="page-footer">
      <img src={moonex_logo_text} alt="MOONEX LOGO TEXT" id="footer-logo-image" />
      <PageAside asideArray={asideTexts} />
      <div id="footer-contact-div">
        <h1 id="footer-contact-text">Contact <span style={{color: "#E4B40D"}}>Us</span></h1>
        <div id="footer-contact-icon-div">
          {socialIcons.map(({id, icon}) => <img key={id} src={icon} alt="SOCIAL ICONS" className="footer-contact-icon" />)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;