import { PlatformHero } from '@/components/platform/PlatformHero';
import { PlatformOverview } from '@/components/platform/PlatformOverview';
import { PlatformIntelligenceSection } from '@/components/platform/PlatformIntelligenceSection';
import { PlatformExperienceSection } from '@/components/platform/PlatformExperienceSection';
import { PlatformHighlights } from '@/components/platform/PlatformHighlights';

export function Platform() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformIntelligenceSection />
      <PlatformExperienceSection />
      <PlatformHighlights />
    </>
  );
}
