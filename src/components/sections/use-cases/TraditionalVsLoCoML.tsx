import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface Props {
  data: IndustryConfig;
}

const VerticalNode = ({ title, type, index }: { title: string; type: 'traditional' | 'locoml'; index: number }) => {
  const isTraditional = type === 'traditional';
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className={cn(
        'w-full py-4 px-6 rounded-xl border flex items-center justify-center text-center font-medium shadow-sm transition-colors',
        isTraditional 
          ? 'bg-slate-50 border-slate-200 text-slate-500' 
          : 'bg-[#2F6BFF]/5 border-[#2F6BFF]/20 text-[#2F6BFF]'
      )}
    >
      {title}
    </motion.div>
  );
};

const VerticalArrow = ({ type, index }: { type: 'traditional' | 'locoml'; index: number }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
    className={cn(
      'flex justify-center py-2',
      type === 'traditional' ? 'text-slate-300' : 'text-[#2F6BFF]/40'
    )}
  >
    <ArrowDown className="w-5 h-5" />
  </motion.div>
);

export const TraditionalVsLoCoML = React.memo(function TraditionalVsLoCoML({ data }: Props) {
  return (
    <Container>
      <div className="flex flex-col items-center mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
        >
          Why Traditional Pipelines Break
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-4xl mx-auto">
        {/* Traditional */}
        <div className="flex flex-col">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-semibold tracking-wider text-slate-400 uppercase text-center mb-8"
          >
            Traditional Pipeline
          </motion.h4>
          <div className="flex flex-col">
            {data.comparison.traditional.map((step, index) => (
              <React.Fragment key={`trad-${index}`}>
                <VerticalNode title={step} type="traditional" index={index} />
                {index < data.comparison.traditional.length - 1 && <VerticalArrow type="traditional" index={index} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* LoCoML */}
        <div className="flex flex-col">
          <motion.h4 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-semibold tracking-wider text-[#2F6BFF] uppercase text-center mb-8 flex items-center justify-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-[#2F6BFF] animate-pulse" />
            LoCoML Pipeline
          </motion.h4>
          <div className="flex flex-col">
            {data.comparison.locoml.map((step, index) => (
              <React.Fragment key={`loco-${index}`}>
                <VerticalNode title={step} type="locoml" index={index} />
                {index < data.comparison.locoml.length - 1 && <VerticalArrow type="locoml" index={index} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
});
