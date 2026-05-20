"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <nav className="nav">
      <div className="nav-brand">
        <b>KB</b>
        <span className="slash">/</span>Makoreactor
      </div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#ethsi">ETH·SI</a>
        <a href="#conferences">Field log</a>
        <a href="#podcast">Podcast</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-clock">LJU · {time}</div>
    </nav>
  );
}
