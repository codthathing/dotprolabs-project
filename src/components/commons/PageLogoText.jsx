import page_logo from "../../assets/icons/moonex-logo.png";

const PageLogoText = ({iconId, mainStyle}) => {
  return (
    <main className="header-logo-text-main" style={{ justifyContent: mainStyle }}>
      <img src={page_logo} alt="PAGE LOGO" id={iconId} />
      <p className="header-text">moonex</p>
    </main>
  );
};

export default PageLogoText;