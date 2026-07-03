import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { motion } from 'framer-motion';
import { Icons } from '@/constants/icons';

export function ResearchHero() {
  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center pt-32 pb-16 overflow-hidden bg-white">
      
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

      <Container className="relative z-10 w-full max-w-[1000px] flex flex-col items-center justify-center text-center">
        
        {/* Step 1: Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <Tag className="mb-8 border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider">
            RESEARCH
          </Tag>
        </motion.div>

        {/* Step 2: Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-[850px] mb-8"
        >
          Research that powers<br />
          autonomous machine learning.
        </motion.h1>

        {/* Step 3: Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[760px] text-lg text-slate-500 leading-relaxed mb-20"
        >
          LoCoML is built on research focused on autonomous machine learning,
          semantic pipeline understanding, adaptive intelligence, and resilient
          ML workflow execution. Explore the ideas, architecture, and scientific
          contributions behind the platform.
        </motion.p>

        {/* Step 4: Research Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-[1000px] mx-auto bg-white border border-slate-200 rounded-[20px] shadow-sm overflow-hidden mb-24"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full relative">
            
            {/* Column 1: Paper */}
            <div className="relative flex flex-col items-center justify-center py-[28px] px-[36px] group hover:bg-slate-50 transition-colors duration-[250ms] ease-in-out">
              <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-2 group-hover:text-slate-600 transition-colors duration-[250ms]">
                Paper
              </span>
              <span className="text-2xl md:text-[28px] font-bold text-slate-900 group-hover:text-primary transition-colors duration-[250ms] text-center whitespace-nowrap">
                01
              </span>
              <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55%] bg-slate-200 z-10" />
              <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[55%] bg-slate-200 z-10" />
            </div>

            {/* Column 2: Year */}
            <div className="relative flex flex-col items-center justify-center py-[28px] px-[36px] group hover:bg-slate-50 transition-colors duration-[250ms] ease-in-out">
              <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-2 group-hover:text-slate-600 transition-colors duration-[250ms]">
                Year
              </span>
              <span className="text-2xl md:text-[28px] font-bold text-slate-900 group-hover:text-primary transition-colors duration-[250ms] text-center whitespace-nowrap">
                2025
              </span>
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55%] bg-slate-200 z-10" />
              <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[55%] bg-slate-200 z-10" />
            </div>

            {/* Column 3: License */}
            <div className="relative flex flex-col items-center justify-center py-[28px] px-[36px] group hover:bg-slate-50 transition-colors duration-[250ms] ease-in-out">
              <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-2 group-hover:text-slate-600 transition-colors duration-[250ms]">
                License
              </span>
              <span className="text-2xl md:text-[28px] font-bold text-slate-900 group-hover:text-primary transition-colors duration-[250ms] text-center whitespace-nowrap">
                Open Source
              </span>
              <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[55%] bg-slate-200 z-10" />
              <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[55%] bg-slate-200 z-10" />
            </div>

            {/* Column 4: Publisher */}
            <div className="relative flex flex-col items-center justify-center py-[28px] px-[36px] group hover:bg-slate-50 transition-colors duration-[250ms] ease-in-out">
              <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-2 group-hover:text-slate-600 transition-colors duration-[250ms]">
                Publisher
              </span>
              <span className="text-2xl md:text-[28px] font-bold text-slate-900 group-hover:text-primary transition-colors duration-[250ms] text-center whitespace-nowrap">
                arXiv
              </span>
            </div>

          </div>
        </motion.div>

        {/* Step 5: Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <span className="text-sm font-medium text-slate-500 tracking-wide">Featured Publication</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
          >
            <Icons.ArrowDown className="h-5 w-5 text-slate-400" />
          </motion.div>
        </motion.div>

      </Container>
    </section>
  );
}
