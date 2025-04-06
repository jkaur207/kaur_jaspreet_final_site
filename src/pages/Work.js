import React from "react";

const Work = () => (
  <div className="container">
    <h2>My Work</h2>

    {/* Project 1: React App with Storybook */}
    <div className="work-card">

      <h3>React App with Storybook</h3>
      <p>
        A React application showcasing different reusable UI components using
        Storybook. This project allowed me to design and display components in
        isolation, helping me build and test components effectively before integrating
        them into the larger application.
      </p>
      { <a href="https://github.com/jkaur207/kaur_jaspreet_coding_assignment_12.git" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>}
    </div>

    {/* Project 2: Urban Threads Clothing Website */}
    <div className="work-card">

      <h3>Urban Threads Clothing Website</h3>
      <p>
        A fully functional clothing e-commerce website that showcases a collection of
        urban fashion. The website allows users to browse products, add items to the
        cart, and complete purchases. This project enhanced my skills in working with
        dynamic content and creating user-friendly e-commerce sites.
      </p>
      {<a href="https://github.com/jkaur207/urban_threads" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>}
    </div>

    {/* Project 3: Stungeye Blog */}
    <div className="work-card">

      <h3>Stungeye Blog</h3>
      <p>
        A blog platform built with a focus on delivering clean and engaging content. This
        project involved designing and developing the frontend and integrating the backend
        to support blog posts, categories, and comments.
      </p>
      {<a href="https://github.com/jkaur207/blog" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>}
    </div>

   {/* Project 4: Engrave and Adore */}
   <div className="work-card">

      <h3>Engrave and Adore – Personalized Gift Store</h3>
      <p>
        An eCommerce website for customized gifts such as engraved items, photo-printed
        products, and personalized accessories. Built using Ruby on Rails, this project
        includes features like product administration, customer orders, and third-party
        integrations. It reflects my skills in full-stack development and attention to
        UX/UI design for a niche market.
      </p>
      {<a href="https://github.com/jkaur207/engrave-adore" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>}
    </div>
  </div>
);

export default Work;