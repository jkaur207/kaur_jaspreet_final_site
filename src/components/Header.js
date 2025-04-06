import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>Jaspreet's Portfolio</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/setup">Developer Setup</Link>
    </nav>
  </header>
);

export default Header;
