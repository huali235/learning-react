import ReactIcon from "../imgs/react-icon.jpg";

export default Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="left-header">
          <img src={ReactIcon} alt="react-icon" className="react-icon" />
          <h2 className="react-title">ReactFacts</h2>
        </div>
        <h3 className="course-title">React Course - Project 1</h3>
      </nav>
    </header>
  );
};
