import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { foundationData } from '@/config/foundationData';
import { FoundationNode } from './FoundationNode';
import { FoundationConnector } from './FoundationConnector';
import { Tag } from '@/components/ui/TypographyAndBadges';

export function ResearchFoundation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="relative py-[120px] bg-white overflow-hidden border-t border-slate-100">
      <Container className="relative z-10 w-full flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-24"
        >
          <Tag className="border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider mb-6">
            FOUNDATION
          </Tag>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Research Foundation
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-[1.7] max-w-[640px] mx-auto">
            LoCoML is developed within a research ecosystem that combines software engineering, autonomous systems, and semantic machine learning at IIIT Hyderabad.
          </p>
        </motion.div>

        {/* Vertical Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-150px" }}
          className="flex flex-col items-center w-full px-4"
        >
          {foundationData.map((node, index) => (
            <React.Fragment key={node.id}>
              <FoundationNode data={node} />
              {index < foundationData.length - 1 && <FoundationConnector />}
            </React.Fragment>
          ))}
        </motion.div>
        
      </Container>
    </section>
  );
}
