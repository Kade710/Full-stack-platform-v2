export default function StatusBadge({ ok, label }) {
  const text = ok ? "OK" : "DOWN";
  const bg = ok ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)";
  const border = ok ? "rgba(34,197,94,0.35)" : "rgba(239,68,68,0.35)";

  return (
    <span
      title={label}
      style={{
        padding: "4px 10px",
        borderRadius: 999,
        border: `1px solid ${border}`,
        background: bg,
        fontSize: 12
      }}
    >
      {text}
    </span>
  );
}
