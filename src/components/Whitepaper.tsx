import SectionHead from "./SectionHead";

const paper = {
  title: "Oceanpoint Whitepaper",
  subtitle: "A Liquidity Engine for Tokenized Real Estate",
  publisher: "Blocksquare",
  published: "April 2025",
  authors: ["Denis Petrovčič", "Daniel Kaines"],
  contributors: ["Simon Kruise", "David Šenica", "Viktor Brajak", "Marko Majetić", "Kristjan Bajuk"],
  pages: 47,
  size: "1.4 MB",
  file: "/Blocksquare-Oceanpoint_Whitepaper.pdf",
};
const me = "Kristjan Bajuk";
const topics: string[] = [
  "The liquidity problem. Every property has its own token and its own small market, so spreads are wide and exits are slow.",
  "POINT, an aggregator token minted by depositing stablecoins and, later, property tokens.",
  "A four-phase rollout that starts with stablecoin swaps and ends with property token lending.",
  "The contract architecture: the POINT token, the protocol contract and the router.",
  "Risk management, with dynamic rates, overcollateralization and stress-test simulations.",
];

export default function Whitepaper() {
  return (
    <section className="section" id="whitepaper">
      <div className="shell">
        <SectionHead
          label="§ 07 · On paper"
          kicker="Whitepaper · April 2025"
          title="A liquidity engine for tokenized real estate."
          blurb="Blocksquare's paper on Oceanpoint, its DeFi protocol for tokenized real estate, and on POINT, a single token minted against stablecoins and property tokens. I contributed to it as a member of Blocksquare's engineering team."
        />

        <div className="paper">
          <a className="paper-cover" href={paper.file} target="_blank" rel="noreferrer">
            <span className="mono">Blocksquare × Oceanpoint</span>
            <span className="paper-body">
              <span className="paper-title">{paper.title}</span>
              <span className="paper-subtitle">{paper.subtitle}</span>
              <span className="paper-rule" />
              <span className="paper-credit">
                <span className="mono">Authors</span>
                <span>{paper.authors.join(", ")}</span>
              </span>
              <span className="paper-credit">
                <span className="mono">Contributors</span>
                <span>
                  {paper.contributors.map((name, i) => (
                    <span key={name}>
                      {i > 0 && ", "}
                      {name === me ? <b className="paper-me">{name}</b> : name}
                    </span>
                  ))}
                </span>
              </span>
              <span className="paper-date">{paper.published}</span>
            </span>
            <span className="paper-foot mono">
              <span>PDF · {paper.pages} pages · {paper.size}</span>
              <span>Open ↗</span>
            </span>
          </a>

          <aside className="paper-side">
            <div className="pod-meta">
              <div className="row">
                <span className="k mono">Publisher</span>
                <span className="v">{paper.publisher}</span>
              </div>
              <div className="row">
                <span className="k mono">Published</span>
                <span className="v">{paper.published}</span>
              </div>
              <div className="row">
                <span className="k mono">Authors</span>
                <span className="v">{paper.authors.join(", ")}</span>
              </div>
              <div className="row">
                <span className="k mono">My role</span>
                <span className="v">Contributor</span>
              </div>
              <div className="row">
                <span className="k mono">Length</span>
                <span className="v">{paper.pages} pages</span>
              </div>
            </div>

            <div className="pod-topics">
              <span className="mono eyebrow">What it covers</span>
              <ol>
                {topics.map((t, i) => (
                  <li key={i}>
                    <span className="num mono">0{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="paper-actions">
              <a className="btn gold" href={paper.file} download>
                Download PDF ↓
              </a>
              <a className="btn" href={paper.file} target="_blank" rel="noreferrer">
                Read in browser ↗
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
