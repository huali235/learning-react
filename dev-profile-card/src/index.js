import React from "react";
import ReactDOM from "react-dom/client";
import ".//styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src="jane-pic-2.jpeg" alt="avatar" className="avatar-img" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1 className="name">Jane Doe</h1>
      <p className="description">
        Full stack web developer and teacher. When not coding or teaching, I
        like to play board games, to cook (and eat), or to just enjoy the sun at
        the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="#1c7ed6" />
      <Skill skill="JavaScript" emoji="💪" color="#fcc419" />
      <Skill skill="Web Design" emoji="💪" color="#a9e34b" />
      <Skill skill="Git and Github" emoji="👍" color="#fa5252" />
      <Skill skill="React" emoji="💪" color="#3bc9db" />
      <Skill skill="Svelte" emoji="👶" color="#ffa94d" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li style={{ backgroundColor: `${props.color}` }}>
      {props.skill} {props.emoji}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
