import { PORTFOLIO } from "@/lib/data";
import SectionHead from "./SectionHead";

const glyphs = ["◐", "◑", "◒", "◓", "◔", "◕"];

export default function Stack() {
  const D = PORTFOLIO;
  return (
    <section className="section" id="stack">
      <div className="shell">
        <SectionHead
          label="§ 07 · Toolkit"
          kicker="Daily drivers"
          title="What I reach for."
          blurb="Stack I lean on across smart-contract and product work. Pragmatic over fashionable."
        />
        <div className="stack-grid">
          {D.stack.map((s, i) => (
            <div className="stack-cell" key={s.name}>
              <div className="k">
                <span className="kind">{s.kind}</span>
                <span className="glyph">{glyphs[i % glyphs.length]}</span>
              </div>
              <h4>{s.name}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="expertise" style={{ marginTop: 80 }}>
          {D.expertise.map((e) => (
            <div className="item" key={e.n}>
              <span className="n">{e.n} —</span>
              <h4>{e.title}</h4>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
