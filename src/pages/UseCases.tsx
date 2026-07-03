import { useState } from 'react';
import { UseCasesHero } from '@/components/sections/use-cases/UseCasesHero';
import { DynamicIndustryContent } from '@/components/sections/use-cases/DynamicIndustryContent';

export function UseCases() {
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare');

  return (
    <div className="bg-slate-50 min-h-screen">
      <UseCasesHero 
        activeIndustry={selectedIndustry} 
        onIndustrySelect={setSelectedIndustry} 
      />
      <DynamicIndustryContent 
        selectedIndustry={selectedIndustry} 
        onIndustrySelect={setSelectedIndustry}
      />
    </div>
  );
}
