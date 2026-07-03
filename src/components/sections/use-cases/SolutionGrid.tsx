import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { IndustryConfig } from '@/config/industryData';
import { 
  ShieldCheck, Wrench, Puzzle, Zap, LayoutTemplate, 
  CheckCircle, Activity, RefreshCw, TrendingUp, Cpu, 
  Users, BarChart, Wifi, AlertTriangle, PenTool, Server, 
  Map, Filter, GitMerge, Eye, Link, GitBranch, Box,
  LucideIcon
} from 'lucide-react';

interface Props {
  data: IndustryConfig;
}

const iconMap: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  'wrench': Wrench,
  'puzzle': Puzzle,
  'zap': Zap,
  'layout-template': LayoutTemplate,
  'check-circle': CheckCircle,
  'activity': Activity,
  'refresh-cw': RefreshCw,
  'trending-up': TrendingUp,
  'cpu': Cpu,
  'users': Users,
  'bar-chart': BarChart,
  'wifi': Wifi,
  'alert-triangle': AlertTriangle,
  'tool': PenTool,
  'server': Server,
  'map': Map,
  'filter': Filter,
  'git-merge': GitMerge,
  'eye': Eye,
  'link': Link,
  'git-branch': GitBranch,
  'box': Box,
};

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
        {data.solutions.map((solution, index) => {
          const IconComponent = iconMap[solution.icon] || Zap;
          
          return (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group p-6 bg-[#2F6BFF]/[0.02] rounded-2xl border border-[#2F6BFF]/10 shadow-sm hover:shadow-md hover:border-[#2F6BFF]/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#2F6BFF]/20 flex items-center justify-center mb-4 text-[#2F6BFF] shadow-sm">
                <IconComponent className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                {solution.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
});
