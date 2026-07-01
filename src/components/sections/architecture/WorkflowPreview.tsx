import { useEffect, useRef, useState, Fragment } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/utils/cn';
import { architectureConfig } from '@/config/architecture.config';
import { useArchitecture } from './ArchitectureContext';

export function WorkflowPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });
  const { setActiveSyncId } = useArchitecture();
  const { workflow } = architectureConfig;
  
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let isActive = true;

    const runSequence = async () => {
      if (!isInView) {
        setActiveIndex(-1);
        setActiveSyncId(null);
        return;
      }

      for (let i = 0; i < workflow.length; i++) {
        if (!isActive || !isInView) break;
        
        setActiveIndex(i);
        setActiveSyncId(workflow[i].syncId || null);
        
        // Wait on this node for a bit
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      if (isActive && isInView) {
        // Reset and pause before looping
        setActiveIndex(-1);
        setActiveSyncId(null);
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (isActive && isInView) {
          runSequence();
        }
      }
    };

    if (isInView) {
      runSequence();
    } else {
      setActiveIndex(-1);
      setActiveSyncId(null);
    }

    return () => {
      isActive = false;
      setActiveSyncId(null);
    };
  }, [isInView, workflow, setActiveSyncId]);

  return (
    <div 
      ref={containerRef}
      className="flex h-full w-full flex-col rounded-3xl border border-slate-200/60 bg-slate-50/30 p-6 sm:p-8"
    >
      <div className="mb-8 text-center">
        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
          LoCoML Workflow
        </h4>
      </div>

      <div className="relative flex flex-1 flex-col items-center w-full">
        {workflow.map((step, idx) => {
          const isPast = activeIndex > idx;
          const isCurrent = activeIndex === idx;
          
          return (
            <Fragment key={step.id}>
              <motion.div 
                className="flex h-10 shrink-0 w-full max-w-[200px] items-center justify-center rounded-xl border text-center z-10 transition-colors duration-500"
                initial={false}
                animate={
                  isCurrent
                    ? {
                        backgroundColor: "#2563eb",
                        borderColor: "#2563eb",
                        color: "#ffffff",
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(37,99,235,0.4)"
                      }
                    : isPast
                    ? {
                        backgroundColor: "rgba(37, 99, 235, 0.05)",
                        borderColor: "rgba(37, 99, 235, 0.2)",
                        color: "rgba(37, 99, 235, 0.8)",
                        scale: 1,
                        boxShadow: "0 0 0px rgba(37,99,235,0)"
                      }
                    : {
                        backgroundColor: "#ffffff",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                        scale: 1,
                        boxShadow: "0 0 0px rgba(37,99,235,0)"
                      }
                }
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <span className="font-mono text-[10px] sm:text-xs font-medium tracking-wide">
                  {step.label}
                </span>
              </motion.div>
              
              {idx < workflow.length - 1 && (
                <div className="relative flex w-full flex-1 flex-col items-center justify-center py-1 min-h-[24px]">
                  {/* Subtle SVG connector taking exactly the space between nodes */}
                  <svg 
                    width="12" 
                    height="100%" 
                    preserveAspectRatio="none"
                    className="overflow-visible min-h-[100%]"
                  >
                    {/* The base line goes down to almost the bottom */}
                    <line 
                      x1="6" y1="0" x2="6" y2="calc(100% - 4px)" 
                      className={cn("transition-colors duration-500", isPast ? "stroke-primary" : "stroke-slate-200")} 
                      strokeWidth="2"
                    />
                    {/* The subtle integrated arrowhead */}
                    <polygon 
                      points="3,calc(100% - 5px) 9,calc(100% - 5px) 6,100%" 
                      className={cn("transition-colors duration-500", isPast ? "fill-primary" : "fill-slate-300")} 
                    />
                    
                    {/* The glowing data pulse */}
                    <motion.circle
                      cx="6"
                      cy="0"
                      r="3"
                      className="fill-primary"
                      style={{ filter: 'drop-shadow(0px 0px 4px rgba(37,99,235,0.8))' }}
                      initial={{ opacity: 0, cy: "0%" }}
                      animate={
                        isCurrent 
                          ? { opacity: [0, 1, 1, 0], cy: ["0%", "20%", "80%", "100%"] } 
                          : { opacity: 0, cy: "0%" }
                      }
                      transition={
                        isCurrent 
                          ? { duration: 1, ease: "linear", times: [0, 0.1, 0.9, 1] } 
                          : { duration: 0 }
                      }
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
