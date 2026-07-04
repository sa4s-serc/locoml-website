import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ResponsiveVideo } from '@/components/common/ResponsiveVideo';
import { FadeUp, FadeIn } from '@/components/animations/Animations';
import { Icons } from '@/constants/icons';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { cn } from '@/utils/cn';

export function Hero() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Handle scroll lock
  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPreviewOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPreviewOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen lg:min-h-[850px] items-center pt-24 pb-16 overflow-hidden">
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col items-start text-left">
            <FadeUp delay={0.1}>
              <h1 className="max-w-3xl lg:max-w-4xl text-heading pr-4 lg:pr-8">
                Build. Train. Deploy.<br />
                <span className="text-primary">One Platform.</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-paragraph md:text-xl leading-relaxed">
                Design visual pipelines, build intelligent models, validate workflows, and deploy production-ready machine learning systems from one unified open source platform.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="xl" className="w-full sm:w-auto font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all">
                Explore Platform
              </Button>
              <Button size="xl" variant="outline" className="w-full sm:w-auto font-medium hover:-translate-y-0.5 hover:bg-slate-50 transition-all">
                Read Research <Icons.ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeUp>

            <FadeUp delay={0.4} className="mt-12 flex flex-wrap items-center gap-3">
              {[
                "Open Source",
                "Visual Pipelines",
                "Autonomous Resolver",
                "Stress Testing",
                "Adaptive Routing",
                "Stitch Model",
                "Pipeline LLM",
                "Pipeline Portability"
              ].map((badge) => (
                <Tag 
                  key={badge} 
                  className="bg-transparent border-slate-200/50 text-slate-400 text-xs px-2 py-1 hover:border-slate-300 hover:text-slate-500 transition-colors cursor-default"
                >
                  {badge}
                </Tag>
              ))}
            </FadeUp>
          </div>

          {/* Right Column: Video Demonstration */}
          <div className="relative w-full">
            {/* Soft Breathing Blue Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-subtle" />
            
            <FadeIn delay={0.5}>
              <motion.div 
                layoutId="hero-product-preview"
                onClick={() => setIsPreviewOpen(true)}
                className="group relative mx-auto w-full max-w-2xl rounded-3xl border border-white/40 bg-white/60 backdrop-blur-md p-2 shadow-[0_0_60px_-15px_rgba(37,99,235,0.15)] animate-float cursor-pointer hover:border-primary/40 transition-colors duration-500"
                whileHover={{
                  y: -4,
                  boxShadow: "0 24px 60px -15px rgba(37,99,235,0.3)"
                }}
                whileTap={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{ opacity: isPreviewOpen ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                  className="relative"
                >
                  <div className="mb-2 flex items-center justify-between px-3 pt-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-slate-500 flex items-center gap-2 group-hover:text-primary transition-colors">
                      <Icons.Monitor className="h-3 w-3 text-primary/80 group-hover:text-primary transition-colors" /> Product Preview
                    </span>
                  </div>
                  
                  {/* The thumbnail representation */}
                  <div className="relative w-full aspect-video rounded-2xl border border-slate-100 overflow-hidden bg-slate-50/80">
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[rgba(15,23,42,0.25)] backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20">
                      <div className="w-[56px] h-[56px] bg-white rounded-full flex items-center justify-center shadow-xl mb-3 transform scale-90 group-hover:scale-100 transition-transform duration-300 ease-out">
                        <Icons.Play className="h-7 w-7 text-primary ml-1" />
                      </div>
                      <span className="text-white font-medium text-sm tracking-wide shadow-sm">Watch Product Demo</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex items-center justify-between px-3 pb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">2:45 Product Overview</span>
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>

        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-400 opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <Icons.ChevronDown className="h-4 w-4 animate-bounce" />
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0">
            
            {/* Soft Blurred Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/45"
              style={{ backdropFilter: "blur(20px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIsPreviewOpen(false)}
            />
            
            {/* The Expanded Floating Card */}
            <motion.div
              layoutId="hero-product-preview"
              role="dialog"
              aria-modal="true"
              aria-label="Product Preview Demo Video"
              className="relative flex flex-col bg-slate-950 rounded-[28px] overflow-hidden w-[95vw] md:w-[75vw] max-w-[1100px] aspect-video border border-slate-800"
              style={{
                boxShadow: "0 28px 80px rgba(0,0,0,0.6)",
              }}
              transition={{
                type: "tween",
                ease: [0.22, 0.61, 0.36, 1], // Custom smooth non-bouncing curve (Platform consistency)
                duration: 0.42
              }}
            >
              {/* Inner content that animates as specified */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ 
                  type: "spring",
                  damping: 25,
                  stiffness: 120,
                  duration: 0.35,
                  delay: 0.1
                }}
                className="flex flex-col h-full w-full relative group/modal"
              >
                {/* Modal Header Overlay */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300">
                  <span className="text-[12px] font-mono text-white/90 uppercase tracking-widest font-medium drop-shadow-md">
                    Product Preview
                  </span>
                  
                  <motion.button
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close modal"
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-white pointer-events-auto hover:bg-black/40 hover:rotate-90 transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 shadow-sm"
                  >
                    <Icons.X size={20} strokeWidth={2} />
                  </motion.button>
                </div>
                
                {/* 16:9 Video Area */}
                <div className="w-full h-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  <ResponsiveVideo 
                    src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                    poster=""
                    autoPlay={true}
                    loop={true}
                    muted={false}
                    controls={true}
                    preload="metadata"
                    playsInline={true}
                    aspectRatio="16/9" 
                    rounded="none" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Modal Footer Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none opacity-0 group-hover/modal:opacity-100 transition-opacity duration-300">
                  <div className="px-3 py-1.5 rounded-md bg-black/30 backdrop-blur-md border border-white/10 text-[12px] font-mono text-white/90 shadow-sm">
                    2:45 Demo
                  </div>
                  <div className="h-8 w-8 flex items-center justify-center rounded-md bg-black/30 backdrop-blur-md border border-white/10 text-white/90 pointer-events-auto hover:bg-black/50 transition-colors cursor-pointer">
                    <Icons.Monitor size={14} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
