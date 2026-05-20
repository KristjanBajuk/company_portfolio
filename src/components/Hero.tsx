import Image from "next/image";
import { PORTFOLIO } from "@/lib/data";

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
            src="/imgs/portrait-main.jpg"
            alt="Kristjan Bajuk"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <figcaption>
            <span className="mono">⬢ Kristjan, Ljubljana · 2025</span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-foot">
        <p className="lede">
          Four years deep in Ethereum. Smart contracts through to production frontends. Tokenized real estate, lending protocols, NFT platforms, and a local
          community I helped build along the way.
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
