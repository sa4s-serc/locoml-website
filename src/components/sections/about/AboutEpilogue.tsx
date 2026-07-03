import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';

export function AboutEpilogue() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-[120px] pb-[140px] bg-white overflow-hidden border-t border-slate-100">
      <Container className="relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center w-full max-w-[800px] mx-auto"
        >
          {/* Main Statement */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight"
          >
            Advancing Machine Learning,<br className="hidden sm:block" />
            One Semantic Workflow at a Time.
          </motion.h2>

          {/* Supporting Statement */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-[640px] mx-auto mb-14"
          >
            LoCoML continues to evolve through research,<br className="hidden sm:block" />
            engineering, and collaboration,<br className="hidden sm:block" />
            building the next generation of intelligent machine learning systems.
          </motion.p>

          {/* Thin Divider */}
          <motion.div 
            variants={itemVariants}
            className="w-[200px] h-[1px] bg-slate-200 mb-14"
          />

          {/* Institutional Attribution */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-slate-500 leading-[1.6]"
          >
            <span className="text-sm font-medium tracking-wide mb-1">
              Developed at
            </span>
            <span className="text-base font-semibold text-slate-700">
              Software Engineering Research Centre (SERC)
            </span>
            <span className="text-sm text-slate-600">
              IIIT Hyderabad
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
