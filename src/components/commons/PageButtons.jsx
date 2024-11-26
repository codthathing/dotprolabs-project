const PageButtons = ({ buttonType, buttonClass, buttonText }) => {
  return (
    <button type="button" className={`${buttonClass} ${buttonType === "background-button" ? "background-page-button" : "transparent-page-button"} page-button`}>
      <span className={`${buttonType === "background-button" ? "button-background-text" : "button-transparent-text"} page-button-text`}>{buttonText}</span>
    </button>
  );
};

export default PageButtons;
