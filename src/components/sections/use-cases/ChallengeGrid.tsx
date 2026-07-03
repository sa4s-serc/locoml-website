import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';
import { InfoCard } from './InfoCard';

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
          <InfoCard
            key={challenge.title}
            title={challenge.title}
            description={challenge.description}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
});
