import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { Button } from '@/components/ui/Button';
import { FadeUp } from '@/components/animations/Animations';
import { ArrowRight } from 'lucide-react';
import { CTABlueprint } from './CTABlueprint';

export function CTASection() {
  return (
    <section className="relative w-full bg-slate-50 pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden border-t border-border/50">
      
      {/* Very Subtle Background Grid (2% opacity) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] text-slate-900"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Semantic Graph Overlay */}
      <CTABlueprint />

      <Container className="relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <FadeUp>
            <Tag className="mb-8">GET STARTED</Tag>
          </FadeUp>
          
          <FadeUp delay={0.1} className="w-full">
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[84px] font-bold tracking-tight text-heading leading-[1.1] mb-8">
              Build Smarter.<br />Deploy Faster.
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2} className="w-full">
            <p className="text-[18px] md:text-[22px] lg:text-[24px] text-body max-w-[700px] mx-auto mb-16 leading-[1.6]">
              Design, validate, deploy, and continuously improve
              machine learning systems through one unified platform.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3} className="flex justify-center">
            <Button size="lg" className="h-14 px-8 text-base">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </FadeUp>
          
        </div>

      </Container>
    </section>
  );
}
