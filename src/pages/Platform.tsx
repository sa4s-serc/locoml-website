import { PlatformHero } from '@/components/platform/PlatformHero';
import { PlatformOverview } from '@/components/platform/PlatformOverview';
import { PlatformBlueprint } from '@/components/platform/PlatformBlueprint';
import { PlatformHighlights } from '@/components/platform/PlatformHighlights';

export function Platform() {
  return (
    <>
      <PlatformHero />
      <PlatformOverview />
      <PlatformBlueprint />
      <PlatformHighlights />
    </>
  );
}
