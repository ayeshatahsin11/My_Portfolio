import { PenTool, Layers, Webhook, ShoppingCart } from "lucide-react";
import { services } from "../data/skills";

const iconMap = { PenTool, Layers, Webhook, ShoppingCart };

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <span className="section-label">What I do</span>
        <h2 className="section-title">
          How I can <span className="gradient-text">help you</span>
        </h2>
        <p className="section-sub">
          From a single landing page to a complete web application, here is
          what I can build for you.
        </p>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.title} className="service-card card-glass reveal">
                <div className="icon-box">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}