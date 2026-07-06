import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { cn } from '@/utils/cn';

const SHOWCASE_ITEMS = [
  { id: 'auth', num: '01', title: 'Login / Signup', duration: '0:32', description: 'Secure login and seamless account creation.' },
  { id: 'resolver', num: '02', title: 'Resolver Workstation', duration: '0:45', description: 'Repair structural and semantic failures interactively.' },
  { id: 'stress', num: '03', title: 'Stress Testing', duration: '0:41', description: 'Subject models to intense synthetic load to verify stability.' },
  { id: 'portability', num: '04', title: 'Pipeline Portability', duration: '0:56', description: 'Export and deploy pipelines across diverse cloud environments.' },
  { id: 'stitch', num: '05', title: 'Stitch Models', duration: '1:08', description: 'Combine multiple models to improve prediction quality.' },
  { id: 'routing', num: '06', title: 'Adaptive Routing', duration: '0:38', description: 'Redirects execution to better-performing models dynamically.' },
  { id: 'dashboard', num: '07', title: 'Pipeline Dashboard', duration: '1:12', description: 'Real-time telemetry and execution monitoring for pipelines.' },
  { id: 'inference', num: '08', title: 'Single Sample Inference', duration: '0:50', description: 'Test individual inputs against deployed models instantly.' },
  { id: 'management', num: '09', title: 'Delete Model', duration: '0:44', description: 'Safely decommission and archive models from the registry.' }
];

export function PlatformExperienceSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Handle scroll lock
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sectionEntrance: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const selectedItem = SHOWCASE_ITEMS.find(item => item.id === selectedId);

  return (
    <section className="relative w-full pt-24 pb-[24px] bg-white overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={sectionEntrance}
        >
          {/* Section Header */}
          <div className="mb-[64px] flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <Tag>PLATFORM EXPERIENCE</Tag>
            </div>
            <h2 className="mb-6 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.15]">
              Everything you need.<br className="hidden sm:block" />
              Nothing you don't.
            </h2>
            <p className="text-base text-slate-500 sm:text-lg max-w-[760px]">
              Every capability is designed to remove friction from building, validating, deploying, and operating machine learning pipelines.
            </p>
          </div>

          {/* 3x3 Grid */}
          <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHOWCASE_ITEMS.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`card-container-${item.id}`}
                onClick={() => setSelectedId(item.id)}
                className={cn(
                  "group relative flex flex-col rounded-[24px] bg-white overflow-hidden text-left cursor-pointer",
                  "border border-slate-200 shadow-sm"
                )}
                style={{ padding: "24px" }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  borderColor: "#cbd5e1", // slate-300
                  boxShadow: "0 12px 24px rgba(15,23,42,0.06)"
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Content morphs out when expanded */}
                <motion.div
                  className="flex flex-col h-full"
                  animate={{ opacity: selectedId === item.id ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="mb-[20px]">
                    <div className="text-[13px] font-mono text-slate-400 mb-[4px] tracking-wider transition-colors duration-300 group-hover:text-slate-500">
                      {item.num}
                    </div>
                    <h3 className="text-[18px] font-medium text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-full aspect-video rounded-[12px] bg-slate-50 border border-slate-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-slate-100 group-hover:border-slate-200 overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300" />
                    <span className="text-[11px] font-mono text-slate-400 tracking-widest uppercase relative z-10">
                      Video Preview
                    </span>
                  </div>

                  <div className="mt-[20px] flex items-center">
                    <div className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-400 transition-colors duration-300 group-hover:bg-slate-100 group-hover:border-slate-200 group-hover:text-slate-600">
                      {item.duration}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* Expanded Showcase Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-6">
            
            {/* Soft Blurred Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-[rgba(15,23,42,0.18)]"
              style={{ backdropFilter: "blur(18px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedId(null)}
            />
            
            {/* The Expanded Floating Card */}
            <motion.div
              layoutId={`card-container-${selectedItem.id}`}
              role="dialog"
              aria-modal="true"
              className="relative flex flex-col bg-white rounded-[24px] overflow-hidden w-full max-w-[760px] max-h-[95vh] md:h-[540px]"
              style={{
                boxShadow: "0 28px 80px rgba(15,23,42,0.16)",
                padding: "32px"
              }}
              transition={{
                type: "tween",
                ease: [0.22, 0.61, 0.36, 1], // Custom smooth non-bouncing curve
                duration: 0.42
              }}
            >
              {/* Delayed Content Entry */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, delay: 0.24 }}
                className="flex flex-col h-full w-full"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-[24px] flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <span className="text-[14px] font-mono text-slate-400 tracking-wider">
                      {selectedItem.num}
                    </span>
                    <h3 className="text-[20px] font-medium text-slate-900">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    whileTap={{ scale: 0.96, transition: { duration: 0.1 } }}
                    className="h-[36px] w-[36px] flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-red-600 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-colors duration-[180ms] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/20"
                  >
                    <X size={18} strokeWidth={2} />
                  </motion.button>
                </div>

                {/* 16:9 Video Area */}
                <div className="w-full h-auto aspect-video rounded-[18px] bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <span className="text-[12px] font-mono text-slate-400 tracking-widest uppercase">
                    Video Player Placeholder
                  </span>
                </div>

                {/* Modal Footer */}
                <div className="mt-auto pt-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 flex-shrink-0">
                  <div className="px-3 py-1.5 rounded-md bg-slate-50 border border-slate-100 text-[12px] font-mono text-slate-500 w-fit">
                    {selectedItem.duration}
                  </div>
                  <p className="text-[14px] text-slate-500 md:text-right">
                    {selectedItem.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
