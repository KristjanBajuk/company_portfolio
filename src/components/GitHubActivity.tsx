"use client";

import dynamic from "next/dynamic";
import SectionHead from "./SectionHead";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  { ssr: false }
);

export default function GitHubActivity() {
  return (
    <section className="section" id="github">
      <div className="shell">
        <SectionHead
          label="§ 01.5 · Activity"
          title="GitHub Contributions"
          blurb="Live contribution history — updated daily."
        />
        <div style={{ overflowX: "auto", display: "flex", justifyContent: "center", paddingBottom: "0.5rem" }}>
          <GitHubCalendar
            username="KristjanBajuk"
            colorScheme="dark"
            style={{ fontFamily: "inherit" }}
          />
        </div>
      </div>
    </section>
  );
}