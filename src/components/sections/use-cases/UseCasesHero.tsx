import React from 'react';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { motion } from 'framer-motion';
import { IndustrySelector } from './IndustrySelector';

interface UseCasesHeroProps {
  activeIndustry: string;
  onIndustrySelect: (id: string) => void;
}

export function UseCasesHero({ activeIndustry, onIndustrySelect }: UseCasesHeroProps) {
  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center pt-32 pb-16 overflow-hidden bg-white">
      {/* Subtle Blueprint Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] text-slate-900 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          className="w-1.5 h-1.5 bg-currentColor rounded-full"
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100], opacity: [0, 0.5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <Container className="relative z-10 w-full max-w-[1000px] flex flex-col items-center justify-center text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Tag className="mb-8 border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider">
            USE CASES
          </Tag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-[850px] mb-8"
        >
          One Platform.<br />
          Every Machine Learning Problem.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[760px] text-lg text-slate-500 leading-relaxed mb-16"
        >
          From healthcare to finance, manufacturing to retail, LoCoML intelligently generates, validates, optimizes and
          deploys machine learning workflows tailored to diverse real-world applications.
        </motion.p>

        <div className="w-full max-w-[800px] mx-auto flex flex-col items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.45 }}>
            <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mb-8 block">
              EXPLORE BY INDUSTRY
            </span>
          </motion.div>

          <IndustrySelector
            activeIndustry={activeIndustry}
            onIndustrySelect={onIndustrySelect}
            isPrimary={true}
          />
        </div>
      </Container>
    </section>
  );
}
