import Navbar from "../layout/navbar";
import Loader from "../effects/loader";
import Cursor from "../effects/cursor";
import HeroVideo from "./hero-video";
import HeroContent from "./hero-content";
import ScrollIndicator from "./scroll-indicator";

export default function Hero() {
  return (
    <>
      <Loader />

      <Cursor />

      <section className="relative flex min-h-screen items-center overflow-hidden">

        <Navbar />

        <HeroVideo />

        <div className="relative z-20 mx-auto flex w-full max-w-[1600px] px-8">

          <HeroContent />

        </div>

        <ScrollIndicator />

      </section>
    </>
  );
}