import { useEffect, useState } from "react";

export default function HitCounterCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ error: true }));
  }, []);

  return (
    <section className="card half">
      <div className="cardTitle">
        <strong>Hit Counter</strong>
        <span className="subtle">GET /api</span>
      </div>

      {!data ? (
        <p className="subtle">Loading…</p>
      ) : data.error ? (
        <p>Failed to load. Is the backend up?</p>
      ) : (
        <>
          <p style={{ marginTop: 0, marginBottom: 10 }}>
            Total hits: <span className="mono">{data.hits ?? data.count ?? "?"}</span>
          </p>
          <pre className="mono">{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </section>
  );
}
