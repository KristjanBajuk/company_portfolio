"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { PORTFOLIO, Experience as ExperienceType } from "@/lib/data";
import SectionHead from "./SectionHead";

function ExperienceCard({
  exp,
  onOpen,
}: {
  exp: ExperienceType;
  onOpen: (e: ExperienceType) => void;
}) {
  return (
    <button className="exp-card" onClick={() => onOpen(exp)}>
      <div className="exp-row1">
        <span className="exp-company">{exp.company}</span>
        <span className="exp-period">{exp.period}</span>
      </div>
      <div className="exp-role">{exp.role}</div>
      <p className="exp-summary">{exp.summary}</p>
      <ul className="exp-highlights">
        {exp.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="exp-foot">
        <div className="exp-stack">
          {(exp.stack || []).slice(0, 4).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <span className="exp-cta">View details</span>
      </div>
    </button>
  );
}

function ExperiencePanel({
  exp,
  onClose,
}: {
  exp: ExperienceType | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (exp) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [exp, onClose]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const open = !!exp;
  const data = exp || ({} as Partial<ExperienceType>);
  const det = data.details || { overview: "", responsibilities: [] };

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={`panel-overlay ${open ? "open" : ""}`}
        onClick={onClose}
      />
      <aside className={`panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="panel-head">
          <span className="mono">Case · {data.company || ""}</span>
          <button
            className="panel-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="panel-body">
          <span className="mono" style={{ color: "var(--gold)" }}>
            {data.company}
          </span>
          <h3>{data.role}</h3>
          <div className="panel-meta">
            <span className="gold">{data.period}</span>
            <span>· {data.location}</span>
          </div>

          {det.overview && (
            <div className="panel-section">
              <div className="label">Overview</div>
              <p>{det.overview}</p>
            </div>
          )}

          {det.responsibilities && (
            <div className="panel-section">
              <div className="label">What I did</div>
              <ul>
                {det.responsibilities.map((r, i) => (
                  <li key={i}>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {det.impact && (
            <div className="panel-section">
              <div className="label">Impact</div>
              <ul>
                {det.impact.map((r, i) => (
                  <li key={i}>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.stack && (
            <div className="panel-section">
              <div className="label">Stack</div>
              <div className="panel-stack">
                {data.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>,
    document.body
  );
}

export default function Experience() {
  const [active, setActive] = useState<ExperienceType | null>(null);
  const handleClose = useCallback(() => setActive(null), []);
  const D = PORTFOLIO;

  return (
    <section className="section" id="experience">
      <div className="shell">
        <SectionHead
          label="§ 02 · Experience"
          kicker="2012 — Present"
          title="Where I've worked and what I shipped there."
          blurb="Each card surfaces the highlights at a glance. Open one for the full story — what I owned, what I built, and the impact."
        />
        <div className="exp-grid">
          {D.experiences.map((e) => (
            <ExperienceCard key={e.id} exp={e} onOpen={setActive} />
          ))}
        </div>
      </div>
      <ExperiencePanel exp={active} onClose={handleClose} />
    </section>
  );
}
