"use client";

import { useState } from "react";
import ConceptDiagram from "./ConceptDiagram";
import DomesticPainPoints from "./DomesticPainPoints";
import ComparisonMatrix from "./ComparisonMatrix";
import CaseStudies from "./CaseStudies";
import LuareApproach from "./LuareApproach";
import DomesticCTA from "./DomesticCTA";
import Services from "./Services";
import GlobalDataPipeline from "./GlobalDataPipeline";

export type TabType = "domestic" | "global" | null;

export default function SolutionExperience() {
  const [activeTab, setActiveTab] = useState<TabType>(null);

  return (
    <div className="flex flex-col">
      <ConceptDiagram activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab !== null && (
        <div id="solution-content" className="scroll-mt-20">
          {activeTab === "domestic" && (
            <>
              <DomesticPainPoints />
              <ComparisonMatrix activeTab={activeTab} />
              <CaseStudies />
              <LuareApproach />
              <DomesticCTA />
            </>
          )}

          {activeTab === "global" && (
            <>
              <GlobalDataPipeline />
              <Services activeTab={activeTab} />
              <ComparisonMatrix activeTab={activeTab} />
            </>
          )}
        </div>
      )}
    </div>
  );
}
