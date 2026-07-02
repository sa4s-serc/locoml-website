import { useEffect, useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import {
  Workflow, BrainCircuit, ShieldCheck, CloudUpload, Play, Split, Merge,
  Check, Package, ShieldAlert, CloudCheck, GitMerge
} from 'lucide-react';

/* ─── Paths ─────────────────────────────────────────────────────────── */
const PATH_MANUAL = "M 250 60 L 250 90 Q 250 110 270 110 L 330 110 Q 350 110 350 160";
const PATH_LLM    = "M 450 60 L 450 90 Q 450 110 430 110 L 370 110 Q 350 110 350 160";

const PATH_CORE_1 = "M 350 160 L 350 300";
const PATH_CORE_2 = "M 350 300 L 350 440";
const PATH_CORE_3 = "M 350 440 L 350 580";

const PATH_ADAPTIVE = "M 350 580 L 350 640 Q 350 670 320 670 L 210 670 Q 180 670 180 700";
const PATH_ADAPTIVE_IN = "M 180 700 L 245 700 Q 275 700 275 670 L 275 610 Q 275 580 305 580 L 350 580";
const PATH_CORE_FULL = "M 350 160 L 350 580"; // For the static background connector

export function PlatformIntelligenceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: '-100px' });
  
  const [activeId, setActiveId] = useState<string | null>(null);
  const [warningId, setWarningId] = useState<string | null>(null);
  const [activeBranch, setActiveBranch] = useState<string | null>(null);
  
  const [dotConfig, setDotConfig] = useState({
    path: '',
    progress: 0,
    opacity: 0,
    traveling: false
  });

  useEffect(() => {
    let isActive = true;

    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const nodeTimes: Record<string, number> = {
      builder: 1050,
      llm: 1050,
      ready: 400,
      resolver: 1400,
      deploy: 1200,
      running: 1500,
      adaptive: 700,
      stitch: 1100
    };

    const processNode = async (id: string) => {
      if (!isActive) return;
      setActiveId(id);
      await wait(nodeTimes[id]); // Node processing animation
      
      if (!isActive) return;
      setActiveId(null);
      await wait(250); // Pause after completion
    };

    const travel = async (path: string, startPct: number, endPct: number) => {
      if (!isActive) return;
      // Position dot at boundary, hidden
      setDotConfig({ path, progress: startPct, opacity: 0, traveling: false });
      await wait(50);
      
      if (!isActive) return;
      // Fade in at boundary
      setDotConfig(prev => ({ ...prev, opacity: 1 }));
      await wait(150);

      if (!isActive) return;
      // Travel to next boundary
      setDotConfig(prev => ({ ...prev, progress: endPct, traveling: true }));
      await wait(1200); // Slower, cinematic travel

      if (!isActive) return;
      // Fade out at destination boundary
      setDotConfig(prev => ({ ...prev, opacity: 0, traveling: false }));
      await wait(150);

      // Pause before processing
      await wait(250);
    };

    const runSequence = async () => {
      const entryId = Math.random() > 0.5 ? 'builder' : 'llm';
      const entryPath = entryId === 'builder' ? PATH_MANUAL : PATH_LLM;

      // Reset states
      setActiveBranch(null);
      setWarningId(null);
      setDotConfig({ path: '', progress: 0, opacity: 0, traveling: false });
      await wait(500); // Initial pause

      // 1. Entry Node processes
      await processNode(entryId);
      
      // 2. Travel to Ready
      await travel(entryPath, 17, 85);
      await processNode('ready');
      
      // 3. Travel to Resolver
      await travel(PATH_CORE_1, 21, 62);
      await processNode('resolver');
      
      // 4. Travel to Stitch Model (formerly deploy)
      await travel(PATH_CORE_2, 38, 73);
      await processNode('deploy');
      
      // 5. Travel to Running Pipeline
      await travel(PATH_CORE_3, 27, 61);
      
      if (!isActive) return;
      setActiveId('running');
      await wait(1500); // Run healthy
      
      if (!isActive) return;
      // Simulate Degradation
      setActiveId(null);
      setWarningId('running');
      await wait(300);
      
      if (!isActive) return;
      setWarningId(null);
      
      // 6. Travel to Adaptive Routing
      setActiveBranch('adaptive');
      await travel(PATH_ADAPTIVE, 10, 90);
      
      // 7. Process Adaptive Routing
      await processNode('adaptive');
      
      // 8. Travel back to Running Pipeline
      await travel(PATH_ADAPTIVE_IN, 10, 90);
      
      // 9. Back to normal Running
      if (!isActive) return;
      setActiveBranch(null);
      setActiveId('running');
      await wait(1000);
      setActiveId(null);

      // Wait before next cycle
      if (!isActive) return;
      await wait(800);

      if (isActive && isInView) {
        runSequence();
      }
    };

    if (isInView) {
      runSequence();
    } else {
      setActiveId(null);
      setWarningId(null);
      setActiveBranch(null);
      setDotConfig({ path: '', progress: 0, opacity: 0, traveling: false });
    }

    return () => {
      isActive = false;
      setActiveId(null);
      setWarningId(null);
      setActiveBranch(null);
    };
  }, [isInView]);

  return (
    <section className="relative w-full pt-24 pb-24 lg:pb-32 bg-white overflow-hidden" ref={containerRef}>
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Tag className="mb-6">AUTONOMOUS PLATFORM</Tag>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.2] mb-6">
            The platform thinks<br/>while you build.
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Every pipeline continuously validates, repairs, optimizes, deploys, and improves itself without interrupting execution.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 px-4 lg:px-8">
          
          {/* Architecture Canvas */}
          <div className="w-full lg:w-[65%] flex justify-center lg:justify-start">
            <div className="relative w-[700px] h-[750px] shrink-0 origin-top scale-[0.5] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">

              {/* Static Connectors */}
              <svg width="700" height="750" className="absolute inset-0 pointer-events-none z-0">
                <path d={PATH_MANUAL} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d={PATH_LLM} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d={PATH_CORE_FULL} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" />
                
                {/* Adaptive Branch (Highlights if active) */}
                <path 
                  d={PATH_ADAPTIVE} 
                  stroke={activeBranch === 'adaptive' ? "#2563eb" : "#e2e8f0"} 
                  strokeWidth={1} 
                  fill="none" strokeLinecap="round" strokeLinejoin="round" 
                  className="transition-colors duration-500"
                />
                
                {/* Adaptive Return Branch (Highlights if active) */}
                <path 
                  d={PATH_ADAPTIVE_IN} 
                  stroke={activeBranch === 'adaptive' ? "#2563eb" : "#e2e8f0"} 
                  strokeWidth={1} 
                  fill="none" strokeLinecap="round" strokeLinejoin="round" 
                  className="transition-colors duration-500"
                />
              </svg>

              {/* The Travelling Intelligence Signal */}
              <motion.div
                initial={false}
                animate={{
                  offsetDistance: `${dotConfig.progress}%`,
                  opacity: dotConfig.opacity
                }}
                transition={{
                  offsetDistance: {
                    duration: dotConfig.traveling ? 1.2 : 0,
                    ease: dotConfig.traveling ? [0.4, 0, 0.2, 1] : "linear"
                  },
                  opacity: {
                    duration: 0.15,
                    ease: "linear"
                  }
                }}
                style={{
                  offsetPath: dotConfig.path ? `path("${dotConfig.path}")` : 'none',
                  position: 'absolute',
                  left: 0, top: 0,
                  width: 8, height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#2563eb',
                  boxShadow: '0 0 10px rgba(37,99,235,.18)',
                  zIndex: 5
                }}
              />

              {/* Nodes */}
              <BuilderNode   id="builder"  activeId={activeId} x={250} y={60}  w={48}  h={48}  label="Manual Builder"   labelPosition="left" />
              <LLMNode       id="llm"      activeId={activeId} x={450} y={60}  w={48}  h={48}  label="Pipeline LLM"    labelPosition="right" />
              <PillNode      id="ready"    activeId={activeId} x={350} y={160} w={140} h={40}  label="Pipeline Ready" />
              <ResolverNode  id="resolver" activeId={activeId} x={350} y={300} w={88}  h={88}  label="Resolver"        labelPosition="left" />
              <DeployNode    id="deploy"   activeId={activeId} x={350} y={440} w={56}  h={56}  label="Stitch Model"    labelPosition="left" />
              <RunningNode   id="running"  activeId={activeId} warning={warningId === 'running'} x={350} y={580} w={90}  h={90}  label="Running Pipeline" labelPosition="left" />
              <AdaptiveNode  id="adaptive" activeId={activeId} x={180} y={700} w={190} h={40}  label="Adaptive Routing" />
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-[35%] flex flex-col pt-4 lg:pt-[120px] lg:pl-12">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-10">
              Why this architecture matters?
            </h3>
            <div className="flex flex-col gap-10">
              <Feature title="Dual Entry"          desc="Build visually or generate with Pipeline LLM." />
              <Feature title="Resolver"             desc="Automatically detects and repairs structural and semantic issues." />
              <Feature title="Deployment"           desc="Packages validated pipelines for execution." />
              <Feature title="Adaptive Intelligence" desc="Routes or recommends better models only when needed." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Feature Panel ─────────────────────────────────────────────────── */
