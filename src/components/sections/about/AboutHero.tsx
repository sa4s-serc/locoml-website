import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-[120px] pb-[140px] overflow-hidden bg-white">
      
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

        {/* Step 3: Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-14 mx-auto max-w-[760px]"
        >
          {/* Group 1 */}
          <span className="text-lg text-slate-500 font-medium tracking-wide mb-2">
            LoCoML is a research-driven framework developed at
          </span>

          {/* Group 2 */}
          <div className="flex flex-col items-center text-slate-500 leading-snug mb-3">
            <span className="text-base md:text-lg">
              Software Engineering Research Centre (SERC)<br />
              IIIT Hyderabad
            </span>
          </div>

          {/* Group 3 */}
          <div className="flex flex-col items-center text-slate-500 leading-snug">
            <span className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-1">
              under the
            </span>
            <span className="text-base md:text-lg">
              Software Architecture for Sustainable and<br className="hidden sm:block" />
              Self-Adaptive Software Systems (SA4S)<br className="hidden sm:block" />
              Research Group
            </span>
          </div>
        </motion.div>

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
