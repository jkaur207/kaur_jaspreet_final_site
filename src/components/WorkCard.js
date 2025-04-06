import React from "react";

const WorkCard = ({ title, description, image, link, tech }) => (
  <div className="work-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p>Technologies: {tech.join(", ")}</p>
    <a href={link}>View Project</a>
  </div>
);

export default WorkCard;
