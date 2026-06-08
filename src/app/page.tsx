import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionExperience from "@/components/SolutionExperience";
import Strengths from "@/components/Strengths";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolutionExperience />
        <Strengths />
        <Insights />
      </main>
      <Footer />
    </>
  );
}

