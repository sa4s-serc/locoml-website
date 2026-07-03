import { ResearchHero } from '@/components/sections/research/ResearchHero';
import { FeaturedPublication } from '@/components/sections/research/FeaturedPublication';
// import { ResearchSection } from '@/components/sections/research/ResearchSection';

export function Research() {
  return (
    <>
      <ResearchHero />
      <FeaturedPublication />
      {/* 
        Future Research sections (Contributions, Timeline, Citation, etc.)
        will be added here, below the Featured Publication. 
      */}
    </>
  );
}
