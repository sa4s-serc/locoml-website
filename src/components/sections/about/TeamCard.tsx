import React from 'react';
import { motion } from 'framer-motion';
import { Contributor } from './teamData';
import { cn } from '@/utils/cn';

interface TeamCardProps {
  contributor: Contributor;
  isLarge?: boolean;
}

export function TeamCard({ contributor, isLarge = false }: TeamCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      className={cn(
        "group relative flex flex-col items-center text-center bg-white rounded-[20px] p-6 sm:p-8",
        "border border-transparent",
        "shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
        "transition-all duration-250 ease-in-out",
        "hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-primary/50"
      )}
    >
      {/* Photo Placeholder */}
      <div 
        className={cn(
          "rounded-full bg-slate-100 flex items-center justify-center overflow-hidden mb-6 flex-shrink-0 border border-slate-200/60",
          isLarge ? "w-32 h-32 md:w-40 md:h-40" : "w-24 h-24 md:w-28 md:h-28"
        )}
      >
        {contributor.photo ? (
          <img src={contributor.photo} alt={contributor.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-300">
            <svg className={cn(isLarge ? "w-12 h-12" : "w-8 h-8", "opacity-50")} fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        )}
      </div>

      <h3 className={cn(
        "font-bold text-slate-900 mb-1.5",
        isLarge ? "text-xl md:text-2xl" : "text-[17px]"
      )}>
        {contributor.name}
      </h3>
      
      <span className={cn(
        "text-slate-500 font-medium",
        isLarge ? "text-base" : "text-sm"
      )}>
        {contributor.role}
      </span>

      {contributor.institution && (
        <span className="text-sm font-medium text-slate-400 mt-4 leading-relaxed whitespace-pre-line">
          {contributor.institution}
        </span>
      )}
    </motion.div>
  );
}
