import { motion } from 'framer-motion';

export function DashboardIllustration() {
  const duration = 6;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  // Base heights, mid heights, and final heights
  const h1 = [40, 20, 60, 30, 80, 50, 70];
  const h2 = [30, 70, 50, 80, 60, 40, 90];
  const h3 = [60, 40, 80, 50, 30, 70, 40];

  return (
    <div className="w-full h-full flex flex-col items-center justify-end p-6">
      
      {/* Metric dots */}
      <div className="w-full flex justify-between px-2 mb-8">
        <div className="flex items-center gap-1.5">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[9px] font-mono font-medium text-slate-400">API</span>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[9px] font-mono font-medium text-slate-400">GPU</span>
        </div>
      </div>

      {/* Chart Bars */}
      <div className="w-full h-16 flex items-end justify-between px-2 gap-1.5 border-b border-slate-200/60 pb-px">
        {h1.map((h, i) => (
          <motion.div 
            key={i}
            className="w-full rounded-t-[2px] bg-slate-200"
            animate={{ 
              height: [`${h}%`, `${h2[i]}%`, `${h3[i]}%`, `${h}%`],
              backgroundColor: ["#e2e8f0", i % 2 === 0 ? "#eff6ff" : "#2563eb", "#e2e8f0", "#e2e8f0"]
            }}
            transition={{ ...transition, times: [0, 0.33, 0.66, 1] }}
          />
        ))}
      </div>
    </div>
  );
}
