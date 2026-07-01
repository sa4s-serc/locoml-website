import { useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useAnimationFrame, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { FadeUp } from '@/components/animations/Animations';
import { Tag } from '@/components/ui/TypographyAndBadges';

const stages = [
  { title: "Build Pipeline", description: "Creates the visual workflow using drag-and-drop or Pipeline LLM." },
  { title: "Select Dataset", description: "Choose datasets and automatically infer task semantics." },
  { title: "Select Models", description: "Use private models, public models, or Stitch Model recommendations." },
  { title: "Semantic Validation", description: "Checks workflow compatibility, detects invalid connections and configuration errors." },
  { title: "Autonomous Repair", description: "Resolver automatically repairs structural and semantic failures before execution." },
  { title: "Adaptive Optimization", description: "Routes execution through the best-performing models and switches when degradation is detected." },
  { title: "Deploy", description: "Packages and publishes the validated pipeline into production." }
];

function WorkflowStage({ 
  stage, 
  index, 
  time, 
  hoveredIndex, 
  autoActiveIndex, 
  handleMouseEnter,
  handleMouseLeave
}: { 
  stage: any; 
  index: number; 
  time: MotionValue<number>; 
  hoveredIndex: number | null; 
  autoActiveIndex: number | null; 
  handleMouseEnter: (i: number) => void;
  handleMouseLeave: () => void;
}) {
  const T0 = index * 2850;
  const t1 = T0 + 299;
  const t2 = T0 + 300;
  const t3 = index === 6 ? T0 + 2050 : T0 + 550;
  const t4 = index === 6 ? T0 + 2400 : T0 + 900;
  const fadeStart = 19450;
  const fadeEnd = 19950;

  // Background
  const bgIn = index === 6 
    ? [0, t1, t2, t3, t4, fadeEnd]
    : [0, t1, t2, t3, t4, fadeStart, fadeEnd];
  const bgOut = index === 6
    ? ["transparent", "transparent", "#2563eb", "#2563eb", "#ffffff", "transparent"]
    : ["transparent", "transparent", "#2563eb", "#2563eb", "#ffffff", "#ffffff", "transparent"];
  const bg = useTransform(time, bgIn, bgOut);

  // Border Color
  const borderIn = index === 6
    ? [0, t1, t2, t3, t4, fadeEnd]
    : [0, t1, t2, t3, t4, fadeStart, fadeEnd];
  const borderOut = index === 6
    ? ["#e2e8f0", "#e2e8f0", "#2563eb", "#2563eb", "#22c55e", "#e2e8f0"]
    : ["#e2e8f0", "#e2e8f0", "#2563eb", "#2563eb", "#22c55e", "#22c55e", "#e2e8f0"];
  const border = useTransform(time, borderIn, borderOut);

  // Border Width
  const bwIn = index === 6
    ? [0, t1, t2, t3, t4, fadeEnd]
    : [0, t1, t2, t3, t4, fadeStart, fadeEnd];
  const bwOut = index === 6
    ? ["2px", "2px", "12px", "12px", "2px", "2px"]
    : ["2px", "2px", "12px", "12px", "2px", "2px", "2px"];
  const bw = useTransform(time, bwIn, bwOut);

  // Path Length
  const pathIn = index === 6
    ? [0, t3 - 1, t3, t4, fadeEnd]
    : [0, t3 - 1, t3, t4, fadeStart, fadeEnd];
  const pathOut = index === 6
    ? [0, 0, 0, 1, 0]
    : [0, 0, 0, 1, 1, 0];
  const path = useTransform(time, pathIn, pathOut);

  // Opacity
  const opIn = index === 6
    ? [0, t3 - 1, t3, t4, fadeEnd]
    : [0, t3 - 1, t3, t4, fadeStart, fadeEnd];
  const opOut = index === 6
    ? [0, 0, 1, 1, 0]
    : [0, 0, 1, 1, 1, 0];
  const op = useTransform(time, opIn, opOut);

  // Title Color
  const colorIn = [0, t1, t2, fadeStart, fadeEnd];
  const colorOut = ["#94a3b8", "#94a3b8", "#0f172a", "#0f172a", "#94a3b8"];
  const color = useTransform(time, colorIn, colorOut);

  // Connector (only if index < 6)
  const Tc = (index + 1) * 2850;
  const scaleIn = [0, Tc - 1, Tc, Tc + 300, fadeStart, fadeEnd];
  const scaleOut = [0, 0, 0, 1, 1, 0];
  const connectorScale = useTransform(time, scaleIn, scaleOut);

  const isHovered = hoveredIndex === index;
  const isAutoExpanded = autoActiveIndex === index && hoveredIndex === null;
  const isExpanded = isHovered || isAutoExpanded;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center text-center py-2 relative z-10 bg-white">
        
        <div className="flex items-center justify-center gap-5 px-4">
          <div className={`flex-shrink-0 transition-all duration-300 ease-out ${isHovered ? 'brightness-110' : ''}`}>
            <motion.div 
              className="w-6 h-6 rounded-full flex items-center justify-center relative box-border"
              style={{ backgroundColor: bg, borderColor: border, borderWidth: bw }}
            >
              <motion.svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                className="w-3.5 h-3.5 text-green-500 absolute inset-0 m-auto"
                style={{ pathLength: path, opacity: op }}
              >
                <motion.path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
              </motion.svg>
            </motion.div>
          </div>
          
          {/* Interactive Title */}
          <motion.span 
            className="text-xl font-medium cursor-pointer transition-colors duration-200"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ color: isHovered ? "#0f172a" : color }}
          >
            {stage.title}
          </motion.span>
        </div>

        {/* Interactive Description */}
        <motion.div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : -4 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden cursor-pointer"
        >
          <p className="text-slate-500 text-sm md:text-base max-w-sm mx-auto leading-relaxed px-4 pt-3 pb-1">
            {stage.description}
          </p>
        </motion.div>
      </div>

      {index < 6 && (
        <div className="flex flex-col items-center my-1.5 pointer-events-none">
          <div className="w-[1px] h-9 bg-[#e2e8f0] relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-primary origin-top"
              style={{ scaleY: connectorScale }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function PlatformWorkflowSection() {
  const [hoveredIndexState, setHoveredIndexState] = useState<number | null>(null);
  const [autoActiveIndex, setAutoActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<any>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20%", once: false });
  const time = useMotionValue(0);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredIndexState(index);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setHoveredIndexState(null);
    }, 50);
  };

  useAnimationFrame((_, delta) => {
    if (!isInView || hoveredIndexState !== null) return;
    
    const cappedDelta = Math.min(delta, 100);
    
    let newTime = time.get() + cappedDelta;
    if (newTime >= 19950) {
      newTime = 0;
    }
    time.set(newTime);
  });

  useMotionValueEvent(time, "change", (latest) => {
    if (hoveredIndexState !== null) return;
    
    let activeIndex = null;
    for (let i = 0; i < 7; i++) {
      const T0 = i * 2850;
      const expandStart = i === 6 ? T0 + 300 : T0 + 900;
      const collapseStart = i === 6 ? T0 + 2400 : T0 + 2650;
      
      if (latest >= expandStart && latest < collapseStart) {
        activeIndex = i;
        break;
      }
    }
    
    if (activeIndex !== autoActiveIndex) {
      setAutoActiveIndex(activeIndex);
    }
  });

  return (
    <section ref={sectionRef} className="relative w-full py-24 lg:py-32 bg-white border-t border-border/50">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 pointer-events-none">
          <FadeUp>
            <Tag className="mb-6 pointer-events-auto">PLATFORM WORKFLOW</Tag>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.2] mb-6 pointer-events-auto">
              Every pipeline follows one intelligent workflow.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-slate-500 leading-relaxed pointer-events-auto">
              LoCoML transforms an idea into a production-ready ML system through autonomous validation, optimization, and continuous monitoring.
            </p>
          </FadeUp>
        </div>

        <div className="flex flex-col items-center max-w-xl mx-auto min-h-[850px]">
          {stages.map((stage, i) => (
            <WorkflowStage 
              key={i}
              stage={stage}
              index={i}
              time={time}
              hoveredIndex={hoveredIndexState}
              autoActiveIndex={autoActiveIndex}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
