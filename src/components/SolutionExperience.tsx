"use client";

import { useState } from "react";
import ConceptDiagram from "./ConceptDiagram";
import DomesticPainPoints from "./DomesticPainPoints";
import ComparisonMatrix from "./ComparisonMatrix";

import DomesticCTA from "./DomesticCTA";
import Services from "./Services";
import GlobalDataPipeline from "./GlobalDataPipeline";
import Strengths from "./Strengths";
import GlobalCTA from "./GlobalCTA";

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
              <Strengths />
              <DomesticCTA />
            </>
          )}

          {activeTab === "global" && (
            <>
              <GlobalDataPipeline />
              <Services activeTab={activeTab} />
              <ComparisonMatrix activeTab={activeTab} />
              <Strengths />
              <GlobalCTA />
            </>
          )}
        </div>
      )}
    </div>
  );
}
