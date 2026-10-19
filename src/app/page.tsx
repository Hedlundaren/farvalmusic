import { About } from "@/components/About";
import { Atlas } from "@/components/Atlas";
import { Dates } from "@/components/Dates";
import { Ensemble } from "@/components/Ensemble";
import { Footer } from "@/components/Footer";
import { Hello } from "@/components/Hello";
import { Hero } from "@/components/Hero";
import { Listen } from "@/components/Listen";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Progress } from "@/components/Progress";

export default function Home() {
  return (
    <>
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Atlas />
        <Ensemble />
        <Listen />
        <Dates />
        <Hello />
      </main>
      <Footer />
    </>
  );
}
