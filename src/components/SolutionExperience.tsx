"use client";

import { useState } from "react";
import ConceptDiagram from "./ConceptDiagram";
import DomesticPainPoints from "./DomesticPainPoints";
import ComparisonMatrix from "./ComparisonMatrix";
import CaseStudies from "./CaseStudies";
import LuareApproach from "./LuareApproach";
import DomesticCTA from "./DomesticCTA";
import Services from "./Services"; // Keep for global if needed

export type TabType = "domestic" | "global";

export default function SolutionExperience() {
  const [activeTab, setActiveTab] = useState<TabType>("domestic");

  return (
    <div className="flex flex-col">
      <ConceptDiagram activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "domestic" && (
        <>
          <DomesticPainPoints />
          <ComparisonMatrix activeTab={activeTab} />
          <CaseStudies />
          <LuareApproach />
          <DomesticCTA />
        </>
      )}

      {/* For Global Tab, we only render ComparisonMatrix and Services to preserve its original flow. */}
      {activeTab === "global" && (
        <>
          <Services activeTab={activeTab} />
          <ComparisonMatrix activeTab={activeTab} />
        </>
      )}
    </div>
  );
}
