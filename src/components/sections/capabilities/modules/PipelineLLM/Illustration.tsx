import { motion } from 'framer-motion';

export function PipelineLLMIllustration() {
  const duration = 7;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono pb-2">
      <div className="relative w-40 h-24">
        
        {/* Prompt Input Box */}
        <motion.div 
          className="absolute left-0 top-1 w-24 h-6 border-[1.5px] border-slate-300 rounded bg-white z-20 flex items-center px-1.5 gap-1 shadow-sm"
          animate={{
            y: [0, 0, 18, 18, 0, 0],
            x: [0, 0, 32, 32, 0, 0],
            opacity: [1, 1, 0, 0, 0, 1],
            scale: [1, 1, 0.8, 0.8, 1, 1]
          }}
          transition={{ ...transition, times: [0, 0.25, 0.35, 0.8, 0.9, 1] }}
        >
          <span className="text-[8px] text-slate-600">Predict prices</span>
          <motion.div 
            className="w-[1.5px] h-2.5 bg-primary"
            animate={{ opacity: [1, 0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>

        {/* LLM Node */}
        <motion.div 
          className="absolute left-[36px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg border-[1.5px] border-primary bg-white z-10 flex flex-col items-center justify-center overflow-hidden"
          animate={{
            backgroundColor: ["#ffffff", "#ffffff", "#eff6ff", "#eff6ff", "#ffffff", "#ffffff"],
            scale: [1, 1, 1.05, 1.05, 1, 1]
          }}
          transition={{ ...transition, times: [0, 0.3, 0.35, 0.5, 0.6, 1] }}
        >
          <span className="text-[9px] font-bold text-primary">LLM</span>
        </motion.div>

        {/* Connecting Line to Pipeline */}
        <div className="absolute left-[64px] top-1/2 -translate-y-1/2 w-12 h-[1.5px] bg-slate-200 z-0 overflow-hidden">
          <motion.div 
            className="w-full h-full bg-primary"
            animate={{ x: ["-100%", "-100%", "100%", "100%", "-100%"] }}
            transition={{ ...transition, times: [0, 0.45, 0.55, 0.9, 1] }}
          />
        </div>

        {/* Output Pipeline Base Container */}
        <motion.div 
          className="absolute right-0 top-3 bottom-3 w-[56px] border-[1.5px] border-dashed border-slate-300 rounded-lg flex flex-col items-center py-1.5 gap-2"
          animate={{
            borderColor: ["#cbd5e1", "#cbd5e1", "#2563eb", "#2563eb", "#cbd5e1", "#cbd5e1"],
            backgroundColor: ["transparent", "transparent", "#ffffff", "#ffffff", "transparent", "transparent"],
          }}
          transition={{ ...transition, times: [0, 0.55, 0.6, 0.8, 0.9, 1] }}
        >
          {/* Node 1 */}
          <motion.div 
            className="w-5 h-3 border-[1.5px] border-slate-400 rounded-full"
            animate={{ opacity: [0, 0, 1, 1, 0], backgroundColor: ["transparent", "transparent", "#f8fafc", "#f8fafc", "transparent"] }}
            transition={{ ...transition, times: [0, 0.55, 0.6, 0.8, 0.9] }}
          />
          {/* Node 2 */}
          <motion.div 
            className="w-5 h-3 border-[1.5px] border-slate-400 rounded-full"
            animate={{ opacity: [0, 0, 1, 1, 0], backgroundColor: ["transparent", "transparent", "#f8fafc", "#f8fafc", "transparent"] }}
            transition={{ ...transition, times: [0, 0.6, 0.65, 0.8, 0.9] }}
          />
          {/* Node 3 */}
          <motion.div 
            className="w-5 h-3 border-[1.5px] border-slate-400 rounded-full"
            animate={{ opacity: [0, 0, 1, 1, 0], backgroundColor: ["transparent", "transparent", "#eff6ff", "#eff6ff", "transparent"], borderColor: ["#94a3b8", "#94a3b8", "#3b82f6", "#3b82f6", "#94a3b8"] }}
            transition={{ ...transition, times: [0, 0.65, 0.7, 0.8, 0.9] }}
          />
          
          {/* Vertical Connectors */}
          <motion.div 
            className="absolute top-[17px] w-[1.5px] h-2 bg-slate-300"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ ...transition, times: [0, 0.6, 0.62, 0.8, 0.9] }}
          />
          <motion.div 
            className="absolute top-[37px] w-[1.5px] h-2 bg-slate-300"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ ...transition, times: [0, 0.65, 0.67, 0.8, 0.9] }}
          />
        </motion.div>

        {/* Generated Tag */}
        <motion.div 
          className="absolute right-0 -bottom-1 w-[56px] flex justify-center items-center gap-1 bg-white"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.75, 0.8, 0.85, 0.9] }}
        >
           <span className="text-green-500 text-[8px] font-bold">✓</span>
           <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Generated</span>
        </motion.div>

      </div>
    </div>
  );
}
