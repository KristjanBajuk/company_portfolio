"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";

export default function Motivation() {
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imagesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in-view"); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section motivation" id="motivation">
      <div className="shell">
        <SectionHead
          label="§ 03 · Manifesto"
          kicker="Why I'm here"
          title="Motivation."
          blurb="A personal note on what pulled me into this industry — and what keeps me building."
        />

        <div className="moti">
          <div className="moti-images" ref={imagesRef}>
            <figure className="moti-image">
              <Image
                src="/imgs/sunset-summit.jpg"
                alt="Kristjan on a summit, MetaMask hoodie, sunrise."
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
              <figcaption>
                <span className="mono">↳ Triglav · sunrise · 2864 m</span>
                <span className="mono dim">A decentralized future, viewed from above.</span>
              </figcaption>
            </figure>
            <figure className="moti-image">
              <Image
                src="/imgs/cypherpunk.jpg"
                alt="Cypherpunk"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
            </figure>
          </div>

          <div className="moti-text">
            <p className="moti-lede">
              <span className="dropcap">E</span>ntering the blockchain industry
              was a natural choice for me because it embodies the values I hold
              dear. Transparency, censorship resistance, financial freedom, and
              trust are not just buzzwords but core principles that guide this
              revolutionary technology. These ideals resonate deeply with my
              belief in empowering individuals and creating a fairer, more
              equitable world.
            </p>

            <p>
              The current systems have long taken advantage of people,
              restricting freedom and limiting opportunities. In the face of
              this, the blockchain industry stands as a powerful resistance,
              challenging the status quo and paving the way for a more just
              society. It&apos;s about reclaiming control from governing powers
              and returning it to the people, where it rightfully belongs.
            </p>

            <blockquote className="moti-pull">
              <span className="mark">&ldquo;</span>
              Reclaiming control from governing powers and returning it to the
              people, <em>where it rightfully belongs.</em>
            </blockquote>

            <p>
              This vision drives my passion for blockchain technology. A
              commitment to pushing the industry forward, breaking down
              barriers, and helping build a future where everyone has the power
              to shape their own destiny.
            </p>

            <div className="moti-sign">
              <div className="sig-line"></div>
              <div className="sig-block">
                <span className="mono">Signed,</span>
                <span className="sig-name">Kristjan Bajuk</span>
                <span className="mono dim">makoreactor.eth · Ljubljana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