function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h4 className="text-[15px] font-semibold text-slate-900 tracking-tight">{title}</h4>
      <p className="text-[14.5px] text-slate-500 leading-relaxed pr-4">{desc}</p>
    </div>
  );
}

/* ─── Shared helpers ────────────────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

// Wrapper that positions a node in the absolute canvas
function NodeWrapper({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children: React.ReactNode }) {
  return (
    <div
      className="absolute flex items-center justify-center z-10"
      style={{ left: x - 150, top: y - h / 2, width: 300, height: h }}
    >
      {children}
    </div>
  );
}

// Standard label
function NodeLabel({ text, position, visualRadius }: { text: string; position: 'left' | 'right'; visualRadius: number }) {
  return (
    <div
      className="absolute text-[15px] font-semibold text-slate-900 whitespace-nowrap bg-white/80 px-2 py-0.5 z-20"
      style={
        position === 'left'
          ? { right: 150 + visualRadius + 24, textAlign: 'right' }
          : { left: 150 + visualRadius + 24, textAlign: 'left' }
      }
    >
      {text}
    </div>
  );
}

// Icon crossfade shell — ensures AnimatePresence crossfade between icons
function IconSlot({ children, iconKey }: { children: React.ReactNode; iconKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={iconKey}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
        className="flex items-center justify-center w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Tiny checkmark flash — appears once then exits
function CheckFlash({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center z-30"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.25, ease }}
        >
          <Check size={9} strokeWidth={3} className="text-white" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── 1. Builder Node ───────────────────────────────────────────────── */
