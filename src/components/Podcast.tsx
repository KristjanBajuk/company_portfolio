"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";

const videoId = "7MgjjX9AOKU";
const thumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
const topics = [
  "How I entered the world of Web3 and found my place at Blocksquare.",
  "Insights from ETH Slovenia, DevConnect Istanbul → Argentina, and the Ethereum community.",
  "Behind the scenes of Blocksquare's engineering culture and tech development.",
  "Account Abstraction — why simplifying wallet creation is key to mass adoption.",
  "The future of real-estate tokenization and user-friendly Web3 onboarding.",
];

export default function Podcast() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section podcast" id="podcast">
      <div className="shell">
        <SectionHead
          label="§ 06 · On the record"
          kicker="Team Spotlight · 2024"
          title="In conversation with Denis Petrovčič."
          blurb="A long-form sit-down with the Blocksquare CEO — my journey into Web3, the engineering culture inside Blocksquare, and what it takes to grow Slovenia's Ethereum scene."
        />

        <div className="pod">
          <div className="pod-player">
            {playing ? (
              <iframe
                className="pod-iframe"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Team Spotlight — Kristjan Bajuk × Denis Petrovčič"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                className="pod-poster"
                onClick={() => setPlaying(true)}
                aria-label="Play video"
              >
                <Image
                  src={thumb}
                  alt="Podcast thumbnail"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  unoptimized
                />
                <span className="pod-scrim" />
                <span className="pod-play">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="pod-badge mono">▶ Watch on YouTube · 48 min</span>
                <span className="pod-title">
                  <span className="mono dim">Team Spotlight · Blocksquare</span>
                  <span className="t">Kristjan Bajuk × Denis Petrovčič</span>
                </span>
              </button>
            )}
          </div>

          <aside className="pod-side">
            <div className="pod-meta">
              <div className="row">
                <span className="k mono">Host</span>
                <span className="v">Denis Petrovčič</span>
              </div>
              <div className="row">
                <span className="k mono">Format</span>
                <span className="v">Long-form interview</span>
              </div>
              <div className="row">
                <span className="k mono">Published</span>
                <span className="v">Blocksquare · 2024</span>
              </div>
              <div className="row">
                <span className="k mono">Platform</span>
                <span className="v">
                  <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube ↗
                  </a>
                </span>
              </div>
            </div>

            <div className="pod-topics">
              <span className="mono eyebrow">In this episode</span>
              <ol>
                {topics.map((t, i) => (
                  <li key={i}>
                    <span className="num mono">0{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
