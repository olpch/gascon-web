import Hero from "./components/hero/hero";
import Philosophy from "./components/sections/philosophy";
import FeaturedProjects from "./components/sections/featured-projects";
import Footer from "./components/layout/footer";
export default function HomePage() {
  return (
    <div id="main-container">
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}