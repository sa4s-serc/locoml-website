import { motion } from 'framer-motion';

export function ModelZooIllustration() {
  const duration = 5;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-center pl-6 font-mono text-xs leading-relaxed">
      
      {/* Root Node */}
      <motion.div 
        className="flex items-center gap-2 text-slate-700"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ ...transition, times: [0, 0.1, 0.9, 1] }}
      >
        <span className="text-slate-300">□</span> vision-model-v2
      </motion.div>

      {/* Branch 1 */}
      <div className="flex relative">
        <motion.div 
          className="absolute left-[7px] top-0 w-[1.5px] bg-slate-200 origin-top"
          animate={{ scaleY: [0, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.15, 0.9, 1] }}
          style={{ height: '24px' }}
        />
        <motion.div 
          className="absolute left-[7px] top-[24px] h-[1.5px] bg-slate-200 origin-left"
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{ ...transition, times: [0.15, 0.2, 0.9, 1] }}
          style={{ width: '12px' }}
        />
        <motion.div 
          className="flex items-center gap-2 text-slate-500 mt-2 ml-6"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.2, 0.25, 0.9, 1] }}
        >
          <span className="text-slate-300">□</span> checkpoint-epoch-50
        </motion.div>
      </div>

      {/* Branch 2 */}
      <div className="flex relative">
        <motion.div 
          className="absolute left-[7px] top-[-8px] w-[1.5px] bg-slate-200 origin-top"
          animate={{ scaleY: [0, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.3, 0.9, 1] }}
          style={{ height: '32px' }}
        />
        <motion.div 
          className="absolute left-[7px] top-[24px] h-[1.5px] bg-slate-200 origin-left"
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{ ...transition, times: [0.3, 0.35, 0.9, 1] }}
          style={{ width: '12px' }}
        />
        <motion.div 
          className="flex items-center gap-2 font-medium mt-2 ml-6 relative"
          animate={{ opacity: [0, 0, 1, 1, 0], color: ["#64748b", "#64748b", "#2563eb", "#2563eb", "#64748b"] }}
          transition={{ ...transition, times: [0, 0.35, 0.4, 0.9, 1] }}
        >
          <motion.span 
            className="text-slate-300"
            animate={{ color: ["#cbd5e1", "#cbd5e1", "#2563eb", "#2563eb", "#cbd5e1"] }}
            transition={{ ...transition, times: [0, 0.35, 0.4, 0.9, 1] }}
          >
            □
          </motion.span>
          production-ready

          {/* Success Checkmark */}
          <motion.span
            className="absolute -right-5 text-emerald-500 font-bold"
            animate={{ opacity: [0, 0, 1, 1, 0], scale: [0, 0, 1, 1, 0] }}
            transition={{ ...transition, times: [0, 0.45, 0.5, 0.9, 1] }}
          >
            ✓
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
