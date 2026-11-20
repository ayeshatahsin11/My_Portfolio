import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/#home" className="brand">
            <span className="brand-mark">ATR</span>
            <span className="brand-name">Ayesha Tahsin Rafa</span>
          </Link>
          <p>MERN Stack Developer based in Dhaka, Bangladesh.</p>
        </div>

        <div className="footer-links">
          <a
            href="https://www.fiverr.com/s/K3w4gqE"
            target="_blank"
            rel="noreferrer"
          >
            Fiverr <ArrowUpRight size={15} />
          </a>
          <a
            href="https://github.com/ayeshatahsin11"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
          <a href="mailto:ayeshatahsin1000@gmail.com">
            <Mail size={15} /> ayeshatahsin1000@gmail.com
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} Ayesha Tahsin Rafa. All rights reserved.
      </div>
    </footer>
  );
}