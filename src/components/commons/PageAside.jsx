const PageAside = ({asideArray}) => {
  return (
    <aside className="header-text-aside">
      {asideArray.map(({ id, text, textColor }) => <p className="aside-text" key={id} style={{ color: textColor ? "#F9D423" : "#FFFFFF" }}>{text}</p>)}
    </aside>
  );
};

export default PageAside;