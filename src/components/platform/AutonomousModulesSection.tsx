import { MouseEvent } from 'react';
import { motion, useReducedMotion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { cn } from '@/utils/cn';

const MODULES = [
  {
    id: 'resolver',
    title: 'Resolver',
    description: 'Repairs structural and semantic failures automatically.',
    tag: 'CORE'
  },
  {
    id: 'llm',
    title: 'Pipeline LLM',
    description: 'Generates complete ML pipelines from natural language.',
    tag: 'SYSTEM'
  },
  {
    id: 'routing',
    title: 'Adaptive Routing',
    description: 'Redirects execution to better-performing models.',
    tag: 'ALWAYS ON'
  },
  {
    id: 'stitch',
    title: 'Stitch Model',
    description: 'Combines multiple models to improve prediction quality.',
    tag: 'CORE'
  },
  {
    id: 'semantic',
    title: 'Semantic Engine',
    description: 'Validates datasets, tasks, and pipeline compatibility.',
    tag: 'ACTIVE'
  },
  {
    id: 'deployment',
    title: 'Deployment Engine',
    description: 'Packages and deploys validated pipelines automatically.',
    tag: 'SYSTEM'
  }
];

export function AutonomousModulesSection() {
  const shouldReduceMotion = useReducedMotion();

  const sectionEntrance = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full pt-24 pb-[120px] bg-white overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={sectionEntrance}
        >
          {/* Section Header */}
          <div className="mb-[64px] flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <Tag>INTELLIGENCE STACK</Tag>
            </div>
            <h2 className="mb-6 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.15]">
              The intelligence behind<br className="hidden sm:block" />
              every autonomous pipeline.
            </h2>
            <p className="text-base text-slate-500 sm:text-lg max-w-[680px]">
              Independent AI systems continuously validate, repair, optimize, and deploy machine learning pipelines throughout their lifecycle.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="mx-auto w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <ModuleCard 
                key={mod.id}
                mod={mod}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ModuleCard({ mod, shouldReduceMotion }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (shouldReduceMotion) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // 8% opacity radial light tracking the cursor
  const spotlight = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(15,23,42,0.08), transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col rounded-[24px] bg-white overflow-hidden text-left cursor-default",
        "transition-all duration-250 ease-out hover:-translate-y-[4px]"
      )}
      style={{
        border: "1px solid #E7ECF5",
        boxShadow: "0 6px 18px rgba(15,23,42,0.05)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(15,23,42,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(15,23,42,0.05)";
      }}
    >
      
      {/* Cursor Spotlight Overlay */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      )}

      {/* 4px Vertical Accent Rail */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-slate-200 transition-colors duration-300 group-hover:bg-blue-500 overflow-hidden z-10">
        {/* Intelligence Pulse: A solid blue block traveling down */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute left-0 w-full h-[60px] bg-blue-500"
            animate={{ y: ["-60px", "400px"] }}
            transition={{
              duration: 1.1,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 4.9 // Total 6s loop
            }}
          />
        )}
      </div>

      <div className="relative z-10 flex flex-col h-full w-full pl-[36px] pr-[32px] pt-[40px] pb-[40px]">
        
        {/* Top Status Chip */}
        <div className="absolute top-[28px] right-[28px] flex items-center gap-[6px]">
          {!shouldReduceMotion ? (
            <motion.div 
              className="h-[6px] w-[6px] rounded-full bg-slate-400 group-hover:bg-blue-500 transition-colors duration-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : (
            <div className="h-[6px] w-[6px] rounded-full bg-slate-400 group-hover:bg-blue-500 transition-colors duration-300" />
          )}
          <span className="text-[11px] font-mono font-medium tracking-wider text-slate-400 uppercase">
            {mod.tag}
          </span>
        </div>

        {/* Content */}
        <div className="mt-auto mb-auto">
          <h3 className="mb-[12px] text-[18px] font-semibold text-slate-900">
            {mod.title}
          </h3>
          <p className="text-[15px] leading-[1.7] text-slate-600 max-w-[90%]">
            {mod.description}
          </p>
        </div>
      </div>
    </div>
  );
}
