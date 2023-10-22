import Compare from "./components/Compare";
import Hero from "./components/Hero";
import Join from "./components/Join";
import MeasureImpact from "./components/MeasureImpact";
import StayActive from "./components/StayActive";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <MeasureImpact />
      <StayActive />
      <Compare />
      <Testimonials />
      <Join />
    </main>
  )
}
