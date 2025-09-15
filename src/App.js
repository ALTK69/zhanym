import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(25 * 60); // 25 минут
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => setTime(t => t - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "Arial, sans-serif" }}>
      <h1>Zhanym Pomodoro ❤️</h1>
      <div style={{ fontSize: "4rem", margin: "20px 0", fontFamily: "monospace" }}>{formatTime(time)}</div>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <button onClick={() => setRunning(r => !r)} style={{ padding: "10px 18px" }}>
          {running ? "⏸ Пауза" : "▶️ Старт"}
        </button>
        <button onClick={() => { setRunning(false); setTime(25 * 60); }} style={{ padding: "10px 18px" }}>
          🔄 Сброс
        </button>
      </div>
      <p style={{ marginTop: 20, color: "#666" }}>25 мин фокус / 5 мин перерыв — можно менять в коде</p>
    </div>
  );
}

export default App;

