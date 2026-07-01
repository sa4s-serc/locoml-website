import { motion } from 'framer-motion';

export function AdaptiveRoutingIllustration() {
  const duration = 8;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono pb-2">
      <div className="relative w-40 h-24">
        
        {/* Model A Base */}
        <motion.div 
          className="absolute left-2 top-2 w-24 h-[36px] rounded border-[1.5px] border-slate-300 bg-white z-10 flex flex-col p-1.5"
          animate={{ 
            borderColor: ["#cbd5e1", "#cbd5e1", "#f87171", "#f87171", "#cbd5e1"],
            backgroundColor: ["#ffffff", "#ffffff", "#fef2f2", "#fef2f2", "#ffffff"],
            opacity: [1, 1, 0.8, 0.8, 1]
          }}
          transition={{ ...transition, times: [0, 0.35, 0.45, 0.9, 1] }}
        >
          <div className="flex justify-between items-center w-full mb-1">
            <span className="text-[8px] text-slate-500 font-bold uppercase">Model A</span>
            <motion.div 
              className="text-red-500 text-[10px] font-bold"
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ ...transition, times: [0, 0.35, 0.4, 0.9, 1] }}
            >
              ⚠
            </motion.div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-slate-400"
              animate={{ 
                width: ["99%", "95%", "88%", "81%", "74%", "74%", "99%"],
                backgroundColor: ["#94a3b8", "#94a3b8", "#94a3b8", "#f87171", "#ef4444", "#ef4444", "#94a3b8"]
              }}
              transition={{ ...transition, times: [0, 0.1, 0.2, 0.3, 0.4, 0.9, 1] }}
            />
          </div>
        </motion.div>

        {/* Model B Base (Fades in) */}
        <motion.div 
          className="absolute left-2 bottom-2 w-24 h-[36px] rounded border-[1.5px] border-primary bg-white z-10 flex flex-col p-1.5 shadow-sm"
          animate={{ 
            opacity: [0, 0, 1, 1, 0],
            y: [5, 5, 0, 0, 5]
          }}
          transition={{ ...transition, times: [0, 0.5, 0.6, 0.9, 1] }}
        >
          <div className="flex justify-between items-center w-full mb-1">
            <span className="text-[8px] text-primary font-bold uppercase">Model B</span>
            <span className="text-[8px] text-slate-400 font-bold">98%</span>
          </div>
          <div className="w-full bg-blue-50 h-1.5 rounded-full overflow-hidden">
             <div className="h-full bg-primary w-[98%]" />
          </div>
        </motion.div>

        {/* Routing Diamond & Connection */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center">
           {/* Top line to A */}
           <div className="absolute right-4 bottom-0 w-8 h-[1.5px] bg-slate-200 rotate-[-50deg] origin-right" />
           {/* Bottom line to B */}
           <div className="absolute right-4 top-0 w-8 h-[1.5px] bg-slate-200 rotate-[50deg] origin-right" />
           
           {/* Animated Pulse to B */}
           <div className="absolute right-4 top-0 w-8 h-[1.5px] bg-transparent rotate-[50deg] origin-right overflow-hidden">
              <motion.div 
                className="w-full h-full bg-primary"
                animate={{ x: ["100%", "100%", "-100%", "-100%", "100%"] }}
                transition={{ ...transition, times: [0, 0.45, 0.55, 0.9, 1] }}
              />
           </div>

           {/* The router diamond */}
           <motion.div 
             className="w-5 h-5 border-[1.5px] border-slate-300 bg-white rotate-45 z-10"
             animate={{
               borderColor: ["#cbd5e1", "#cbd5e1", "#2563eb", "#2563eb", "#cbd5e1"],
               backgroundColor: ["#ffffff", "#ffffff", "#eff6ff", "#eff6ff", "#ffffff"]
             }}
             transition={{ ...transition, times: [0, 0.4, 0.45, 0.9, 1] }}
           />
        </div>

        {/* Rerouted Tag */}
        <motion.div 
          className="absolute right-0 bottom-2 bg-white flex items-center gap-1"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.65, 0.7, 0.9, 1] }}
        >
          <span className="text-green-500 text-[9px] font-bold">✓</span>
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Rerouted</span>
        </motion.div>

      </div>
    </div>
  );
}
