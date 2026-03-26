import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import BentoGrid from "./landing/BentoGrid";
import Footer from "./landing/Footer";

export default function LandingScreen({ dispatch, inputText }) {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 min-h-screen overflow-x-hidden dark">
      <Navbar />

      <main className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] atmospheric-bloom pointer-events-none -z-10"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <Hero dispatch={dispatch} inputText={inputText} />

        <BentoGrid />
      </main>

      <Footer />
    </div>
  );
}
