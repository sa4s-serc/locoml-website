import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';
import { ChevronRight } from 'lucide-react';

interface Props {
  data: IndustryConfig;
}

const PipelineNode = ({ title, index }: { title: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
    className="flex items-center justify-center h-14 px-6 bg-white border border-slate-200 rounded-xl shadow-sm text-sm font-medium text-slate-700 whitespace-nowrap"
  >
    {title}
  </motion.div>
);

const PipelineArrow = ({ index }: { index: number }) => (
  <motion.div
    initial={{ opacity: 0, width: 0 }}
    animate={{ opacity: 1, width: 'auto' }}
    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
    className="flex items-center justify-center px-2 text-slate-300"
  >
    <ChevronRight className="w-5 h-5" />
  </motion.div>
);

export const WorkflowVisualization = React.memo(function WorkflowVisualization({ data }: Props) {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-12"
        >
          Typical Machine Learning Workflow
        </motion.h3>

        <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex items-center justify-center min-w-max mx-auto">
            {data.workflow.steps.map((step, index) => (
              <React.Fragment key={`${data.id}-step-${index}`}>
                <PipelineNode title={step} index={index} />
                {index < data.workflow.steps.length - 1 && <PipelineArrow index={index} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
});
