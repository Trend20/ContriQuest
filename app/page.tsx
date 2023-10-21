import Compare from "./components/Compare";
import Hero from "./components/Hero";
import MeasureImpact from "./components/MeasureImpact";
import Process from "./components/Process";
import Showcase from "./components/Showcase";
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
    </main>
  )
}
