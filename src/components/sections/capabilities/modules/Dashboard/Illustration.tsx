import { motion } from 'framer-motion';

export function DashboardIllustration() {
  const duration = 5;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
  };

  const stepsTiming = [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1];

  const rows = [
    {
      name: 'Inputs',
      dotColors: ["#2563eb", "#2563eb", "#10b981", "#10b981", "#10b981", "#10b981", "#10b981", "#10b981", "#2563eb"],
      text: ["Configured", "Configured", "✓", "✓", "✓", "✓", "✓", "✓", "Configured"],
      textColors: ["#64748b", "#64748b", "#10b981", "#10b981", "#10b981", "#10b981", "#10b981", "#10b981", "#64748b"],
      bgColors: ["#f8fafc", "#f8fafc", "#ecfdf5", "#ecfdf5", "#ecfdf5", "#ecfdf5", "#ecfdf5", "#ecfdf5", "#f8fafc"]
    },
    {
      name: 'Preprocessing',
      dotColors: ["#2563eb", "#2563eb", "#10b981", "#10b981", "#10b981", "#10b981", "#10b981", "#10b981", "#2563eb"],
      text: ["Configured", "Configured", "Running", "Running", "✓", "✓", "✓", "✓", "Configured"],
      textColors: ["#64748b", "#64748b", "#059669", "#059669", "#10b981", "#10b981", "#10b981", "#10b981", "#64748b"],
      bgColors: ["#f8fafc", "#f8fafc", "#d1fae5", "#d1fae5", "#ecfdf5", "#ecfdf5", "#ecfdf5", "#ecfdf5", "#f8fafc"]
    },
    {
      name: 'Regression',
      dotColors: ["#2563eb", "#2563eb", "#94a3b8", "#94a3b8", "#10b981", "#10b981", "#10b981", "#10b981", "#2563eb"],
      text: ["Configured", "Configured", "Waiting", "Waiting", "Running", "Running", "✓", "✓", "Configured"],
      textColors: ["#64748b", "#64748b", "#64748b", "#64748b", "#059669", "#059669", "#10b981", "#10b981", "#64748b"],
      bgColors: ["#f8fafc", "#f8fafc", "#f1f5f9", "#f1f5f9", "#d1fae5", "#d1fae5", "#ecfdf5", "#ecfdf5", "#f8fafc"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center font-mono py-4 px-6">
      <div className="w-full max-w-[220px] flex flex-col gap-3">
        {rows.map((row, idx) => (
          <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full"
                animate={{ backgroundColor: row.dotColors }}
                transition={{ ...transition, times: stepsTiming }}
              />
              <span className="text-[11px] text-slate-600 font-medium tracking-tight">{row.name}</span>
            </div>
            
            {/* Status Pill */}
            <motion.div 
              className="text-[9px] font-medium px-1.5 py-0.5 rounded tracking-wide w-[70px] text-center"
              animate={{ 
                backgroundColor: row.bgColors,
                color: row.textColors
              }}
              transition={{ ...transition, times: stepsTiming }}
            >
              {/* Note: We map text separately for fade effect, or just let React render it if it's identical text. Since framer motion doesn't interpolate inner text natively via animate prop, we will render multiple spans and crossfade them to make it smooth. */}
              <div className="relative w-full h-3 flex items-center justify-center">
                {[...new Set(row.text)].map((txt) => (
                  <motion.span 
                    key={txt}
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ 
                      opacity: row.text.map(t => t === txt ? 1 : 0)
                    }}
                    transition={{ ...transition, times: stepsTiming }}
                  >
                    {txt}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
