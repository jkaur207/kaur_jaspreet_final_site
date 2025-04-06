import React from "react";
import ResourceCard from "../components/ResourceCard";

const resources = [
  {
    title: "React Docs",
    summary: "Official documentation for React, a popular JavaScript library for building user interfaces.",
    link: "https://react.dev",
    category: "Frontend",
    difficulty: "Beginner"
  },
  {
    title: "Docker Guide",
    summary: "Comprehensive guide to Docker, the platform used for developing, shipping, and running applications.",
    link: "https://docs.docker.com",
    category: "DevOps",
    difficulty: "Intermediate"
  },
  {
    title: "MDN Web Docs",
    summary: "The Mozilla Developer Network's extensive resource for web developers covering HTML, CSS, JavaScript, and more.",
    link: "https://developer.mozilla.org",
    category: "Frontend",
    difficulty: "Beginner"
  },
  {
    title: "Node.js Documentation",
    summary: "Official documentation for Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    link: "https://nodejs.org/en/docs/",
    category: "Backend",
    difficulty: "Intermediate"
  },
  {
    title: "GitHub Guides",
    summary: "Guides and tutorials for using GitHub, a platform for version control and collaboration.",
    link: "https://guides.github.com",
    category: "Version Control",
    difficulty: "Beginner"
  }
];

const Resources = () => (
  <div>
    <h2>Developer Resources</h2>
    <p className="resources-intro">
      Here are some essential resources that I’ve found incredibly useful as a web developer.
      They cover everything from frontend frameworks to backend technologies, DevOps tools, and version control.
      Whether you’re just starting out or looking to deepen your knowledge, these guides will help you grow.
    </p>

    <section className="resource-categories">
      <h3>Frontend Resources</h3>
      <div className="category-container">
        {resources
          .filter((res) => res.category === "Frontend")
          .map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
      </div>

      <h3>Backend Resources</h3>
      <div className="category-container">
        {resources
          .filter((res) => res.category === "Backend")
          .map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
      </div>

      <h3>DevOps Resources</h3>
      <div className="category-container">
        {resources
          .filter((res) => res.category === "DevOps")
          .map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
      </div>

      <h3>Version Control Resources</h3>
      <div className="category-container">
        {resources
          .filter((res) => res.category === "Version Control")
          .map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
      </div>
    </section>

    <section className="resource-tips">
      <h3>Resource Tips for Developers</h3>
      <p>
        As a developer, constantly learning and exploring new resources is essential for growth. Here are a few tips:
      </p>
      <ul>
        <li><strong>Keep Learning:</strong> The tech industry is constantly evolving, so make sure you keep up with the latest trends and best practices.</li>
        <li><strong>Experiment with Projects:</strong> The best way to learn is by doing. Build small projects using the resources you find.</li>
        <li><strong>Join Communities:</strong> Communities such as Stack Overflow, GitHub, and Reddit are great places to ask questions, share knowledge, and connect with other developers.</li>
      </ul>
    </section>
  </div>
);

export default Resources;
