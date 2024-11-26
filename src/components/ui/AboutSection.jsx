import uniswap_logo_text from "../../assets/icons/uniswap-logo-text.png";
import check_icon from "../../assets/icons/check-icon.png";
import cancel_icon from "../../assets/icons/cancel-icon.png";
import PageLogoText from "../commons/PageLogoText";

const AboutSection = () => {

  // I could not write the same number for the id, because it would return an error
  const aboutTexts = [
    { id: 0, textArray: [{ id: 1, text: "Point no one" }] },
    { id: 1, textArray: [{ id: 2, text: "Point no two this" }] },
    { id: 2, textArray: [{ id: 3, text: "Point no three this" }] },
    { id: 3, textArray: [{ id: 4, text: "Point no four this" }] },
    { id: 4, textArray: [{ id: 5, text: "Point no five this" }] },
  ];

  return (
    <section id="about-section">
      <h1 id="about-topic">{"Why"} <span style={{ color: "#E4B40D" }}>Money</span> ?</h1>
      <table id="about-table">
        <thead>
          <tr>
            <th className="about-table-head">Comparison</th>
            <th className="about-table-head"><PageLogoText iconId={"about-moonex-logo"} mainStyle={"center"} /></th>
            <th className="about-table-head"><img src={uniswap_logo_text} id="table-uniswap-logo" alt="UNISWAP LOGO" /></th>
          </tr>
        </thead>
        <tbody>
          {aboutTexts.map(({ id, textArray }) => {
            return (
              <tr key={id}>
                {textArray.map(({ id, text }) => <td key={id} className="about-table-data">{id}. {text}</td>)}
                <td className="about-table-data"><img src={check_icon} className="about-table-icon" alt="CHECK ICON" /></td>
                <td className="about-table-data"><img src={cancel_icon} className="about-table-icon" alt="CANCEL" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default AboutSection;
