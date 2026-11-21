import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const filters = ["All", "Full-Stack", "Backend", "Frontend"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.startsWith(active));

  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">projects</span>
        </h2>
        <p className="section-sub">
          A selection of things I've built. Click any project to see the
          details, features and tech behind it.
        </p>

        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${active === f ? "active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}