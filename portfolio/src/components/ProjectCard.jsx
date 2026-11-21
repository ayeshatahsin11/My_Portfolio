import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-card card-glass">
      <div className="project-thumb">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="project-category">{project.category}</span>
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <ArrowUpRight size={20} className="project-arrow" />
        </div>
        <p>{project.tagline}</p>
        <div className="tag-list">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}