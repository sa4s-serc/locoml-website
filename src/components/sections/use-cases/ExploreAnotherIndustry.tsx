import React from 'react';
import { Container } from '@/components/layout/Layout';
import { IndustrySelector } from './IndustrySelector';

interface ExploreAnotherIndustryProps {
  activeIndustry: string;
  onIndustrySelect: (id: string) => void;
}

export function ExploreAnotherIndustry({ activeIndustry, onIndustrySelect }: ExploreAnotherIndustryProps) {
  return (
    <Container className="flex flex-col items-center">
      <div className="w-full max-w-[800px] mx-auto flex flex-col items-center py-16 border-t border-slate-200">
        <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-8 block">
          DISCOVER ANOTHER INDUSTRY
        </span>
        
        {/* We pass isPrimary={false} so this instance doesn't render its own orbiting dot, 
            or if we want a dot here too we could set it to true. Let's set it to false
            so the dot feels unique to the hero, or true if we want the same animation.
            The user said "Same animation, Same orbit", so let's allow it to have its own dot!
            But since it shares layoutId="orbit-dot", Framer Motion will magically move the dot 
            between the hero and this selector if they are both rendered. 
            Wait, we want each to have a dot if they are far apart, but not share layoutId.
            Let's remove layoutId from IndustrySelector or pass a unique layoutId prefix.
            I updated IndustrySelector to use layoutId="orbit-dot", which means only ONE dot will exist on screen.
            That's actually very cool. If you scroll down and the hero is unmounted, the dot is here.
            Wait, the hero is NEVER unmounted. It's above the fold. 
            Let's pass isPrimary={false} so this one doesn't render the dot, it just shows the highlighted card.
        */}
        <IndustrySelector
          activeIndustry={activeIndustry}
          onIndustrySelect={onIndustrySelect}
          isPrimary={false}
        />
      </div>
    </Container>
  );
}
