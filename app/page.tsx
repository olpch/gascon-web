import Hero from "./components/hero/hero";
import Philosophy from "./components/sections/philosophy";
import FeaturedProjects from "./components/sections/featured-projects";
import Studio from "./components/sections/studio";
import Services from "./components/sections/services";
import Stats from "./components/sections/stats";
import CTA from "./components/sections/cta";
import Footer from "./components/layout/footer";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <Studio />
      <Services />
      <Stats />
      <CTA />
      <footer />
    </>
  );
}