import React from "react";

const projects = [
  {
    title: "Ecommerce Dashboard",
    image: "/images/project1.jpg",
    description:
      "Built a full-featured dashboard for a small business with analytics, inventory, and real-time updates.",
    quote:
      '"Exactly what we needed. Quick, reliable, professional!" - Sarah J.',
  },
  {
    title: "Portfolio Website",
    image: "/images/project2.jpg",
    description:
      "Crafted a modern, responsive portfolio for a local artist to showcase their work beautifully.",
    quote: '"I got more commissions within the first week!" - Lucas B.',
  },
  {
    title: "Internal CRM Tool",
    image: "/images/project3.jpg",
    description:
      "Developed a custom CRM system for a medium-sized agency to streamline client communication.",
    quote: '"It’s like our team got a superpower overnight." - Priya R.',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Previous Work</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <blockquote>{project.quote}</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
