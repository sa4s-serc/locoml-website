import { PlatformHero } from '@/components/platform/PlatformHero';
import { PlatformOverview } from '@/components/platform/PlatformOverview';
import { PlatformIntelligenceSection } from '@/components/platform/PlatformIntelligenceSection';
import { PlatformExperienceSection } from '@/components/platform/PlatformExperienceSection';
import { PlatformOutroSection } from '@/components/platform/PlatformOutroSection';

export function Platform() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformIntelligenceSection />
      <PlatformExperienceSection />
      <PlatformOutroSection />
    </>
  );
}
