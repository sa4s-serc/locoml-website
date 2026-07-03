import React from 'react';
import { motion } from 'framer-motion';

export const InfoCard = ({ title, description, index }: { title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    <h4 className="text-lg font-semibold text-slate-900 mb-2">
      {title}
    </h4>
    <p className="text-sm text-slate-500 leading-relaxed">
      {description}
    </p>
  </motion.div>
);
