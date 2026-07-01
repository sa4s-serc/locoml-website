import { PlatformHero } from '@/components/platform/PlatformHero';
import { PlatformOverview } from '@/components/platform/PlatformOverview';
import { PlatformWorkflowSection } from '@/components/platform/PlatformWorkflowSection';
import { PlatformHighlights } from '@/components/platform/PlatformHighlights';

export function Platform() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformWorkflowSection />
      <PlatformHighlights />
    </>
  );
}
