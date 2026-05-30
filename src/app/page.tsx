import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConceptDiagram from "@/components/ConceptDiagram";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ConceptDiagram />
        <Services />
        <ComparisonMatrix />
        <Strengths />
        <Insights />
      </main>
      <Footer />
    </>
  );
}