function BuilderNode({ id, activeId, x, y, w, h, label, labelPosition }: any) {
  const isActive = activeId === id;
  const [phase, setPhase] = useState<'idle' | 'active' | 'done'>('idle');

  useEffect(() => {
    if (isActive) {
      setPhase('active');
      const t = setTimeout(() => setPhase('done'), 700);
      const t2 = setTimeout(() => setPhase('idle'), 1050);
      return () => { clearTimeout(t); clearTimeout(t2); };
    } else {
      setPhase('idle');
    }
  }, [isActive]);

  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <NodeLabel text={label} position={labelPosition} visualRadius={w / 2} />
      <div className="relative" style={{ width: w, height: h }}>
        <CheckFlash show={phase === 'done'} />
        <motion.div
          className="flex items-center justify-center w-full h-full rounded-full border-[1.5px] bg-white"
          animate={
            phase === 'active'
              ? { scale: 1.08, borderColor: '#2563eb' }
              : { scale: 1, borderColor: '#e2e8f0' }
          }
          transition={{ duration: 0.25, ease }}
        >
          <motion.div
            animate={
              phase === 'active'
                ? { opacity: [0.9, 1, 0.9], color: '#2563eb' }
                : { opacity: 1, color: '#94a3b8' }
            }
            transition={phase === 'active' ? { duration: 0.5, repeat: 1 } : { duration: 0.25 }}
          >
            <Workflow size={20} strokeWidth={2.5} />
          </motion.div>
        </motion.div>
      </div>
    </NodeWrapper>
  );
}

