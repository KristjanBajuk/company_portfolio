import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import GitHubActivity from "@/components/GitHubActivity";
import Experience from "@/components/Experience";
import Motivation from "@/components/Motivation";
import EthSlovenia from "@/components/EthSlovenia";
import Conferences from "@/components/Conferences";
import Podcast from "@/components/Podcast";
import Stack from "@/components/Stack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Featured />
        <GitHubActivity />
        <Experience />
        <Motivation />
        <EthSlovenia />
        <Conferences />
        <Podcast />
        <Stack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
