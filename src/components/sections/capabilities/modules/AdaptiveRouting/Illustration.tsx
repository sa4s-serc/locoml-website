import { motion } from 'framer-motion';

export function AdaptiveRoutingIllustration() {
  const duration = 8; // 8 seconds to cover two 4-second routes
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono pb-2">
      <div className="relative w-40 h-24">
        
        {/* Input Node */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-200 rounded-sm z-10" />
        
        {/* Connection to Decision */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-[1.5px] bg-slate-200 z-0" />

        {/* Decision Node */}
        <div className="absolute left-14 top-1/2 -translate-y-1/2 w-6 h-6 border-[1.5px] border-primary bg-white rotate-45 z-10 flex items-center justify-center" />
        
        {/* Connection to Model A (Top) */}
        <div className="absolute left-[70px] top-4 w-12 h-[1.5px] bg-slate-200 z-0 origin-left rotate-[-25deg]" />

        {/* Connection to Model B (Bottom) */}
        <div className="absolute left-[70px] bottom-4 w-12 h-[1.5px] bg-slate-200 z-0 origin-left rotate-[25deg]" />

        {/* Model A */}
        <motion.div 
          className="absolute right-0 top-0 w-8 h-8 rounded border-[1.5px] border-slate-300 bg-white z-10 flex items-center justify-center"
          animate={{ 
            borderColor: ["#cbd5e1", "#cbd5e1", "#2563eb", "#2563eb", "#cbd5e1", "#cbd5e1", "#cbd5e1"],
            backgroundColor: ["#ffffff", "#ffffff", "#eff6ff", "#eff6ff", "#ffffff", "#ffffff", "#ffffff"]
          }}
          transition={{ ...transition, times: [0, 0.15, 0.2, 0.45, 0.5, 0.95, 1] }}
        >
          <span className="text-[10px] text-slate-400">A</span>
        </motion.div>

        {/* Model B */}
        <motion.div 
          className="absolute right-0 bottom-0 w-8 h-8 rounded border-[1.5px] border-slate-300 bg-white z-10 flex items-center justify-center"
          animate={{ 
            borderColor: ["#cbd5e1", "#cbd5e1", "#cbd5e1", "#cbd5e1", "#cbd5e1", "#2563eb", "#2563eb"],
            backgroundColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#eff6ff", "#eff6ff"]
          }}
          transition={{ ...transition, times: [0, 0.45, 0.5, 0.65, 0.7, 0.95, 1] }}
        >
          <span className="text-[10px] text-slate-400">B</span>
        </motion.div>

        {/* Animated Active Line A */}
        <div className="absolute left-[70px] top-4 w-12 h-[1.5px] bg-transparent z-10 origin-left rotate-[-25deg] overflow-hidden">
          <motion.div 
            className="w-full h-full bg-primary"
            animate={{ x: ["-100%", "-100%", "0%", "100%", "100%", "-100%", "-100%"] }}
            transition={{ ...transition, times: [0, 0.1, 0.2, 0.3, 0.5, 0.51, 1] }}
          />
        </div>

        {/* Animated Active Line B */}
        <div className="absolute left-[70px] bottom-4 w-12 h-[1.5px] bg-transparent z-10 origin-left rotate-[25deg] overflow-hidden">
          <motion.div 
            className="w-full h-full bg-primary"
            animate={{ x: ["-100%", "-100%", "-100%", "-100%", "0%", "100%", "100%"] }}
            transition={{ ...transition, times: [0, 0.5, 0.6, 0.7, 0.8, 0.95, 1] }}
          />
        </div>

        {/* Input Dot */}
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full z-20"
          animate={{ 
            x: [0, 56, 56, 0, 0, 56, 56, 0],
            opacity: [0, 1, 0, 0, 0, 1, 0, 0]
          }}
          transition={{ ...transition, times: [0, 0.1, 0.11, 0.49, 0.5, 0.6, 0.61, 1] }}
        />

        {/* Labels */}
        <div className="absolute -top-4 right-1 text-[8px] font-bold text-slate-400 uppercase">Faster</div>
        <div className="absolute -bottom-4 right-0 text-[8px] font-bold text-slate-400 uppercase">Accurate</div>
      </div>
    </div>
  );
}
