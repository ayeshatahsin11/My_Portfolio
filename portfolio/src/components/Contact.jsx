import { Mail, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-box card-glass reveal">
          <span className="section-label">Contact</span>
          <h2>
            Let's build something{" "}
            <span className="gradient-text">great together</span>
          </h2>
          <p>
            Have a project in mind? Send me a message or order directly on
            Fiverr. I'd love to hear about it.
          </p>

          <div className="contact-actions">
            <a
              href="https://www.fiverr.com/s/K3w4gqE"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <Briefcase size={18} /> Hire me on Fiverr
            </a>
            <a href="mailto:ayeshatahsin1000@gmail.com" className="btn btn-ghost">
              <Mail size={18} /> Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}