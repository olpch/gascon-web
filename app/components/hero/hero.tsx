import Navbar from "../layout/navbar";
import Loader from "../effects/loader";
import HeroVideo from "./hero-video";
import HeroContent from "./hero-content";
import ScrollIndicator from "./scroll-indicator";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
        <HeroVideo />
        <div className="relative z-20 mx-auto flex w-full max-w-[1600px] px-8">
          <HeroContent />
        </div>
        <ScrollIndicator />
      </section>
    </>
  );
}