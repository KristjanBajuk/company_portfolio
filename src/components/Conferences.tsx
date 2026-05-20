"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO } from "@/lib/data";
import SectionHead from "./SectionHead";

const ROTS = [-2.1, 1.4, -0.7, 2.8, -1.5, 0.9, -2.6, 1.8, -0.4, 2.3, -1.9, 0.6, -2.4, 1.1, -0.8, 2.7, -1.3, 0.5, -2.9, 1.6];
function rot(i: number) { return ROTS[i % ROTS.length]; }

function PolaroidCard({ photo, i, onFocus }: { photo: string; i: number; onFocus: (p: string) => void }) {
  return (
    <button
      className="poly"
      style={{ "--r": `${rot(i)}deg` } as React.CSSProperties}
      onClick={() => onFocus(photo)}
    >
      <span className="poly-frame">
        <Image
          src={photo}
          alt=""
          fill
          sizes="(max-width: 700px) 220px, 280px"
          className="poly-img"
        />
      </span>
    </button>
  );
}

export default function Conferences() {
  const { confPhotos } = PORTFOLIO;
  const [focus, setFocus] = useState<string | null>(null);

  const rowA = confPhotos.filter((_, i) => i % 2 === 0);
  const rowB = confPhotos.filter((_, i) => i % 2 === 1);

  return (
    <section className="section conferences" id="conferences">
      <div className="shell">
        <SectionHead
          label="§ 05 · Field log"
          kicker="Postcards from the road"
          title="Conferences & meetups."
          blurb="From ETH·CC Paris to Devcon Bangkok and the Devconnect circuit — a running log of where this community has taken me."
        />
      </div>

      <div className="marquee" style={{ "--dur": "62s" } as React.CSSProperties}>
        <div className="track">
          {[...rowA, ...rowA].map((photo, i) => (
            <PolaroidCard key={`a-${i}`} photo={photo} i={i} onFocus={setFocus} />
          ))}
        </div>
      </div>

      <div className="marquee reverse" style={{ "--dur": "78s" } as React.CSSProperties}>
        <div className="track">
          {[...rowB, ...rowB].map((photo, i) => (
            <PolaroidCard key={`b-${i}`} photo={photo} i={i + 99} onFocus={setFocus} />
          ))}
        </div>
      </div>

      <div
        className={`focus-overlay ${focus ? "open" : ""}`}
        onClick={() => setFocus(null)}
      >
        {focus && (
          <div className="focus-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="focus-close"
              onClick={() => setFocus(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="focus-img">
              <Image src={focus} alt="" fill sizes="(max-width: 768px) calc(92vw - 48px), 572px" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}