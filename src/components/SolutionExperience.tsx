"use client";

import { useState } from "react";
import ConceptDiagram from "./ConceptDiagram";
import Services from "./Services";
import ComparisonMatrix from "./ComparisonMatrix";

export type TabType = "domestic" | "global";

export default function SolutionExperience() {
  const [activeTab, setActiveTab] = useState<TabType>("domestic");

  return (
    <div className="flex flex-col">
      <ConceptDiagram activeTab={activeTab} setActiveTab={setActiveTab} />
      <Services activeTab={activeTab} />
      <ComparisonMatrix activeTab={activeTab} />
    </div>
  );
}