/* ─── 2. LLM Node ───────────────────────────────────────────────────── */
function LLMNode({ id, activeId, x, y, w, h, label, labelPosition }: any) {
  const isActive = activeId === id;
  const [phase, setPhase] = useState<'idle' | 'active' | 'done'>('idle');

  useEffect(() => {
    if (isActive) {
      setPhase('active');
      const t = setTimeout(() => setPhase('done'), 700);
      const t2 = setTimeout(() => setPhase('idle'), 1050);
      return () => { clearTimeout(t); clearTimeout(t2); };
    } else {
      setPhase('idle');
    }
  }, [isActive]);

  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <NodeLabel text={label} position={labelPosition} visualRadius={w / 2} />
      <div className="relative" style={{ width: w, height: h }}>
        <CheckFlash show={phase === 'done'} />
        <motion.div
          className="flex items-center justify-center w-full h-full rounded-full border-[1.5px] bg-white"
          animate={
            phase === 'active'
              ? { scale: 1.08, borderColor: '#2563eb' }
              : { scale: 1, borderColor: '#e2e8f0' }
          }
          transition={{ duration: 0.25, ease }}
        >
          <motion.div
            animate={
              phase === 'active'
                ? { opacity: [0.9, 1, 0.9], color: '#2563eb' }
                : { opacity: 1, color: '#94a3b8' }
            }
            transition={phase === 'active' ? { duration: 0.5, repeat: 1 } : { duration: 0.25 }}
          >
            <BrainCircuit size={20} strokeWidth={2.5} />
          </motion.div>
        </motion.div>
      </div>
    </NodeWrapper>
  );
}

/* ─── 3. Pipeline Ready Pill ────────────────────────────────────────── */
function PillNode({ id, activeId, x, y, w, h, label }: any) {
  const isActive = activeId === id;
  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <motion.div
        className="flex items-center justify-center px-5 bg-white"
        style={{ width: w, height: h, borderRadius: 9999 }}
        animate={
          isActive
            ? { borderColor: '#3b82f6', borderWidth: 1.5 }
            : { borderColor: '#e2e8f0', borderWidth: 1.5 }
        }
        transition={{ duration: 0.4, ease }}
      >
        <span className="text-[15px] font-semibold text-slate-500 whitespace-nowrap">{label}</span>
      </motion.div>
    </NodeWrapper>
  );
}

/* ─── 4. Resolver Node ──────────────────────────────────────────────── */
// States: idle → receive (Shield) → detecting (ShieldAlert + yellow) → repaired (ShieldCheck) → idle
function ResolverNode({ id, activeId, x, y, w, h, label, labelPosition }: any) {
  const isActive = activeId === id;
  const [phase, setPhase] = useState<'idle' | 'receive' | 'detecting' | 'repaired'>('idle');

  useEffect(() => {
    if (isActive) {
      setPhase('receive');
      const t1 = setTimeout(() => setPhase('detecting'), 200);
      const t2 = setTimeout(() => setPhase('repaired'), 900);
      const t3 = setTimeout(() => setPhase('idle'), 1400);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    } else {
      setPhase('idle');
    }
  }, [isActive]);

  const iconKey =
    phase === 'detecting' ? 'alert' :
    phase === 'repaired'  ? 'check' : 'shield';

  const iconColor =
    phase === 'receive'   ? '#2563eb' :
    phase === 'detecting' ? '#d97706' :
    phase === 'repaired'  ? '#16a34a' : '#94a3b8';

  const glow =
    phase === 'detecting'
      ? 'drop-shadow(0 0 6px rgba(217,119,6,0.3))'
      : 'none';

  const visualRadius = (w * 1.414) / 2;

  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <NodeLabel text={label} position={labelPosition} visualRadius={visualRadius} />
      <div className="relative flex items-center justify-center bg-white" style={{ width: w, height: h }}>
        <motion.div
          className="flex items-center justify-center w-full h-full border-[1.5px] border-slate-200 bg-white rounded-2xl rotate-45"
          animate={
            phase !== 'idle'
              ? { borderColor: iconColor }
              : { borderColor: '#e2e8f0' }
          }
          transition={{ duration: 0.2 }}
        >
          <div className="-rotate-45 flex items-center justify-center">
            <IconSlot iconKey={iconKey}>
              <motion.div
                animate={{ color: iconColor, filter: glow }}
                transition={{ duration: 0.2 }}
              >
                {iconKey === 'alert' && <ShieldAlert size={w * 0.45} strokeWidth={2} />}
                {iconKey === 'check' && <ShieldCheck  size={w * 0.45} strokeWidth={2} />}
                {iconKey === 'shield' && <ShieldCheck size={w * 0.45} strokeWidth={2} />}
              </motion.div>
            </IconSlot>
          </div>
        </motion.div>
      </div>
    </NodeWrapper>
  );
}

