import { Mail, Briefcase } from "lucide-react";
import { gmailLink, FIVERR_URL, EMAIL } from "../utils/contact";

export default function Contact() {
  const mailLink = gmailLink(
    "Project inquiry",
    "Hi Ayesha,\n\nI'd like to talk about a project.\n\nAbout my project:\n"
  );

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
            <a href={FIVERR_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Briefcase size={18} /> Hire me on Fiverr
            </a>
            <a href={mailLink} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Mail size={18} /> Send an email
            </a>
          </div>

          <p className="contact-email">Or write to me directly: {EMAIL}</p>
        </div>
      </div>
    </section>
  );
}