import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ArchitectureLayer as LayerConfig } from '@/config/architecture.config';
import { Icons } from '@/constants/icons';
import { useArchitecture } from './ArchitectureContext';

export function ArchitectureNode({ 
  label, 
  syncId,
  variant = 'default' 
}: { 
  label: string, 
  syncId?: string,
  variant?: 'default' | 'execution' | 'storage' 
}) {
  const { activeSyncId } = useArchitecture();
  const isActive = activeSyncId && activeSyncId === syncId;

  // Determine colors based on variant and active state
  let baseClasses = "border-slate-200 bg-white text-slate-600 shadow-sm";
  let activeClasses = "border-primary/50 bg-primary/5 text-primary shadow-primary/10 shadow-md ring-1 ring-primary/20";
  
  if (variant === 'execution') {
    activeClasses = "border-emerald-400/50 bg-emerald-50 text-emerald-700 shadow-emerald-400/10 shadow-md ring-1 ring-emerald-400/20";
  } else if (variant === 'storage') {
    activeClasses = "border-indigo-400/50 bg-indigo-50 text-indigo-700 shadow-indigo-400/10 shadow-md ring-1 ring-indigo-400/20";
  }

  return (
    <div 
      className={cn(
        "flex h-12 w-full items-center justify-center rounded-xl border px-3 text-center transition-all duration-300",
        isActive ? activeClasses : baseClasses
      )}
    >
      <span className="font-mono text-[10px] sm:text-xs font-medium tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function ArchitectureLayer({ 
  layer, 
  isMobileAccordion = true,
  variant = 'default'
}: { 
  layer: LayerConfig, 
  isMobileAccordion?: boolean,
  variant?: 'default' | 'execution' | 'storage'
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative w-full rounded-2xl border border-slate-200/60 bg-slate-50/30 p-4 sm:p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-200/50">
      
      {/* Header (Clickable on Mobile) */}
      <div 
        className={cn(
          "flex items-center justify-between",
          isMobileAccordion ? "cursor-pointer lg:cursor-default" : ""
        )}
        onClick={() => isMobileAccordion && setIsExpanded(!isExpanded)}
      >
        <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-500">
          {layer.title}
        </h4>
        {isMobileAccordion && (
          <Icons.ChevronDown className={cn(
            "h-4 w-4 text-slate-400 transition-transform lg:hidden",
            isExpanded ? "rotate-180" : ""
          )} />
        )}
      </div>

      {/* Grid Content */}
      <div className={cn(
        "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
        isMobileAccordion ? "hidden lg:grid" : "grid"
      )}>
        {layer.nodes.map(node => (
          <ArchitectureNode 
            key={node.id} 
            label={node.label} 
            syncId={node.syncId}
            variant={variant} 
          />
        ))}
      </div>

      {/* Mobile Accordion Content */}
      {isMobileAccordion && (
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {layer.nodes.map(node => (
                  <ArchitectureNode 
                    key={node.id} 
                    label={node.label} 
                    syncId={node.syncId}
                    variant={variant} 
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      
    </div>
  );
}
