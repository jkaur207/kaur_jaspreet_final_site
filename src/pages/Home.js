import React from "react";

const Home = () => (
  <div className="home-container">
    <h2>Welcome to My Portfolio</h2>
    <p>
      Hi! I’m Jaspreet, a full-stack web developer passionate about creating
      efficient and user-friendly web applications. This portfolio highlights my
      projects, skills, and the resources I use in my journey as a developer.
    </p>

    {/* About Me Section */}
    <section className="intro">
      <h3>About Me</h3>
      <p>
        I specialize in both frontend and backend development. I enjoy building
        responsive web applications using technologies like React, Node.js, and
        Ruby on Rails. I’m always eager to learn new things and stay up-to-date with
        the latest in the tech world.
      </p>
    </section>

    {/* Projects Section */}
    <section className="projects">
      <h3>My Projects</h3>
      <p>
        Here are a few of the projects I’ve worked on that I’m most proud of:
      </p>
      <ul>
        <li>
          <strong>Personal Blog</strong> – A full-stack blog application built with
          React and Node.js where users can write and comment on posts.
        </li>
        <li>
          <strong>Task Manager</strong> – A project management tool that helps teams
          track tasks and deadlines, built using Ruby on Rails and PostgreSQL.
        </li>
        <li>
          <strong>E-commerce Store</strong> – An e-commerce platform built with
          React and Ruby on Rails that allows users to browse, add items to the cart,
          and make purchases.
        </li>
      </ul>
    </section>

    {/* Hobbies & Interests Section */}
    <section className="hobbies">
      <h3>Hobbies & Interests</h3>
      <p>
        Outside of development, I enjoy exploring the world and getting creative.
        Here are a few of my personal interests:
      </p>
      <ul>
        <li>Photography – Capturing memories and beautiful moments.</li>
        <li>Travel – Exploring new places and learning about different cultures.</li>
        <li>Fitness – Staying active through hiking and swimming.</li>
        <li>Reading – I enjoy books on tech, entrepreneurship, and self-improvement.</li>
      </ul>
    </section>

    {/* Call to Action with LinkedIn */}
    <section className="cta">
      <h3>Let’s Connect!</h3>
      <p>
        I’d love to connect with you! Feel free to check out my LinkedIn profile for
        collaboration opportunities, questions, or just to chat about tech.
      </p>
      <a href="https://www.linkedin.com/in/jaspreet-kaur-13a646338/" target="_blank" rel="noopener noreferrer">
        Visit My LinkedIn
      </a>
    </section>
  </div>
);

export default Home;
