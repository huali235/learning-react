import jane from "../imgs/jane-pic.jpeg";

export default Info = () => {
  return (
    <div className="info-container">
      <img src={jane} className="profile-img" alt="jane profile picture" />
      <div className="profile-description">
        <h1 className="name">Jane Doe</h1>
        <p className="occupation">Frontend Developer</p>
        <p className="website">janedoe.website</p>
      </div>
      <div className="contact-info">
        <button data-icon="email-logo" className="email-btn">
          Email
        </button>
        <button data-icon="linkedin-logo" className="linkedin-btn">
          Linkedin
        </button>
      </div>
    </div>
  );
};
