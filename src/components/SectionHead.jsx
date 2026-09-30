export default function SectionHead({ no, eyebrow, title, lede }) {
  return (
    <div className="sec-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">
        {no && <span className="sec-no">{no} — </span>}
        {title}
      </h2>
      {lede && <p className="lede">{lede}</p>}
      <hr className="rule-double" />
    </div>
  );
}
