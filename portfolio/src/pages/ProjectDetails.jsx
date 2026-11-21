import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Check,
  Clock,
  Code,
  ExternalLink,
  Mail,
  Wallet,
} from "lucide-react";
import { projects } from "../data/projects";
import { img } from "../utils/cloudinary";
import { gmailLink, FIVERR_URL } from "../utils/contact";

export default function ProjectDetails() {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const [active, setActive] = useState(0);

  // go back to the first image when opening another project
  useEffect(() => {
    setActive(0);
  }, [id]);

  if (!project) {
    return (
      <section className="detail-page">
        <div className="container not-found">
          <h1>Project not found</h1>
          <p>This project doesn't exist or was removed.</p>
          <Link to="/#projects" className="btn btn-primary">
            <ArrowLeft size={18} /> Back to projects
          </Link>
        </div>
      </section>
    );
  }

  const images = project.images || [];
  // the two small thumbnails are always the images that are NOT in the big view
  const thumbs = images.map((_, i) => i).filter((i) => i !== active);
  const next = projects[(index + 1) % projects.length];

  const mailLink = gmailLink(
    `Inquiry about a project like "${project.title}"`,
    `Hi Ayesha,\n\nI saw your "${project.title}" project and I'd like something similar.\n\nAbout my project:\n`
  );

  return (
    <section className="detail-page">
      <div className="container">
        <Link to="/#projects" className="back-link">
          <ArrowLeft size={16} /> Back to all projects
        </Link>

        <div className="detail-top">
          {/* ---------- GALLERY ---------- */}
          <div className="gallery">
            <div className="gallery-thumbs">
              {thumbs.map((i) => (
                <button
                  key={i}
                  className="thumb-btn"
                  onClick={() => setActive(i)}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img
                    src={img(images[i], 400)}
                    alt={`${project.title} preview ${i + 1}`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="gallery-main">
              <img
                key={active}
                src={img(images[active], 1400)}
                alt={`${project.title} screenshot`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* ---------- INFO ---------- */}
          <aside className="detail-info">
            <span className="section-label">{project.category}</span>
            <h1>{project.title}</h1>
            <p className="detail-tagline">{project.tagline}</p>

            <div className="tag-list">
              {project.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <p className="meta-line">
              My role: <strong>{project.role}</strong>
            </p>

            <div className="price-card card-glass">
              <div className="price-row">
                <div className="icon-box">
                  <Wallet size={20} />
                </div>
                <div>
                  <span>Typical price range</span>
                  <strong>{project.priceRange}</strong>
                </div>
              </div>
              <div className="price-row">
                <div className="icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <span>Delivery time</span>
                  <strong>{project.timeline}</strong>
                </div>
              </div>

              <div className="price-actions">
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <Briefcase size={18} /> Order on Fiverr
                </a>
                <a
                  href={mailLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <Mail size={18} /> Message me on Gmail
                </a>
              </div>
              <small className="price-note">
                The final price depends on your requirements. Message me for an
                exact quote.
              </small>
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="detail-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Code size={16} /> Source code
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>

        {/* ---------- CASE STUDY ---------- */}
        <div className="detail-body">
          <div className="detail-block card-glass">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </div>

          <div className="two-cols">
            <div className="detail-block card-glass">
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </div>
            <div className="detail-block card-glass">
              <h2>What I built</h2>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="detail-block card-glass">
            <h2>Key features</h2>
            <ul className="feature-list">
              {project.features.map((f) => (
                <li key={f}>
                  <Check size={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- CTA + NEXT ---------- */}
        <div className="detail-cta card-glass">
          <h2>
            Want something <span className="gradient-text">similar</span>?
          </h2>
          <p>Tell me about your project and I'll get back to you with a plan and quote.</p>
          <div className="contact-actions">
            <a href={FIVERR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Briefcase size={18} /> Hire me on Fiverr
            </a>
            <a href={mailLink} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Mail size={18} /> Send an email
            </a>
          </div>
        </div>

        <Link to={`/project/${next.id}`} className="next-project card-glass">
          <div>
            <span>Next project</span>
            <strong>{next.title}</strong>
          </div>
          <ArrowRight size={22} />
        </Link>
      </div>
    </section>
  );
}