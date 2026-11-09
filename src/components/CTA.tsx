import Image from "next/image";
import { PORTFOLIO } from "@/lib/data";
import portraitBw from "../../public/imgs/portrait-bw.jpg";

export default function CTA() {
  const D = PORTFOLIO;
  return (
    <section className="cta shell" id="contact">
      <div className="cta-grid">
        <figure className="cta-portrait">
          <Image
            src={portraitBw}
            placeholder="blur"
            alt="Kristjan Bajuk"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: "cover" }}
          />
          <figcaption className="mono">⬢ K. Bajuk · b/w · MMXXIV</figcaption>
        </figure>
        <div className="cta-text">
          <span className="mono eyebrow">Let&apos;s work together</span>
          <h2 style={{ marginTop: 24 }}>
            Building a <em>dApp</em>?
          </h2>
          <p className="cta-blurb">
            I build the whole thing: Next.js frontend, indexer and smart
            contracts. Open to freelance engagements, contract roles and
            consulting in web3. Based in Ljubljana, working with teams
            worldwide.
          </p>
          <div className="cta-actions">
            <a className="btn gold" href={D.socials[3].url}>
              Schedule a call ↗
            </a>
            <a
              className="btn"
              href={D.socials[0].url}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn"
              href={D.socials[1].url}
              target="_blank"
              rel="noreferrer"
            >
              Twitter / X
            </a>
            <a
                className="btn"
                href={D.socials[2].url}
                target="_blank"
                rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
