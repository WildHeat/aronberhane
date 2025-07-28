import React from "react";

const ProjectShowcase: React.FC = () => {
  return (
    <main className="project">
      <section className="hero">
        <h1>My Personal Project</h1>
        <p>A modern web tool to help developers organize their ideas.</p>
      </section>

      <section className="overview">
        <h2>Overview</h2>
        <p>
          This app allows users to create notes, tag them, and organize
          everything in a single workspace.
        </p>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Tag-based filtering</li>
          <li>Responsive UI</li>
          <li>Markdown support</li>
        </ul>
      </section>

      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <p>React, TypeScript, Node.js, Firebase</p>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>
          Feel free to reach out:{" "}
          <a href="mailto:you@example.com">you@example.com</a>
        </p>
      </section>
    </main>
  );
};

export default ProjectShowcase;
