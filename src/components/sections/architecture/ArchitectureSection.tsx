import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { FadeUp, StaggerContainer } from '@/components/animations/Animations';
import { architectureConfig } from '@/config/architecture.config';

import { ArchitectureProvider } from './ArchitectureContext';
import { ArchitectureLegend } from './ArchitectureLegend';
import { ArchitectureLayer } from './ArchitectureLayer';
import { IntelligenceEngine } from './IntelligenceEngine/IntelligenceEngine';

export function ArchitectureSection() {
  const { layers } = architectureConfig;

  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden border-t border-border/50">
      <ArchitectureProvider>
        <Container className="max-w-[1400px]">
          
          {/* Section Introduction */}
          <div className="mb-20 flex flex-col items-center text-center">
            <FadeUp>
              <Tag className="mb-6">PLATFORM OVERVIEW</Tag>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl md:text-5xl leading-[1.1] max-w-3xl mx-auto">
                A unified platform built in layers.
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.2} className="mt-8">
              <p className="max-w-2xl text-lg text-paragraph leading-relaxed">
                Every capability inside LoCoML is organized into independent platform layers, allowing workflows to be generated, validated, optimized and deployed through a unified system.
              </p>
            </FadeUp>
          </div>

          <ArchitectureLegend />

          {/* Main Grid Layout */}
          <div className="mx-auto w-full max-w-6xl">
            
            {/* System Architecture */}
            <div className="w-full border border-black rounded-[24px] md:rounded-[32px] p-8 md:p-10 bg-white">
              <StaggerContainer delay={0.2} staggerChildren={0.15} className="flex flex-col items-center w-full">
                <FadeUp className="w-full">
                  <ArchitectureLayer layer={layers.layer1} />
                </FadeUp>
                
                <FadeUp className="my-2 text-slate-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                </FadeUp>
                
                <FadeUp className="w-full">
                  <ArchitectureLayer layer={layers.layer2} />
                </FadeUp>

                <FadeUp className="my-2 text-primary/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                </FadeUp>

                <FadeUp className="w-full">
                  <IntelligenceEngine />
                </FadeUp>

                <FadeUp className="my-2 text-primary/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                </FadeUp>

                <FadeUp className="w-full">
                  <ArchitectureLayer layer={layers.layer4} variant="execution" />
                </FadeUp>

                <FadeUp className="my-2 text-emerald-400/40">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                </FadeUp>

                <FadeUp className="w-full">
                  <ArchitectureLayer layer={layers.layer5} variant="storage" />
                </FadeUp>
              </StaggerContainer>
            </div>
            
          </div>

          {/* Closing Statement */}
          <div className="mt-32 mb-10 flex flex-col items-center text-center">
            <FadeUp delay={0.3}>
              <div className="font-heading text-2xl md:text-4xl font-semibold tracking-tight text-heading">
                <span className="block mb-2 text-slate-400">Every pipeline.</span>
                <span className="block mb-2 text-slate-400">Every model.</span>
                <span className="block mb-6 text-slate-400">Every deployment.</span>
                <span className="block text-primary">Powered by one Intelligence Engine.</span>
              </div>
            </FadeUp>
          </div>
        </Container>
      </ArchitectureProvider>
    </section>
  );
}
