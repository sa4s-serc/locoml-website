import { motion } from 'framer-motion';

export function StressTestingIllustration() {
  const duration = 6;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono">
      <div className="relative w-24 h-24">
        
        {/* Record 1 */}
        <div className="absolute top-2 left-4 w-16 h-4 bg-white border border-slate-200 rounded-sm z-10" />
        
        {/* Record 3 */}
        <div className="absolute top-14 left-4 w-16 h-4 bg-white border border-slate-200 rounded-sm z-10" />

        {/* Record 2 (The Target) */}
        <div className="absolute top-8 left-4 w-16 h-4 bg-white border border-slate-200 rounded-sm z-20 flex items-center px-1">
           <div className="w-2 h-[2px] bg-slate-200 rounded-full" />
        </div>

        {/* The Clone */}
        <motion.div 
          className="absolute top-8 left-4 w-16 h-4 border rounded-sm z-30 flex items-center px-1 justify-between shadow-sm bg-white"
          animate={{ 
            x: [0, 24, 24, 24, 24, 0],
            y: [0, 0, 0, 0, 0, 0],
            borderColor: ["#e2e8f0", "#e2e8f0", "#f43f5e", "#10b981", "#10b981", "#e2e8f0"],
            backgroundColor: ["#ffffff", "#ffffff", "#fff1f2", "#ecfdf5", "#ecfdf5", "#ffffff"],
            opacity: [0, 1, 1, 1, 1, 0]
          }}
          transition={{ ...transition, times: [0, 0.2, 0.4, 0.6, 0.8, 0.95] }}
        >
           <div className="w-2 h-[2px] bg-slate-300 rounded-full" />
           <motion.span 
             className="text-[8px] font-bold"
             animate={{ 
               opacity: [0, 0, 1, 1, 1, 0],
               color: ["#ffffff", "#ffffff", "#f43f5e", "#10b981", "#10b981", "#ffffff"] 
             }}
             transition={{ ...transition, times: [0, 0.2, 0.4, 0.6, 0.8, 0.95] }}
           >
             <motion.span animate={{ display: ["none", "none", "block", "none", "none", "none"] }} transition={{ ...transition, times: [0, 0.2, 0.4, 0.6, 0.8, 0.95] }}>✕</motion.span>
             <motion.span animate={{ display: ["none", "none", "none", "block", "block", "none"] }} transition={{ ...transition, times: [0, 0.2, 0.4, 0.6, 0.8, 0.95] }}>✓</motion.span>
           </motion.span>
        </motion.div>

        {/* Helper text overlay */}
        <motion.div
          className="absolute -right-8 top-3 text-[9px] font-medium tracking-widest text-slate-400 uppercase w-20"
          animate={{ opacity: [0, 1, 0, 0, 0, 0] }}
          transition={{ ...transition, times: [0, 0.1, 0.3, 0.4, 0.9, 1] }}
        >
          Clone
        </motion.div>
        <motion.div
          className="absolute -right-8 top-3 text-[9px] font-medium tracking-widest text-rose-500 uppercase w-20"
          animate={{ opacity: [0, 0, 1, 0, 0, 0] }}
          transition={{ ...transition, times: [0, 0.3, 0.4, 0.6, 0.9, 1] }}
        >
          Inject
        </motion.div>
        <motion.div
          className="absolute -right-8 top-3 text-[9px] font-medium tracking-widest text-emerald-500 uppercase w-20"
          animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.5, 0.6, 0.8, 0.95, 1] }}
        >
          Passed
        </motion.div>

      </div>
    </div>
  );
}
