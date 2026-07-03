import { AboutHero } from '@/components/sections/about/AboutHero';
import { ResearchFoundation } from '@/components/sections/about/ResearchFoundation';
import { TeamSection } from '@/components/sections/about/TeamSection';

export function About() {
  return (
    <>
      <AboutHero />
      <TeamSection />
      <ResearchFoundation />
    </>
  );
}
