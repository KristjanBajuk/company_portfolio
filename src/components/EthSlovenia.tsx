"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PORTFOLIO } from "@/lib/data";

const pattern = ["tall", "", "", "wide", "", "", "", "tall", "", "", "wide", ""];

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt="ETH Slovenia event photo"
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>,
    document.body
  );
}

export default function EthSlovenia() {
  const e = PORTFOLIO.ethSlovenia;
  const [active, setActive] = useState<string | null>(null);
  const handleClose = useCallback(() => setActive(null), []);

  return (
    <section className="section" id="ethsi">
      <div className="shell">
        <div className="section-head">
          <div className="label mono">§ 04 · Community</div>
          <div className="heading">
            <span className="mono eyebrow">Spotlight</span>
            <div className="ethsi-title">
              <div>
                <h2 className="h2">Ethereum Slovenia</h2>
              </div>
              <Image
                src="/imgs/ethslo_symbol_vector.svg"
                alt="ETH Slovenia symbol"
                width={36}
                height={57}
                className="ethsi-title-symbol"
              />
            </div>
            <p>Bringing the Slovenian builder scene closer to the wider Ethereum ecosystem.</p>
          </div>
        </div>
        <div className="ethsi">
          <div className="ethsi-left">
            <span className="badge">⬢ ETH · SI — Core team</span>
            <h3>
              A local hub for <em>builders, researchers</em> and curious humans.
            </h3>
            <p>{e.body}</p>
            <div className="ethsi-pillars">
              {e.pillars.map((p, i) => (
                <div className="pillar" key={p.title}>
                  <span className="num">0{i + 1}</span>
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ethsi-gallery">
            {e.galleryImgs.map((src, i) => (
              <button
                className={`g ${pattern[i] || ""}`}
                key={src}
                onClick={() => setActive(src)}
                aria-label={`View photo ${i + 1}`}
                style={{ cursor: "zoom-in" }}
              >
                <Image
                  src={src}
                  alt={`ETH Slovenia event photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="gallery-img"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {active && <Lightbox src={active} onClose={handleClose} />}
    </section>
  );
}