import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { industryData } from '@/config/industryData';

import { IndustryOverview } from './IndustryOverview';
import { WorkflowVisualization } from './WorkflowVisualization';
import { TraditionalVsLoCoML } from './TraditionalVsLoCoML';
import { ChallengeGrid } from './ChallengeGrid';
import { SolutionGrid } from './SolutionGrid';
import { ExploreAnotherIndustry } from './ExploreAnotherIndustry';

interface DynamicIndustryContentProps {
  selectedIndustry: string;
  onIndustrySelect: (id: string) => void;
}

// A simple helper component to detect when the new DOM tree has actually mounted
function ContentMountTrigger({ onMount }: { onMount: () => void }) {
  useEffect(() => {
    onMount();
  }, [onMount]);
  return null;
}

export function DynamicIndustryContent({ selectedIndustry, onIndustrySelect }: DynamicIndustryContentProps) {
  const data = industryData[selectedIndustry];
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPendingFor, setScrollPendingFor] = useState<string | null>(null);

  const handleBottomSelect = (id: string) => {
    if (id === selectedIndustry) return;
    setScrollPendingFor(id);
    onIndustrySelect(id);
  };

  const handleContentMount = () => {
    if (scrollPendingFor === selectedIndustry) {
      // Small delay to ensure browser paints the new DOM elements correctly before measuring
      setTimeout(() => {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const NAVBAR_HEIGHT = 80;
            const SPACING = 32;
            const elementTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
            const targetPosition = elementTop - NAVBAR_HEIGHT - SPACING;
            
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
          }
          setScrollPendingFor(null);
        });
      }, 50);
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
          <ContentMountTrigger onMount={handleContentMount} />
          
          <IndustryOverview data={data} />
          <WorkflowVisualization data={data} />
          <TraditionalVsLoCoML data={data} />
          <ChallengeGrid data={data} />
          <SolutionGrid data={data} />
        </motion.div>
      </AnimatePresence>

      <div className="mt-24 lg:mt-32">
        <ExploreAnotherIndustry
          activeIndustry={selectedIndustry}
          onIndustrySelect={handleBottomSelect}
        />
      </div>
    </div>
  );
}
