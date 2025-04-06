import React from "react";

const Skills = () => (
  <div className="container">
    <h2>My Skills</h2>

    <div className="skills-category">
      <h3>Frontend Development</h3>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Sass</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    <div className="skills-category">
      <h3>Backend Development</h3>
      <ul className="skills-list">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Ruby on Rails</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
      </ul>
    </div>

    <div className="skills-category">
      <h3>DevOps & Tools</h3>
      <ul className="skills-list">
        <li>Docker</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Heroku</li>
        <li>Netlify</li>
      </ul>
    </div>
  </div>
);

export default Skills;
