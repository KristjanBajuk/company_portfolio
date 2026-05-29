import { PORTFOLIO } from "@/lib/data";

export default function Footer() {
  const D = PORTFOLIO;
  return (
    <footer className="shell" style={{ paddingBottom: 40 }}>
      <div className="footer">
        <div className="col">
          <div className="brand-block">
            Makoreactor — <em>Kristjan Bajuk</em>.
            <div className="sig">© 2026 · Built from scratch</div>
          </div>
        </div>
        <div className="col">
          <h6>Sitemap</h6>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#ethsi">ETH·SI</a>
          <a href="#stack">Stack</a>
        </div>
        <div className="col">
          <h6>Elsewhere</h6>
          {D.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label} ↗
            </a>
          ))}
          <a href="/cv.pdf" download>CV ↓</a>
        </div>
        <div className="col">
          <h6>Address</h6>
          <span style={{ color: "var(--ink-dim)" }}>
            Ljubljana
            <br />
            Slovenija · EU
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>makoreactor.eth · 0x····5b3a</span>
        <span>v2026.05 / live</span>
      </div>
    </footer>
  );
}
