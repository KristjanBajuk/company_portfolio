import Image from "next/image";
import { PORTFOLIO } from "@/lib/data";

const pattern = ["tall", "", "", "wide", "", "", "", "tall", "", "", "wide", ""];

export default function EthSlovenia() {
  const e = PORTFOLIO.ethSlovenia;
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
              <div className={`g ${pattern[i] || ""}`} key={src}>
                <Image
                  src={src}
                  alt={`ETH Slovenia event photo ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