/* ─── 5. Deployment Node ────────────────────────────────────────────── */
// States: idle → receive (CloudUpload) → packaging (Package) → deployed (CloudCheck) → idle
function DeployNode({ id, activeId, x, y, w, h, label, labelPosition }: any) {
  const isActive = activeId === id;
  const [phase, setPhase] = useState<'idle' | 'receive' | 'packaging' | 'deployed'>('idle');

  useEffect(() => {
    if (isActive) {
      setPhase('receive');
      const t1 = setTimeout(() => setPhase('packaging'), 250);
      const t2 = setTimeout(() => setPhase('deployed'), 800);
      const t3 = setTimeout(() => setPhase('idle'), 1200);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    } else {
      setPhase('idle');
    }
  }, [isActive]);

  const iconKey =
    phase === 'packaging' ? 'pkg' :
    phase === 'deployed'  ? 'cloud' : 'upload';

  const iconColor =
    phase === 'idle' ? '#94a3b8' :
    phase === 'deployed' ? '#16a34a' : '#2563eb';

  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <NodeLabel text={label} position={labelPosition} visualRadius={w / 2} />
      <div className="relative flex items-center justify-center bg-white" style={{ width: w, height: h }}>
        <motion.div
          className="flex items-center justify-center w-full h-full border-[1.5px] bg-white rounded-2xl"
          animate={phase !== 'idle' ? { borderColor: iconColor } : { borderColor: '#e2e8f0' }}
          transition={{ duration: 0.2 }}
        >
          <IconSlot iconKey={iconKey}>
            <motion.div animate={{ color: iconColor }} transition={{ duration: 0.2 }}>
              {iconKey === 'pkg'    && <Package     size={20} strokeWidth={2} />}
              {iconKey === 'cloud'  && <CloudCheck  size={20} strokeWidth={2} />}
              {iconKey === 'upload' && <CloudUpload size={20} strokeWidth={2} />}
            </motion.div>
          </IconSlot>
        </motion.div>
      </div>
    </NodeWrapper>
  );
}

/* ─── 6. Running Pipeline Node ──────────────────────────────────────── */
// Implements execution animation: Play Icon Translation & Scale
function RunningNode({ id, activeId, warning, x, y, w, h, label, labelPosition }: any) {
  const isActive = activeId === id;
  const [phase, setPhase] = useState<'idle' | 'active' | 'warning'>('idle');

  useEffect(() => {
    if (warning) {
      setPhase('warning');
    } else if (isActive) {
      setPhase('active');
    } else {
      setPhase('idle');
    }
  }, [isActive, warning]);

  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <NodeLabel text={label} position={labelPosition} visualRadius={w / 2} />
      
      <div className="relative flex items-center justify-center bg-white rounded-full" style={{ width: w, height: h }}>
        {/* Main Node */}
        <motion.div
          className="flex items-center justify-center w-full h-full rounded-full border-[1.5px] bg-white relative z-10 overflow-hidden"
          animate={
            phase === 'warning' ? { borderColor: '#f59e0b' } :
            phase === 'active' ? { borderColor: '#2563eb' } : 
            { borderColor: '#e2e8f0' }
          }
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex items-center justify-center"
            animate={
              phase === 'warning'
                ? { scale: [1, 1.05, 1], x: 0, color: '#f59e0b' }
                : phase === 'active' 
                ? { scale: [1, 1.08, 1], x: [0, 2, 0], color: '#2563eb' } 
                : { scale: 1, x: 0, color: '#94a3b8' }
            }
            transition={
              phase === 'warning'
                ? {
                    scale: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
                    color: { duration: 0.2 }
                  }
                : phase === 'active' 
                ? { 
                    scale: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
                    x: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
                    color: { duration: 0.2 }
                  } 
                : { duration: 0.3 }
            }
          >
             <Play size={20} strokeWidth={2.5} />
          </motion.div>
        </motion.div>
      </div>
    </NodeWrapper>
  );
}

