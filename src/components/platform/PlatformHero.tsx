import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { FadeUp } from '@/components/animations/Animations';

function HeroIllustration() {
  const duration = 8;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "linear",
  };

  const steps = [
    { label: "Dataset", x: 0 },
    { label: "Pipeline Builder", x: 120 },
    { label: "Intelligence Engine", x: 280 },
    { label: "Training", x: 440 },
    { label: "Validation", x: 560 },
    { label: "Deployment", x: 680 },
    { label: "Monitoring", x: 800 },
  ];

  return (
    <div className="w-full overflow-x-auto py-12 px-4 no-scrollbar">
      <div className="relative w-[900px] h-[120px] mx-auto font-mono">
        
        {/* Connection Line */}
        <div className="absolute left-[40px] right-[40px] top-1/2 -translate-y-1/2 h-[1.5px] bg-slate-200 z-0" />
        
        {/* Animated Pulse */}
        <div className="absolute left-[40px] right-[40px] top-1/2 -translate-y-1/2 h-[1.5px] bg-transparent z-10 overflow-hidden">
           <motion.div 
             className="h-full bg-primary w-[100px]"
             animate={{ x: ["-100px", "900px"] }}
             transition={transition}
           />
        </div>

        {/* Nodes */}
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-white border-[1.5px] border-slate-300 rounded-[6px] px-3 py-1.5 shadow-sm z-20"
            style={{ left: step.x }}
          >
            <span className="text-[11px] font-medium text-slate-600 whitespace-nowrap">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PlatformHero() {
  return (
    <section className="relative w-full pt-24 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-white">
      
      {/* Subtle Blueprint Background (2% opacity) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] text-slate-900 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Faint ambient pulse */}
        <motion.div 
          className="w-1.5 h-1.5 bg-currentColor rounded-full"
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100], opacity: [0, 0.5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Container className="relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
          <FadeUp>
            <Tag className="mb-8 shadow-sm bg-white">PLATFORM</Tag>
          </FadeUp>
          
          <FadeUp delay={0.1} className="w-full">
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[84px] font-bold tracking-tight text-heading leading-[1.1] mb-8">
              One Platform.<br />Every Machine Learning Workflow.
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.2} className="w-full">
            <p className="text-[18px] md:text-[22px] lg:text-[24px] text-body max-w-[800px] mx-auto leading-[1.6]">
              Design, generate, validate, optimize, deploy, monitor,
              and continuously improve machine learning pipelines
              through a unified intelligent platform.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <HeroIllustration />
        </FadeUp>

      </Container>
    </section>
  );
}
