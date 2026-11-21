import { Layout, Server, Database, Wrench } from "lucide-react";
import { skillGroups } from "../data/skills";

const iconMap = { Layout, Server, Database, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">
          Tools I <span className="gradient-text">work with</span>
        </h2>
        <p className="section-sub">
          A complete MERN toolkit, so one developer can take your idea from
          design to a live product.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <div key={group.title} className="skill-card card-glass reveal">
                <div className="icon-box">
                  <Icon size={22} />
                </div>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}