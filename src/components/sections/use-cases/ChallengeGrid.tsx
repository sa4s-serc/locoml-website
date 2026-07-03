import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';

interface Props {
  data: IndustryConfig;
}

export const ChallengeGrid = React.memo(function ChallengeGrid({ data }: Props) {
  return (
    <Container>
      <div className="flex flex-col items-center mb-12">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900"
        >
          Common Challenges
        </motion.h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.challenges.map((challenge, index) => (
          <motion.div
            key={challenge.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <h4 className="text-lg font-semibold text-slate-900 mb-2">
              {challenge.title}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              {challenge.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  );
});
