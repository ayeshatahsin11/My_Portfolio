import { GraduationCap, Award, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-text reveal">
          <span className="section-label">About me</span>
          <h2 className="section-title">
            Developer who cares about <span className="gradient-text">details</span>
          </h2>
          <p>
            I'm <strong>Ayesha Tahsin Rafa</strong>, a MERN stack developer from
            Dhaka, Bangladesh. I turn designs into responsive websites and build
            full-stack apps, from the React interface you see to the Node.js API
            and MongoDB database behind it.
          </p>
          <p>
            I completed my MERN stack training at Creative IT Institute and have
            since built 8+ projects, including a multi-role e-commerce platform
            and a learning management system. Alongside this, I'm studying
            Chemistry at the University of Dhaka.
          </p>
          <p>
            Whether you need a landing page from a Figma file or a complete web
            app, I'll keep communication clear and deliver clean, responsive
            work.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card card-glass reveal">
            <div className="icon-box">
              <Award size={22} />
            </div>
            <div>
              <h4>MERN Stack Certified</h4>
              <p>Creative IT Institute</p>
            </div>
          </div>
          <div className="about-card card-glass reveal">
            <div className="icon-box">
              <GraduationCap size={22} />
            </div>
            <div>
              <h4>Chemistry Major</h4>
              <p>University of Dhaka, since 2025</p>
            </div>
          </div>
          <div className="about-card card-glass reveal">
            <div className="icon-box">
              <Rocket size={22} />
            </div>
            <div>
              <h4>What I focus on</h4>
              <p>Clean code, pixel-perfect UI and clear communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}