import { motion } from 'framer-motion';

export function ResolverIllustration() {
  const duration = 5;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono">
      <div className="flex flex-col items-center gap-3">
        {/* Dynamic State Container */}
        <motion.div 
          className="w-12 h-12 rounded-xl border-[1.5px] flex items-center justify-center text-lg shadow-sm"
          animate={{ 
            borderColor: ["#f59e0b", "#f59e0b", "#2563eb", "#2563eb", "#10b981", "#10b981", "#f59e0b"],
            backgroundColor: ["#fffbeb", "#fffbeb", "#eff6ff", "#eff6ff", "#ecfdf5", "#ecfdf5", "#fffbeb"],
            color: ["#f59e0b", "#f59e0b", "#2563eb", "#2563eb", "#10b981", "#10b981", "#f59e0b"]
          }}
          transition={{ ...transition, times: [0, 0.2, 0.3, 0.5, 0.6, 0.9, 1] }}
        >
          {/* Warning Icon */}
          <motion.span
            className="absolute font-bold"
            animate={{ scale: [1, 1, 0, 0, 0, 0, 1], opacity: [1, 1, 0, 0, 0, 0, 1] }}
            transition={{ ...transition, times: [0, 0.2, 0.25, 0.5, 0.6, 0.95, 1] }}
          >
            ⚠
          </motion.span>
          
          {/* Processing Gear */}
          <motion.span
            className="absolute text-xl"
            animate={{ 
              scale: [0, 0, 1, 1, 0, 0, 0], 
              opacity: [0, 0, 1, 1, 0, 0, 0],
              rotate: [0, 0, 0, 180, 180, 0, 0]
            }}
            transition={{ ...transition, times: [0, 0.25, 0.3, 0.55, 0.6, 0.95, 1] }}
          >
            ⚙
          </motion.span>

          {/* Success Check */}
          <motion.span
            className="absolute font-bold"
            animate={{ scale: [0, 0, 0, 0, 1, 1, 0], opacity: [0, 0, 0, 0, 1, 1, 0] }}
            transition={{ ...transition, times: [0, 0.25, 0.3, 0.55, 0.6, 0.9, 0.95] }}
          >
            ✓
          </motion.span>
        </motion.div>
        
        {/* Status Text */}
        <div className="h-4 relative flex items-center justify-center">
          <motion.span
            className="absolute text-[10px] font-bold tracking-widest text-amber-500 uppercase"
            animate={{ opacity: [1, 1, 0, 0, 0, 0, 1] }}
            transition={{ ...transition, times: [0, 0.2, 0.25, 0.5, 0.6, 0.95, 1] }}
          >
            Failed
          </motion.span>
          <motion.span
            className="absolute text-[10px] font-bold tracking-widest text-primary uppercase"
            animate={{ opacity: [0, 0, 1, 1, 0, 0, 0] }}
            transition={{ ...transition, times: [0, 0.25, 0.3, 0.55, 0.6, 0.95, 1] }}
          >
            Repairing
          </motion.span>
          <motion.span
            className="absolute text-[10px] font-bold tracking-widest text-emerald-500 uppercase"
            animate={{ opacity: [0, 0, 0, 0, 1, 1, 0] }}
            transition={{ ...transition, times: [0, 0.25, 0.3, 0.55, 0.6, 0.9, 0.95] }}
          >
            Resolved
          </motion.span>
        </div>
      </div>
    </div>
  );
}
