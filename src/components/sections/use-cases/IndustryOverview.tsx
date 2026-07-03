import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';

interface Props {
  data: IndustryConfig;
}

export const IndustryOverview = React.memo(function IndustryOverview({ data }: Props) {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6"
          >
            {data.hero.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-10"
          >
            {data.hero.description}
          </motion.p>
          
          <div className="flex flex-col gap-4">
            {data.hero.highlights.map((highlight, index) => (
              <motion.div 
                key={highlight}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F6BFF]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#2F6BFF]" />
                </div>
                <span className="text-slate-700 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center"
        >
          {/* Abstract Placeholder Graphic for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50" />
          <div className="relative z-10 w-3/4 h-3/4 rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center">
             <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-[#2F6BFF]/20 to-[#2F6BFF]/5 blur-xl absolute" />
             <span className="text-slate-400 font-medium tracking-wide">Semantic Workflow</span>
          </div>
        </motion.div>
      </div>
    </Container>
  );
});
