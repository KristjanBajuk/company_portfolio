interface SectionHeadProps {
  label: string;
  kicker?: string;
  title: string;
  blurb?: string;
}

export default function SectionHead({ label, kicker, title, blurb }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div className="label mono">{label}</div>
      <div className="heading">
        {kicker && <span className="mono eyebrow">{kicker}</span>}
        <h2 className="h2">{title}</h2>
        {blurb && <p>{blurb}</p>}
      </div>
    </div>
  );
}
