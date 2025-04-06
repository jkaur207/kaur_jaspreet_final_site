import React from "react";

const ResourceCard = ({ title, summary, link }) => (
  <div className="resource-card">
    <h3>{title}</h3>
    <p>{summary}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">Visit</a>
  </div>
);

export default ResourceCard;