/* ─── 7. Adaptive Routing Pill ──────────────────────────────────────── */
function AdaptiveNode({ id, activeId, x, y, w, h, label }: any) {
  const isActive = activeId === id;
  const [phase, setPhase] = useState<'idle' | 'routing'>('idle');

  useEffect(() => {
    if (isActive) {
      setPhase('routing');
      const t = setTimeout(() => setPhase('idle'), 950);
      return () => clearTimeout(t);
    } else {
      setPhase('idle');
    }
  }, [isActive]);

  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <motion.div
        className="flex items-center justify-center gap-2.5 px-5 bg-white"
        style={{ width: w, height: h, borderRadius: 9999, border: '1.5px solid #e2e8f0' }}
        animate={phase === 'routing' ? { borderColor: '#2563eb' } : { borderColor: '#e2e8f0' }}
        transition={{ duration: 0.22 }}
      >
        <motion.div
          animate={
            phase === 'routing'
              ? { rotate: [-8, 0, 8, 0, -6, 0], color: '#2563eb' }
              : { rotate: 0, color: '#94a3b8' }
          }
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Split size={16} strokeWidth={2.5} />
        </motion.div>
        <span className="text-[15px] font-semibold text-slate-500 whitespace-nowrap">{label}</span>
      </motion.div>
    </NodeWrapper>
  );
}

/* ─── 8. Stitch Model Pill ──────────────────────────────────────────── */
function StitchNode({ id, activeId, x, y, w, h, label }: any) {
  const isActive = activeId === id;
  const [phase, setPhase] = useState<'idle' | 'merging' | 'done'>('idle');
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    if (isActive) {
      setPhase('merging');
      const t1 = setTimeout(() => { setPhase('done'); setShowSparkle(true); }, 600);
      const t2 = setTimeout(() => { setShowSparkle(false); }, 950);
      const t3 = setTimeout(() => setPhase('idle'), 1100);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    } else {
      setPhase('idle');
      setShowSparkle(false);
    }
  }, [isActive]);

  const iconKey = phase === 'merging' || phase === 'done' ? 'merge' : 'split';
  const iconColor = phase === 'idle' ? '#94a3b8' : '#2563eb';

  return (
    <NodeWrapper x={x} y={y} w={w} h={h}>
      <div className="relative flex items-center justify-center">
        <AnimatePresence>
          {showSparkle && (
            <motion.div
              className="absolute -top-2 right-4 text-blue-400 text-[10px] pointer-events-none"
              initial={{ opacity: 0, scale: 0.5, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: -6 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              ✦
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="flex items-center justify-center gap-2.5 px-5 bg-white"
          style={{ width: w, height: h, borderRadius: 9999, border: '1.5px solid #e2e8f0' }}
          animate={phase !== 'idle' ? { borderColor: '#2563eb' } : { borderColor: '#e2e8f0' }}
          transition={{ duration: 0.22 }}
        >
          <IconSlot iconKey={iconKey}>
            <motion.div animate={{ color: iconColor }} transition={{ duration: 0.2 }}>
              {iconKey === 'merge' ? <GitMerge size={16} strokeWidth={2.5} /> : <Merge size={16} strokeWidth={2.5} />}
            </motion.div>
          </IconSlot>
          <span className="text-[15px] font-semibold text-slate-500 whitespace-nowrap">{label}</span>
        </motion.div>
      </div>
    </NodeWrapper>
  );
}
