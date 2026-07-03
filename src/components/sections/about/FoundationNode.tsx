import React from 'react';
import { motion } from 'framer-motion';
import { FoundationNodeData } from '@/config/foundationData';
import { cn } from '@/utils/cn';

interface FoundationNodeProps {
  data: FoundationNodeData;
}

export function FoundationNode({ data }: FoundationNodeProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.97 },
        show: { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          transition: { duration: 0.5, ease: "easeOut" } 
        }
      }}
      className={cn(
        "group relative flex flex-col items-center justify-center text-center w-full max-w-[640px] mx-auto",
        "bg-white rounded-[20px] py-6 px-8 md:py-8 md:px-10",
        "border border-transparent",
        "shadow-[0_4px_24px_rgba(0,0,0,0.04)]",
        "transition-all duration-[400ms] ease-in-out",
        "hover:-translate-y-[3px] hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-primary/40"
      )}
    >
      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3">
        {data.label}
      </span>
      <h3 className="text-[22px] md:text-[26px] font-medium text-slate-900 whitespace-pre-line leading-snug">
        {data.title}
      </h3>
    </motion.div>
  );
}
