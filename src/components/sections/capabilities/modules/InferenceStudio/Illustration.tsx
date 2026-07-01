import { motion } from 'framer-motion';

export function InferenceStudioIllustration() {
  const duration = 6;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono py-4">
      <div className="relative w-16 h-32 flex flex-col items-center justify-between">
        
        {/* Sample Node */}
        <div className="w-6 h-4 bg-slate-200 rounded-sm z-10 border border-slate-300" />
        
        {/* Middle Predict Node */}
        <div className="w-8 h-8 rounded border-[1.5px] border-primary bg-white z-10 flex items-center justify-center">
           <span className="text-[10px] text-primary">⚙</span>
        </div>
        
        {/* Result Node */}
        <motion.div 
          className="w-6 h-4 bg-white rounded-sm z-10 border border-slate-300"
          animate={{ 
            borderColor: ["#cbd5e1", "#cbd5e1", "#10b981", "#10b981", "#cbd5e1"],
            backgroundColor: ["#ffffff", "#ffffff", "#ecfdf5", "#ecfdf5", "#ffffff"]
          }}
          transition={{ ...transition, times: [0, 0.7, 0.75, 0.95, 1] }}
        />

        {/* Track Line */}
        <div className="absolute top-2 bottom-2 left-1/2 w-[1.5px] bg-slate-100 -translate-x-1/2 z-0" />

        {/* The Traveling Data Dot */}
        <motion.div 
          className="absolute left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 z-20"
          animate={{ 
            top: ["0px", "0px", "60px", "60px", "120px", "120px", "0px"],
            opacity: [0, 1, 1, 0, 1, 0, 0]
          }}
          transition={{ ...transition, times: [0, 0.05, 0.2, 0.25, 0.7, 0.75, 1] }}
        />

        {/* Confidence Overlay */}
        <motion.div 
          className="absolute top-[52px] left-12 bg-white px-1.5 py-0.5 rounded shadow-sm border border-slate-100 text-[9px] font-bold text-primary tracking-wider"
          animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ ...transition, times: [0, 0.3, 0.35, 0.6, 0.65, 1] }}
        >
          99.8%
        </motion.div>

        {/* Result Text */}
        <motion.div 
          className="absolute bottom-0 right-10 text-[9px] font-bold text-emerald-500 tracking-wider uppercase"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.75, 0.8, 0.95, 1] }}
        >
          ✓ Valid
        </motion.div>

      </div>
    </div>
  );
}
