import Hero from "@/components/sections/Hero";
import SolutionPillars from "@/components/sections/SolutionPillars";
import ScreenshotCarousel from "@/components/sections/ScreenshotCarousel";
import SocialProof from "@/components/sections/SocialProof";
import CtaForm from "@/components/sections/CtaForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionPillars />
      <ScreenshotCarousel />
      <SocialProof />
      <CtaForm />
    </main>
  );
}
