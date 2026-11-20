import { ArrowRight, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="pulse-dot" />
            Available for freelance work
          </span>

          <h1>
            Hi, I'm Ayesha.
            <br />
            I build <span className="gradient-text">fast, modern web apps</span>{" "}
            for your business.
          </h1>

          <p className="hero-text">
            MERN Stack Developer who turns Figma designs into pixel-perfect
            React and Next.js interfaces, and builds secure REST APIs and
            full-stack apps behind them.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work <ArrowRight size={18} />
            </a>
            <a
              href="https://www.fiverr.com/s/K3w4gqE"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <Briefcase size={18} /> Hire me on Fiverr
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>8+</strong>
              <span>Projects built</span>
            </div>
            <div className="stat">
              <strong>MERN</strong>
              <span>Full-stack developer</span>
            </div>
            <div className="stat">
              <strong>Figma → Code</strong>
              <span>Pixel-perfect</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="hero-logo-card card-glass">
            <img src="/logo.png" alt="Ayesha Tahsin Rafa logo" />
          </div>
          <span className="float-chip chip-1">React</span>
          <span className="float-chip chip-2">Node.js</span>
          <span className="float-chip chip-3">MongoDB</span>
          <span className="float-chip chip-4">Next.js</span>
        </div>
      </div>
    </section>
  );
}