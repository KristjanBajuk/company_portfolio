import Image from "next/image";
import { PORTFOLIO } from "@/lib/data";
import portraitMain from "../../public/imgs/portrait-main.jpg";

export default function Hero() {
  const D = PORTFOLIO;
  return (
    <header className="hero shell">
      <div className="hero-meta">
        <div className="cell status">
          <span className="mono k eyebrow">Status</span>
          <span className="v">{D.status}</span>
        </div>
        <div className="cell">
          <span className="mono k eyebrow">Based in</span>
          <span className="v">{D.location}</span>
        </div>
        <div className="cell">
          <span className="mono k eyebrow">Role</span>
          <span className="v">Senior Web3 Engineer</span>
        </div>
        <div className="cell">
          <span className="mono k eyebrow">ENS</span>
          <span className="v">{D.handle}</span>
        </div>
      </div>

      <div className="hero-main">
        <h1 className="display hero-title">
          <span className="l1">Kristjan</span>
          <span className="l2">
            <em>Bajuk</em>.
          </span>
        </h1>
        <figure className="hero-portrait">
          <Image
            src={portraitMain}
            alt="Kristjan Bajuk"
            fill
            preload
            placeholder="blur"
            // Landscape photo cropped into a portrait box (object-fit: cover),
            // so the rendered width is ~1.9x the box width.
            sizes="(max-width: 800px) 520px, 800px"
            style={{ objectFit: "cover" }}
          />
          <figcaption>
            <span className="mono">⬢ Kristjan, Ljubljana · 2025</span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-foot">
        <p className="lede">
          Four years on Ethereum, end to end - from smart contract to frontend. I&#39;ve shipped tokenized real estate, lending protocols, and NFT platforms. Along the way, I built a local community that's still going.
        </p>
        <div>
          <span className="mono eyebrow">
            ↳ A decade shipping for the web. Four years on-chain.
          </span>
          <div className="arrow">Scroll · Featured Work ↓</div>
        </div>
      </div>
    </header>
  );
}
