import { motion } from 'framer-motion';

export function PipelineBuilderIllustration() {
  const duration = 6; // 6 second loop
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-6 px-4">
      
      {/* Top line indicating visual drag and drop */}
      <div className="w-full max-w-[240px] flex items-center justify-between relative mt-4">
        {/* Background Connection line */}
        <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-slate-200 -translate-y-1/2 z-0" />
        
        {/* Animated connecting line 1 */}
        <motion.div 
          className="absolute top-1/2 left-0 w-1/2 h-[1.5px] bg-primary -translate-y-1/2 z-0 origin-left"
          animate={{ scaleX: [0, 0, 1, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.1, 0.15, 0.9, 0.95, 1] }}
        />

        {/* Animated connecting line 2 */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-1/2 h-[1.5px] bg-primary -translate-y-1/2 z-0 origin-left"
          animate={{ scaleX: [0, 0, 1, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.2, 0.25, 0.9, 0.95, 1] }}
        />

        {/* Node 1 */}
        <motion.div 
          className="w-8 h-8 rounded-full border-[1.5px] border-primary bg-blue-50 z-10 flex items-center justify-center relative"
          animate={{ scale: [0, 1, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.05, 0.9, 0.95, 1] }}
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
        </motion.div>

        {/* Node 2 (Center) */}
        <motion.div 
          className="w-8 h-8 rounded-full border-[1.5px] border-primary bg-blue-50 z-10 flex items-center justify-center relative"
          animate={{ scale: [0, 0, 1, 1, 1, 0], opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.15, 0.2, 0.9, 0.95, 1] }}
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
          
          {/* Vertical connector */}
          <div className="absolute top-full left-1/2 w-[1.5px] h-8 bg-slate-200 -translate-x-1/2" />
          <motion.div 
            className="absolute top-full left-1/2 w-[1.5px] h-8 bg-primary -translate-x-1/2 origin-top"
            animate={{ scaleY: [0, 0, 1, 1, 1, 0] }}
            transition={{ ...transition, times: [0, 0.3, 0.35, 0.9, 0.95, 1] }}
          />
          {/* Bottom Node */}
          <motion.div 
            className="absolute top-[calc(100%+32px)] left-1/2 w-8 h-8 rounded-full border-[1.5px] border-primary bg-blue-50 -translate-x-1/2 flex items-center justify-center"
            animate={{ scale: [0, 0, 1, 1, 1, 0], opacity: [0, 0, 1, 1, 1, 0] }}
            transition={{ ...transition, times: [0, 0.35, 0.4, 0.9, 0.95, 1] }}
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>

        {/* Node 3 */}
        <motion.div 
          className="w-8 h-8 rounded-full border-[1.5px] border-primary bg-blue-50 z-10 flex items-center justify-center relative"
          animate={{ scale: [0, 0, 1, 1, 1, 0], opacity: [0, 0, 1, 1, 1, 0] }}
          transition={{ ...transition, times: [0, 0.25, 0.3, 0.9, 0.95, 1] }}
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
        </motion.div>
      </div>

      {/* Mini App Status Panel */}
      <div className="w-full max-w-[280px] bg-white rounded-xl border border-slate-200/60 shadow-sm p-4 mt-16 mb-2 z-20">
        <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-widest">Status</span>
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full"
              animate={{ backgroundColor: ["#94a3b8", "#94a3b8", "#10b981", "#10b981", "#94a3b8"] }}
              transition={{ ...transition, times: [0, 0.7, 0.71, 0.95, 1] }}
            />
            <motion.span
              className="text-slate-400"
              animate={{ display: ["block", "block", "none", "none", "block"] }}
              transition={{ ...transition, times: [0, 0.7, 0.71, 0.95, 1] }}
            >
              Building
            </motion.span>
            <motion.span
              className="text-emerald-500"
              animate={{ display: ["none", "none", "block", "block", "none"] }}
              transition={{ ...transition, times: [0, 0.7, 0.71, 0.95, 1] }}
            >
              Ready
            </motion.span>
          </div>
        </div>
        <div className="space-y-2 font-mono">
          {[
            { label: 'Dataset', delayObj: { appear: 0.45, active: 0.5 } },
            { label: 'Training', delayObj: { appear: 0.55, active: 0.6 } },
            { label: 'Validation', delayObj: { appear: 0.65, active: 0.7 } },
            { label: 'Deployment', delayObj: { appear: 0.75, active: 0.8 } }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <motion.span 
                className="text-[11px] font-medium"
                animate={{ color: ["#94a3b8", "#94a3b8", "#475569", "#475569", "#94a3b8"] }}
                transition={{ ...transition, times: [0, item.delayObj.appear, item.delayObj.active, 0.95, 1] }}
              >
                {item.label}
              </motion.span>
              <motion.div
                className="text-[10px]"
                animate={{ 
                  opacity: [0, 0, 1, 1, 0],
                  color: ["#94a3b8", "#94a3b8", "#2563eb", "#2563eb", "#94a3b8"] 
                }}
                transition={{ ...transition, times: [0, item.delayObj.appear, item.delayObj.active, 0.95, 1] }}
              >
                ✓
              </motion.div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
