import ReactIcon from "../imgs/react-icon.jpg";

export default MainContent = () => {
  return (
    <div className="main-container">
      <img src={ReactIcon} alt="react-icon" className="react-icon-large" />
      <h1>Fun Facts About React</h1>
      <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k starts on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
};
