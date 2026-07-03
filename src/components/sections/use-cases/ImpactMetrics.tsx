import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';

interface Props {
  data: IndustryConfig;
}

export const ImpactMetrics = React.memo(function ImpactMetrics({ data }: Props) {
  return (
    <Container>
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
        >
          Impact in Production
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.impact.map((metric, index) => (
          <motion.div
            key={metric}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6">
               <div className="w-2 h-2 rounded-full bg-[#2F6BFF] shadow-[0_0_8px_rgba(47,107,255,0.5)]" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 leading-tight">
              {metric}
            </h4>
          </motion.div>
        ))}
      </div>
    </Container>
  );
});
