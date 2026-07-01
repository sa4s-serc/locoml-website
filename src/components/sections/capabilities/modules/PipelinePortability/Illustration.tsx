import { motion } from 'framer-motion';

export function PipelinePortabilityIllustration() {
  const duration = 5; // Total loop duration in seconds

  // Framer Motion shared transition config for the loop
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "linear",
    times: [0, 1] // Will be overridden per element
  };

  return (
    <div className="relative w-full h-full flex items-center overflow-hidden font-mono">
      
      {/* ---------------- PROJECT A (LEFT) ---------------- */}
      <div className="absolute left-8 flex items-center z-10">
        {/* Node 1 */}
        <motion.div 
          className="w-3 h-3 rounded-full border-[1.5px] border-primary bg-white"
          animate={{ opacity: [0, 1, 1, 0, 0, 0] }}
          transition={{ ...transition, times: [0, 0.05, 0.16, 0.18, 0.95, 1] }}
        />
        {/* Line 1 */}
        <div className="w-5 h-[1.5px] bg-slate-200 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary origin-left"
            animate={{ scaleX: [0, 0, 1, 1, 0, 0, 0] }}
            transition={{ ...transition, times: [0, 0.05, 0.08, 0.16, 0.18, 0.95, 1] }}
          />
        </div>
        {/* Node 2 */}
        <motion.div 
          className="w-3 h-3 rounded-full border-[1.5px] border-primary bg-white"
          animate={{ opacity: [0, 0, 1, 1, 0, 0, 0] }}
          transition={{ ...transition, times: [0, 0.08, 0.11, 0.16, 0.18, 0.95, 1] }}
        />
        {/* Line 2 */}
        <div className="w-5 h-[1.5px] bg-slate-200 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary origin-left"
            animate={{ scaleX: [0, 0, 0, 1, 1, 0, 0, 0] }}
            transition={{ ...transition, times: [0, 0.08, 0.11, 0.14, 0.16, 0.18, 0.95, 1] }}
          />
        </div>
        {/* Node 3 */}
        <motion.div 
          className="w-3 h-3 rounded-full border-[1.5px] border-primary bg-white"
          animate={{ opacity: [0, 0, 0, 1, 1, 0, 0, 0] }}
          transition={{ ...transition, times: [0, 0.11, 0.14, 0.16, 0.18, 0.95, 1] }}
        />
      </div>


      {/* ---------------- THE PORTABLE BLUEPRINT ---------------- */}
      {/* Starts exactly at the center of Project A, then slides right */}
      <motion.div 
        className="absolute left-[54px] w-[22px] h-[28px] border-[1.5px] border-primary bg-white rounded shadow-sm flex flex-col gap-[3px] p-1 z-20"
        animate={{ 
          opacity: [0, 0, 1, 1, 1, 0, 0, 0],
          scale: [0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5],
          x: [0, 0, 0, 0, 100, 100, 100, 100]
        }}
        transition={{ 
          ...transition, 
          times: [0, 0.15, 0.18, 0.32, 0.48, 0.51, 0.95, 1],
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-[1.5px] bg-primary/40 rounded-full" />
        <div className="w-2/3 h-[1.5px] bg-primary/40 rounded-full" />
        <div className="w-full h-[1.5px] bg-primary/40 rounded-full" />
      </motion.div>


      {/* ---------------- PROJECT B (RIGHT) ---------------- */}
      <div className="absolute left-[154px] flex items-center z-10">
        {/* Node 1 */}
        <motion.div 
          className="w-3 h-3 rounded-full border-[1.5px] border-primary bg-white"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ ...transition, times: [0, 0.50, 0.53, 0.92, 0.95, 1] }}
        />
        {/* Line 1 */}
        <div className="w-5 h-[1.5px] bg-slate-200 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary origin-left"
            animate={{ scaleX: [0, 0, 0, 1, 1, 0, 0] }}
            transition={{ ...transition, times: [0, 0.50, 0.53, 0.56, 0.92, 0.95, 1] }}
          />
        </div>
        {/* Node 2 */}
        <motion.div 
          className="w-3 h-3 rounded-full border-[1.5px] border-primary bg-white"
          animate={{ opacity: [0, 0, 0, 1, 1, 0, 0] }}
          transition={{ ...transition, times: [0, 0.53, 0.56, 0.59, 0.92, 0.95, 1] }}
        />
        {/* Line 2 */}
        <div className="w-5 h-[1.5px] bg-slate-200 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary origin-left"
            animate={{ scaleX: [0, 0, 0, 0, 1, 1, 0, 0] }}
            transition={{ ...transition, times: [0, 0.53, 0.56, 0.59, 0.62, 0.92, 0.95, 1] }}
          />
        </div>
        {/* Node 3 */}
        <motion.div 
          className="w-3 h-3 rounded-full border-[1.5px] border-primary bg-white"
          animate={{ opacity: [0, 0, 0, 0, 1, 1, 0, 0] }}
          transition={{ ...transition, times: [0, 0.56, 0.59, 0.62, 0.65, 0.92, 0.95, 1] }}
        />
      </div>

      {/* ---------------- SUCCESS BADGE ---------------- */}
      <motion.div 
        className="absolute left-[154px] top-[calc(50%+16px)] text-[9px] font-bold tracking-widest text-emerald-500 uppercase flex items-center gap-1 whitespace-nowrap"
        animate={{ 
          opacity: [0, 0, 1, 1, 0, 0],
          y: [8, 8, 0, 0, 0, 0]
        }}
        transition={{ ...transition, times: [0, 0.65, 0.70, 0.92, 0.95, 1] }}
      >
        <span>✓</span> Ready
      </motion.div>

    </div>
  );
}
