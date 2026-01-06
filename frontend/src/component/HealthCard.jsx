import { useEffect, useState } from "react";
import StatusBadge from "./StatusBadge.jsx";

export default function HealthCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false, db: false, redis: false }));
  }, []);

  const ok = data?.ok === true;

  return (
    <section className="card half">
      <div className="cardTitle">
        <strong>Health</strong>
        <StatusBadge ok={ok} label="Overall health" />
      </div>

      {!data ? (
        <p className="subtle">Checking…</p>
      ) : (
        <div className="kv">
          <div>ok</div><div className="mono">{String(data.ok)}</div>
          <div>db</div><div className="mono">{String(data.db)}</div>
          <div>redis</div><div className="mono">{String(data.redis)}</div>
        </div>
      )}
    </section>
  );
}
