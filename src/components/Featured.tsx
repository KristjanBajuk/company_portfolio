"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { PORTFOLIO, FeaturedProject } from "@/lib/data";
import SectionHead from "./SectionHead";

const layout = ["span-7", "span-5", "span-4", "span-4", "span-4", "span-6", "span-6", "span-6", "span-6"];

function FeaturedPanel({
  proj,
  onClose,
}: {
  proj: FeaturedProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (proj) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [proj, onClose]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const open = !!proj;
  const data = proj || ({} as Partial<FeaturedProject>);
  const det = data.details || { overview: "" };

  if (!mounted) return null;

  return createPortal(
    <>
      <div className={`panel-overlay ${open ? "open" : ""}`} onClick={onClose} />
      <aside className={`panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="panel-head">
          <span className="mono">Project · {data.title || ""}</span>
          <button className="panel-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="panel-body">
          <span className="mono" style={{ color: "var(--gold)" }}>{data.tag}</span>
          <h3>{data.title}</h3>
          <div className="panel-meta">
            <span className="gold">{data.role}</span>
            <span>· {data.year}</span>
          </div>

          {det.overview && (
            <div className="panel-section">
              <div className="label">Overview</div>
              {det.overview.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {det.responsibilities && det.responsibilities.length > 0 && (
            <div className="panel-section">
              <div className="label">What I did</div>
              <ul>
                {det.responsibilities.map((r, i) => (
                  <li key={i}><span>{r}</span></li>
                ))}
              </ul>
            </div>
          )}

          {det.impact && det.impact.length > 0 && (
            <div className="panel-section">
              <div className="label">Impact</div>
              <ul>
                {det.impact.map((r, i) => (
                  <li key={i}><span>{r}</span></li>
                ))}
              </ul>
            </div>
          )}

          {det.stack && det.stack.length > 0 && (
            <div className="panel-section">
              <div className="label">Stack</div>
              <div className="panel-stack">
                {det.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {data.url && (
            <div className="panel-section">
              <a href={data.url} target="_blank" rel="noreferrer" className="panel-link">
                Visit project ↗
              </a>
            </div>
          )}
        </div>
      </aside>
    </>,
    document.body
  );
}

export default function Featured() {
  const [active, setActive] = useState<FeaturedProject | null>(null);
  const handleClose = useCallback(() => setActive(null), []);
  const D = PORTFOLIO;

  return (
    <section className="section" id="work">
      <div className="shell">
        <SectionHead
          label="§ 01 · Selected Work"
          kicker="Featured / 2022–25"
          title="Shipped products, live on-chain."
          blurb="Selected dApps, marketplaces and community work from the last few years across Ethereum, Hyperliquid, Polygon and L2s."
        />
        <div className="featured-grid">
          {D.featured.map((f, i) => {
            const cls = `feat ${layout[i] || "span-4"}`;
            const inner = (
              <>
                <div className="slot-wrap" style={f.imgBg ? { background: f.imgBg } : undefined}>
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="feat-img"
                    style={f.imgBg ? { objectFit: "contain", padding: "24px" } : undefined}
                  />
                </div>
                <span className="badge">{f.tag}</span>
                {f.url && !f.details && <span className="arrow">↗</span>}
                {f.details && <span className="arrow">→</span>}
                <div className="meta">
                  <span className="t">{f.title}</span>
                  <span className="r mono">
                    <span>{f.role}</span>
                    <span>{f.year}</span>
                  </span>
                </div>
              </>
            );

            if (f.details) {
              return (
                <button key={f.id} className={cls} onClick={() => setActive(f)}>
                  {inner}
                </button>
              );
            }
            if (f.url) {
              return (
                <a key={f.id} className={cls} href={f.url} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              );
            }
            return (
              <div key={f.id} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
      <FeaturedPanel proj={active} onClose={handleClose} />
    </section>
  );
}
