import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { motion } from 'framer-motion';
import { SemanticGraphBackground, SemanticSignal } from './SemanticGraph';

export function AboutHero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-[120px] pb-[140px] overflow-hidden bg-white">

      {/* Layer 0 – Static graph (permanent, no opacity animation) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.28,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <SemanticGraphBackground />
      </div>

      {/* Layer 1 – Signal particle (independent, never re-renders graph) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.85,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <SemanticSignal />
      </div>



      <Container className="relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        {/* Step 1: Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Tag className="mb-8 border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider">
            ABOUT
          </Tag>
        </motion.div>

        {/* Step 2: Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-[800px] mb-10 mx-auto"
        >
          Building the Future of<br />
          Autonomous Machine Learning.
        </motion.h1>



        {/* Step 4: Research Pillars */}
        <div className="w-full max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-center relative">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center py-6 px-4 md:px-12 w-full md:w-1/3"
          >
            <span className="text-[22px] md:text-[28px] font-bold text-slate-900 mb-2">
              Research
            </span>
            <span className="text-sm font-medium text-slate-500">
              Scientific foundation
            </span>
          </motion.div>

          <div className="hidden md:block w-[1px] h-16 bg-slate-200" />
          <div className="md:hidden w-16 h-[1px] bg-slate-200 my-2" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center justify-center py-6 px-4 md:px-12 w-full md:w-1/3"
          >
            <span className="text-[22px] md:text-[28px] font-bold text-slate-900 mb-2">
              Engineering
            </span>
            <span className="text-sm font-medium text-slate-500">
              Practical systems
            </span>
          </motion.div>

          <div className="hidden md:block w-[1px] h-16 bg-slate-200" />
          <div className="md:hidden w-16 h-[1px] bg-slate-200 my-2" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center py-6 px-4 md:px-12 w-full md:w-1/3"
          >
            <span className="text-[22px] md:text-[28px] font-bold text-slate-900 mb-2">
              Open Source
            </span>
            <span className="text-sm font-medium text-slate-500">
              Community driven
            </span>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
