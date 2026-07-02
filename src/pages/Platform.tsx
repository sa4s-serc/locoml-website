import { PlatformHero } from '@/components/platform/PlatformHero';
import { PlatformOverview } from '@/components/platform/PlatformOverview';
import { PlatformIntelligenceSection } from '@/components/platform/PlatformIntelligenceSection';
import { AutonomousModulesSection } from '@/components/platform/AutonomousModulesSection';
import { PlatformHighlights } from '@/components/platform/PlatformHighlights';

export function Platform() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformIntelligenceSection />
      <AutonomousModulesSection />
      <PlatformHighlights />
    </>
  );
}
