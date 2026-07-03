import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';
import { InfoCard } from './InfoCard';

interface Props {
  data: IndustryConfig;
}

export const SolutionGrid = React.memo(function SolutionGrid({ data }: Props) {
  return (
    <Container>
      <div className="flex flex-col items-center mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
        >
          How LoCoML Solves This
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.solutions.map((solution, index) => (
          <InfoCard
            key={solution.title}
            title={solution.title}
            description={solution.description}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
});
