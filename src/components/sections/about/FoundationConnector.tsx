import React from 'react';
import { motion } from 'framer-motion';

export function FoundationConnector() {
  return (
    <div className="flex flex-col items-center justify-start my-2 relative h-24 md:h-32 w-full">
      {/* Continuous line growing down */}
      <motion.div
        variants={{
          hidden: { height: 0 },
          show: { height: '100%', transition: { duration: 0.6, ease: "easeInOut" } }
        }}
        className="w-[2px] bg-primary/20 absolute top-0"
      />
      
      {/* Glowing Node appearing halfway through */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          show: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.3, ease: "backOut" } }
        }}
        className="absolute top-1/2 -translate-y-1/2 z-10 w-[10px] h-[10px] rounded-full bg-primary shadow-[0_0_16px_rgba(47,107,255,0.8)]"
      >
        <div className="absolute inset-0 rounded-full bg-primary blur-[4px] opacity-60" />
      </motion.div>
    </div>
  );
}
