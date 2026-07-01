import { motion } from 'framer-motion';

export function ModelHubIllustration() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center group-hover:bg-slate-50/80 transition-colors duration-500 py-4">
      <div className="flex flex-col items-start font-mono text-slate-300 text-sm leading-relaxed relative">
        <motion.div whileHover={{ color: "#2563eb" }}>□ global-registry</motion.div>
        
        {/* Connection lines */}
        <div className="absolute left-1.5 top-6 bottom-4 w-[2px] bg-slate-200 z-0" />
        <motion.div 
          className="absolute left-1.5 top-6 w-[2px] bg-primary z-0 origin-top"
          initial={{ height: 0 }}
          whileHover={{ height: "100%", transition: { duration: 0.5 } }}
        />

        <div className="flex relative z-10 bg-transparent pl-4 mt-1">
          <div className="absolute left-0 top-1/2 w-4 h-[2px] bg-slate-200" />
          <motion.div 
            className="absolute left-0 top-1/2 h-[2px] bg-primary origin-left"
            initial={{ width: 0 }}
            whileHover={{ width: 16, transition: { delay: 0.2 } }}
          />
          <motion.div whileHover={{ color: "#2563eb", transition: { delay: 0.3 } }}>□ team-models</motion.div>
        </div>

        <div className="flex relative z-10 bg-transparent pl-4 mt-2">
          <div className="absolute left-0 top-1/2 w-4 h-[2px] bg-slate-200" />
          <motion.div 
            className="absolute left-0 top-1/2 h-[2px] bg-primary origin-left"
            initial={{ width: 0 }}
            whileHover={{ width: 16, transition: { delay: 0.4 } }}
          />
          <motion.div whileHover={{ color: "#10b981", transition: { delay: 0.5 } }}>□ public-models</motion.div>
        </div>
      </div>
    </div>
  );
}
