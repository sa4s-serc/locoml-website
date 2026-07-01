import { motion } from 'framer-motion';

export function StitchModelIllustration() {
  const duration = 8;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono pb-2">
      <div className="relative w-40 h-24">
        
        {/* Private Models Group (Top Left) */}
        <div className="absolute left-0 top-0 flex flex-col gap-1">
          <div className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-1">Private</div>
          <div className="flex gap-1">
            <div className="w-3 h-3 border-[1.5px] border-slate-300 rounded-[2px]" />
            <div className="w-3 h-3 border-[1.5px] border-slate-300 rounded-[2px]" />
          </div>
        </div>

        {/* Public Models Group (Bottom Left) */}
        <div className="absolute left-0 bottom-1 flex flex-col gap-1">
          <div className="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-1">Public</div>
          <div className="flex gap-1">
            <div className="w-3 h-3 border-[1.5px] border-slate-300 rounded-[2px]" />
            <div className="w-3 h-3 border-[1.5px] border-slate-300 rounded-[2px]" />
          </div>
        </div>

        {/* Connections to center */}
        <div className="absolute left-[34px] top-6 w-[42px] h-[1.5px] bg-slate-200 origin-left rotate-[28deg] z-0" />
        <div className="absolute left-[34px] bottom-7 w-[42px] h-[1.5px] bg-slate-200 origin-left rotate-[-28deg] z-0" />

        {/* Center Stitch Engine Diamond */}
        <motion.div 
          className="absolute left-[70px] top-1/2 -translate-y-1/2 w-6 h-6 border-[1.5px] border-slate-300 bg-white rotate-45 z-10 flex items-center justify-center"
          animate={{
            borderColor: ["#cbd5e1", "#cbd5e1", "#2563eb", "#2563eb", "#cbd5e1", "#cbd5e1"],
            backgroundColor: ["#ffffff", "#ffffff", "#eff6ff", "#eff6ff", "#ffffff", "#ffffff"]
          }}
          transition={{ ...transition, times: [0, 0.2, 0.25, 0.6, 0.7, 1] }}
        />

        {/* Connection to Result */}
        <div className="absolute left-[90px] top-1/2 -translate-y-1/2 w-8 h-[1.5px] bg-slate-200 z-0" />

        {/* Animated Pulses from Private/Public */}
        <div className="absolute left-[34px] top-6 w-[42px] h-[1.5px] bg-transparent origin-left rotate-[28deg] z-10 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-primary"
            animate={{ x: ["-100%", "-100%", "100%", "100%", "-100%"] }}
            transition={{ ...transition, times: [0, 0.1, 0.25, 0.9, 1] }}
          />
        </div>
        <div className="absolute left-[34px] bottom-7 w-[42px] h-[1.5px] bg-transparent origin-left rotate-[-28deg] z-10 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-primary"
            animate={{ x: ["-100%", "-100%", "100%", "100%", "-100%"] }}
            transition={{ ...transition, times: [0, 0.15, 0.3, 0.9, 1] }}
          />
        </div>

        {/* Result Model Card */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-[44px] bg-white border-[1.5px] border-primary rounded shadow-sm z-20 flex flex-col items-center justify-center pt-[2px]"
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0.95, 0.95, 1, 1, 0.95],
          }}
          transition={{ ...transition, times: [0, 0.35, 0.4, 0.85, 0.9] }}
        >
          <div className="w-6 h-6 bg-blue-50 border-[1.5px] border-primary rounded-[2px] mb-[4px] flex items-center justify-center">
            <span className="text-[10px] text-primary font-bold">M</span>
          </div>
          <div className="flex items-center gap-1 text-[7px] font-bold text-slate-500">
            <motion.span 
              className="text-green-500"
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ ...transition, times: [0, 0.45, 0.5, 0.85, 0.9] }}
            >✓</motion.span>
            Stitched
          </div>
        </motion.div>

      </div>
    </div>
  );
}
