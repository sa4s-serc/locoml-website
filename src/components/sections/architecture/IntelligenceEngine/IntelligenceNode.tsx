import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { useArchitecture } from '../ArchitectureContext';
import { ArchitectureNode as NodeConfig } from '@/config/architecture.config';

export function IntelligenceNode({ node }: { node: NodeConfig }) {
  const [isHovered, setIsHovered] = useState(false);
  const { activeSyncId } = useArchitecture();
  const isActive = activeSyncId && activeSyncId === node.syncId;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150); // slight delay to make it feel less jerky
  };

  return (
    <div 
      className="relative flex w-full justify-center z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={cn(
          "flex h-12 w-full cursor-default items-center justify-center rounded-xl border px-3 text-center transition-all duration-300",
          isActive 
            ? "border-primary/60 bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]" 
            : "border-primary/20 bg-white text-heading shadow-sm hover:-translate-y-[2px] hover:border-primary/40 hover:shadow-md"
        )}
      >
        <span className="font-mono text-[10px] sm:text-xs font-medium tracking-wide">
          {node.label}
        </span>
      </div>

      <AnimatePresence>
        {isHovered && node.description && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 mb-3 w-[240px] -translate-x-1/2 pointer-events-none z-50"
          >
            <div className="rounded-xl border border-primary/10 bg-white p-4 shadow-xl shadow-primary/5">
              <h5 className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                {node.label}
              </h5>
              <p className="text-xs leading-relaxed text-slate-600">
                {node.description}
              </p>
            </div>
            {/* Tooltip triangle pointer */}
            <div className="absolute left-1/2 top-full -mt-[1px] h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-primary/10 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
