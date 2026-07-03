import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industryData } from '@/config/industryData';

import { IndustryOverview } from './IndustryOverview';
import { WorkflowVisualization } from './WorkflowVisualization';
import { TraditionalVsLoCoML } from './TraditionalVsLoCoML';
import { ChallengeGrid } from './ChallengeGrid';
import { SolutionGrid } from './SolutionGrid';
import { ImpactMetrics } from './ImpactMetrics';
import { ExploreAnotherIndustry } from './ExploreAnotherIndustry';

interface DynamicIndustryContentProps {
  selectedIndustry: string;
  onIndustrySelect: (id: string) => void;
}

export function DynamicIndustryContent({ selectedIndustry, onIndustrySelect }: DynamicIndustryContentProps) {
  const data = industryData[selectedIndustry];
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBottomSelect = (id: string) => {
    onIndustrySelect(id);
    if (containerRef.current) {
      const topOffset = containerRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  if (!data) return null;

  return (
    <div ref={containerRef} className="relative w-full bg-slate-50 min-h-screen pb-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndustry}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex flex-col gap-24 lg:gap-32 pt-16 lg:pt-24"
        >
          <IndustryOverview data={data} />
          <WorkflowVisualization data={data} />
          <TraditionalVsLoCoML data={data} />
          <ChallengeGrid data={data} />
          <SolutionGrid data={data} />
          <ImpactMetrics data={data} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-32">
        <ExploreAnotherIndustry
          activeIndustry={selectedIndustry}
          onIndustrySelect={handleBottomSelect}
        />
      </div>
    </div>
  );
}
