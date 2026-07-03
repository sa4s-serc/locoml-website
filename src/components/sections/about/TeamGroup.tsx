import React from 'react';
import { motion } from 'framer-motion';
import { TeamCard } from './TeamCard';
import { Contributor } from './teamData';
import { cn } from '@/utils/cn';

interface TeamGroupProps {
  title: string;
  members: Contributor[];
  layout: 'faculty' | 'research' | 'btech' | 'interns';
}

export function TeamGroup({ title, members, layout }: TeamGroupProps) {
  
  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getGridClasses = () => {
    switch (layout) {
      case 'faculty':
        return 'flex justify-center max-w-lg mx-auto';
      case 'research':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto';
      case 'btech':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto';
      case 'interns':
        return 'grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto';
    }
  };

  return (
    <div className="w-full mb-24 last:mb-0">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-[22px] md:text-3xl font-bold text-slate-900 text-center mb-10 md:mb-14"
      >
        {title}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className={getGridClasses()}
      >
        {members.map((member) => (
          <TeamCard 
            key={member.id} 
            contributor={member} 
            isLarge={layout === 'faculty'} 
          />
        ))}
      </motion.div>
    </div>
  );
}
