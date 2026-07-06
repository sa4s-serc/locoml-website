import { motion, useReducedMotion, Variants } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { cn } from '@/utils/cn';

const PILLARS = [
  {
    num: '01',
    title: 'Generation',
    description: 'Create complete machine learning workflows from natural language or visual pipeline construction.',
    capabilities: ['Pipeline Builder', 'Pipeline LLM']
  },
  {
    num: '02',
    title: 'Validation',
    description: 'Understand datasets, infer tasks, detect semantic failures and automatically repair incompatible workflows.',
    capabilities: ['Resolver', 'Semantic Engine']
  },
  {
    num: '03',
    title: 'Optimization',
    description: 'Continuously improve execution through adaptive routing, model stitching and intelligent recommendations.',
    capabilities: ['Adaptive Routing', 'Stitch Models']
  },
  {
    num: '04',
    title: 'Production',
    description: 'Deploy, monitor, stress test and run inference inside a production-ready environment.',
    capabilities: ['Deployment', 'Monitoring']
  }
];

export function PlatformOverview() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.04
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full pt-[80px] pb-[90px] bg-white overflow-hidden relative">
      <Container>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-[80px]"
        >
          <div className="mb-[24px]">
            <Tag>PLATFORM PILLARS</Tag>
          </div>
          <h2 className="mb-[24px] text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.15]">
            Four pillars that power<br className="hidden sm:block" />
            every LoCoML workflow.
          </h2>
          <p className="text-base text-slate-500 sm:text-lg max-w-[700px] mx-auto">
            Every machine learning pipeline passes through these core platform capabilities, enabling autonomous generation, validation, optimization, and production deployment.
          </p>
        </motion.div>

        {/* 4 Pillars Editorial Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 relative border-t border-b border-slate-100 py-[48px]"
        >
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.num}
              variants={itemVariants}
              className={cn(
                "group flex flex-col relative px-[24px] h-full cursor-pointer",
                "transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                index !== 0 && "lg:border-l lg:border-slate-100 hover:border-slate-200"
              )}
            >
              {/* Left Blue Accent on Hover */}
              <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-blue-600 transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-10" />

              <div className="mb-[20px]">
                <span className="text-[14px] font-mono text-slate-400 tracking-wider transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-blue-600">
                  {pillar.num}
                </span>
              </div>
              
              <h3 className="text-[28px] font-semibold text-slate-900 mb-[16px] transition-colors duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-blue-600">
                {pillar.title}
              </h3>
              
              <p className="text-[16px] text-slate-600 mb-[40px] leading-[1.6] max-w-[230px] flex-1">
                {pillar.description}
              </p>
              
              <div className="mt-auto flex flex-col gap-[8px]">
                {pillar.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-[10px]">
                    <span className="w-[6px] h-[6px] flex-shrink-0 rounded-full bg-blue-600 opacity-80 transition-all duration-[180ms] ease-out group-hover:opacity-100 group-hover:scale-[1.333]" />
                    <span className="text-[13px] font-mono font-medium text-blue-600 tracking-wider transition-colors duration-[180ms] ease-out group-hover:text-blue-700">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </Container>
    </section>
  );
}
