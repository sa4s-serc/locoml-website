import { motion } from 'framer-motion';

export function DeploymentIllustration() {
  const duration = 6;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  const steps = [
    { label: 'Build', icon: '⚡', timeOn: 0.1, timeOff: 0.95 },
    { label: 'Package', icon: '📦', timeOn: 0.25, timeOff: 0.95 },
    { label: 'Deploy', icon: '☁', timeOn: 0.4, timeOff: 0.95 },
    { label: 'Live', icon: '✓', timeOn: 0.55, timeOff: 0.95 }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-mono py-4">
      <div className="w-32 flex flex-col relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-slate-100 before:z-0">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex items-center h-8 z-10">
            {/* Connecting active line */}
            {idx > 0 && (
              <motion.div 
                className="absolute left-3 top-[-16px] w-[1.5px] h-4 bg-primary origin-top"
                animate={{ scaleY: [0, 0, 1, 1, 0] }}
                transition={{ ...transition, times: [0, step.timeOn - 0.1, step.timeOn, step.timeOff, 1] }}
              />
            )}
            
            {/* Status dot */}
            <motion.div 
              className="w-6 h-6 rounded border-[1.5px] flex items-center justify-center bg-white shadow-sm shrink-0"
              animate={{ 
                borderColor: ["#e2e8f0", "#e2e8f0", "#2563eb", "#2563eb", "#e2e8f0"],
                color: ["#94a3b8", "#94a3b8", "#2563eb", "#2563eb", "#94a3b8"]
              }}
              transition={{ ...transition, times: [0, step.timeOn, step.timeOn + 0.05, step.timeOff, 1] }}
            >
              <span className="text-[10px]">{step.icon}</span>
            </motion.div>
            
            {/* Label */}
            <motion.span 
              className="ml-3 text-[10px] font-medium"
              animate={{ color: ["#94a3b8", "#94a3b8", "#1e293b", "#1e293b", "#94a3b8"] }}
              transition={{ ...transition, times: [0, step.timeOn, step.timeOn + 0.05, step.timeOff, 1] }}
            >
              {step.label}
            </motion.span>

            {/* Final Live Indicator */}
            {step.label === 'Live' && (
              <motion.div 
                className="absolute right-0 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ ...transition, times: [0, step.timeOn + 0.1, step.timeOn + 0.15, step.timeOff, 1] }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
