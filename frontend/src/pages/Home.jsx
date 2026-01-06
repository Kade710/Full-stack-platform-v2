import HealthCard from "../components/HealthCard.jsx";
import HitCounterCard from "../components/HitCounterCard.jsx";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Full-Stack Platform V2</h1>
          <p className="subtle">
            Dockerized app: Vite/React + Node.js + Postgres + Redis behind Nginx.
          </p>
        </div>
        <div className="subtle">Nginx :8080</div>
      </header>

      <div className="grid">
        <HealthCard />
        <HitCounterCard />
      </div>

      <p className="subtle" style={{ marginTop: 18 }}>
        Tip: <span className="mono">curl http://localhost:8080/api</span> and{" "}
        <span className="mono">/api/health</span>
      </p>
    </div>
  );
}
