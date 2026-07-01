import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, useAnimationFrame, MotionValue } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { FadeUp } from '@/components/animations/Animations';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { Settings, Sparkles, ShieldCheck, Rocket, Activity, Check } from 'lucide-react';

// Timings mapping to the precise orchestration cadence
const T = {
  N0: 0,        // Entry
  P1: 1300,     // Travel to Ready
  N1: 2000,     // Ready
  P2: 3300,     // Travel to Resolver
  N2: 4000,     // Resolver
  P3: 5300,     // Travel to Deploy
  N3: 6000,     // Deploy
  P4: 7300,     // Travel to Running
  N4: 8000,     // Running
  EV: 9500      // Events
};

export function PlatformIntelligenceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20%", once: false });
  
  const isPlaying = useRef(false);
  const time = useMotionValue(0);
  
  const [runConfig, setRunConfig] = useState({ branch: 'manual', event: 'none', runId: 0 });

  useAnimationFrame((_, delta) => {
    if (!isPlaying.current) return;
    time.set(time.get() + delta);
  });

  useEffect(() => {
    if (isInView && !isPlaying.current) {
      isPlaying.current = true;
      const branch = Math.random() > 0.5 ? 'manual' : 'llm';
      const r = Math.random();
      const event = r < 0.2 ? 'adaptive' : (r < 0.4 ? 'stitch' : 'none');
      
      time.set(0);
      setRunConfig(prev => ({ branch, event, runId: prev.runId + 1 }));
    } else if (!isInView) {
      isPlaying.current = false;
      time.set(0);
    }
  }, [isInView, time]);

  return (
    <section ref={sectionRef} className="relative w-full pt-24 pb-24 lg:pb-32 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 pointer-events-none">
          <FadeUp>
            <Tag className="mb-6 pointer-events-auto">AUTONOMOUS PLATFORM</Tag>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.2] mb-6 pointer-events-auto">
              One platform.<br/>Multiple intelligent systems working together.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-slate-500 leading-relaxed pointer-events-auto max-w-2xl mx-auto">
              Every pipeline is continuously analyzed, validated, monitored, and optimized by autonomous platform services throughout its lifecycle.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-8 max-w-5xl mx-auto">
          
          {/* LEFT PANEL: Orchestration Hub */}
          <div className="flex flex-col relative h-[500px] w-full">
            
            {/* SVG Canvas for Connectors */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
               <svg className="w-full h-full" viewBox="0 0 800 460" preserveAspectRatio="xMidYMid meet">
                 {/* Precise Connectors */}
                 <PulseLine 
                   path="M 400 84 L 400 140" 
                   time={time} arrive={T.P1} active={runConfig.branch === 'manual'} 
                 />
                 <PulseLine 
                   path="M 264 160 L 340 160" 
                   time={time} arrive={T.P1} active={runConfig.branch === 'llm'} 
                 />
                 <PulseLine 
                   path="M 460 160 L 589 160" 
                   time={time} arrive={T.P2} active={true} 
                 />
                 <PulseLine 
                   path="M 640 211 L 640 264 Q 640 280 624 280 L 424 280" 
                   time={time} arrive={T.P3} active={true} 
                 />
                 <PulseLine 
                   path="M 400 304 L 400 362" 
                   time={time} arrive={T.P4} active={true} 
                 />
                 
                 {/* Event Signal Outbound */}
                 <PulseLine 
                   path="M 362 400 L 250 400" 
                   time={time} arrive={T.EV} active={runConfig.event === 'adaptive'} 
                 />
                 <PulseLine 
                   path="M 438 400 L 550 400" 
                   time={time} arrive={T.EV} active={runConfig.event === 'stitch'} 
                 />

                 {/* Event Signal Inbound (Returns to Pipeline) */}
                 <PulseLine 
                   path="M 250 400 L 362 400" 
                   time={time} arrive={T.EV + 1800} active={runConfig.event === 'adaptive'} 
                 />
                 <PulseLine 
                   path="M 550 400 L 438 400" 
                   time={time} arrive={T.EV + 1800} active={runConfig.event === 'stitch'} 
                 />
               </svg>
            </div>

            {/* Hub Nodes */}
            <div className="absolute inset-0 z-10 w-full h-full" style={{ maxWidth: '800px', maxHeight: '460px', margin: 'auto' }}>
              
              <div className="absolute top-[60px] left-[400px] -translate-x-1/2 -translate-y-1/2">
                <HubNode time={time} arrive={T.N0} active={runConfig.branch === 'manual'} shape="circle" icon={Settings} size={48} label="Manual Builder" />
              </div>

              <div className="absolute top-[160px] left-[240px] -translate-x-1/2 -translate-y-1/2">
                <HubNode time={time} arrive={T.N0} active={runConfig.branch === 'llm'} shape="circle" icon={Sparkles} size={48} label="Pipeline LLM" />
              </div>

              <div className="absolute top-[160px] left-[400px] -translate-x-1/2 -translate-y-1/2">
                <PipelineReadyPill time={time} arrive={T.N1} />
              </div>

              <div className="absolute top-[160px] left-[640px] -translate-x-1/2 -translate-y-1/2">
                <HubNode time={time} arrive={T.N2} active={true} shape="diamond" icon={ShieldCheck} size={72} label="Resolver" />
              </div>

              <div className="absolute top-[280px] left-[400px] -translate-x-1/2 -translate-y-1/2">
                <HubNode time={time} arrive={T.N3} active={true} shape="rect" icon={Rocket} size={48} label="Deployment" />
              </div>

              <div className="absolute top-[400px] left-[400px] -translate-x-1/2 -translate-y-1/2">
                <HubNode time={time} arrive={T.N4} active={true} isForever={true} shape="large-circle" icon={Activity} size={76} label="Running Pipeline" />
              </div>

              {/* EVENT CHIPS */}
              <EventChip 
                type="adaptive" time={time} arrive={T.EV} active={runConfig.event === 'adaptive'}
                title="Performance Drop" name="Adaptive Routing" color="amber"
                className="absolute top-[400px] left-[170px] -translate-x-1/2 -translate-y-1/2 w-[160px]"
              />
              <EventChip 
                type="stitch" time={time} arrive={T.EV} active={runConfig.event === 'stitch'}
                title="Better Model Found" name="Stitch Model" color="purple"
                className="absolute top-[400px] left-[630px] -translate-x-1/2 -translate-y-1/2 w-[160px]"
              />
            </div>

            {/* STATUS STRIP */}
            <StatusStrip time={time} />
            
          </div>

          {/* RIGHT PANEL: Tracker */}
          <div className="flex flex-col justify-center pl-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-slate-200/60 pt-8 lg:pt-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Platform Intelligence</h3>
            
            <div className="flex flex-col gap-3">
              <TrackerItem time={time} arrive={T.N0} active={runConfig.branch === 'manual'} label="Manual Builder" />
              <TrackerItem time={time} arrive={T.N0} active={runConfig.branch === 'llm'} label="Pipeline LLM" />
              <TrackerItem time={time} arrive={T.N2} active={true} label="Resolver" />
              <TrackerItem time={time} arrive={T.EV + 500} active={runConfig.event === 'adaptive'} label="Adaptive Routing" />
              <TrackerItem time={time} arrive={T.EV + 500} active={runConfig.event === 'stitch'} label="Stitch Model" />
              <TrackerItem time={time} arrive={T.N4} active={true} isForever={true} label="Monitoring" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}


/* --- Master Timeline Choreographies --- */

function PulseLine({ path, time, arrive, active }: { path: string, time: MotionValue, arrive: number, active: boolean }) {
  const tStart = active ? arrive : 9999999;
  
  const offset = useTransform(time, [tStart, tStart + 700], [-0.2, 1], { clamp: true });
  const opacity = useTransform(
    time, 
    [tStart, tStart + 100, tStart + 600, tStart + 700], 
    [0, 1, 1, 0]
  );

  return (
    <>
      <path d={path} stroke="#e2e8f0" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
      <motion.path 
        d={path} 
        stroke="#3b82f6" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength: 0.2, pathOffset: offset, opacity }}
      />
    </>
  );
}

function HubNode({ time, arrive, active, isForever = false, shape, icon: Icon, size, label }: any) {
  const actualStart = active ? arrive : 9999999;
  const procStart = active ? arrive + 500 : 9999999;
  const checkStart = active ? arrive + 900 : 9999999;
  const exitStart = active ? arrive + 1300 : 9999999;

  const borderColor = useTransform(time, 
    [actualStart, procStart, isForever ? exitStart + 999999 : exitStart, isForever ? exitStart + 999999 : exitStart + 200], 
    ["#e2e8f0", "#3b82f6", "#3b82f6", isForever ? "#3b82f6" : "#e2e8f0"]
  );
  
  const borderWidth = useTransform(time,
    [actualStart, procStart, isForever ? exitStart + 999999 : exitStart, isForever ? exitStart + 999999 : exitStart + 200], 
    ["1px", "2px", "2px", isForever ? "2px" : "1px"]
  );

  const iconColor = useTransform(time, [actualStart, procStart], ["#64748b", "#3b82f6"]);
  
  const textColor = useTransform(time,
    [actualStart, procStart, isForever ? exitStart + 999999 : exitStart, isForever ? exitStart + 999999 : exitStart + 200], 
    ["#64748b", "#0f172a", "#0f172a", "#0f172a"]
  );

  const scale = useTransform(time, [actualStart, actualStart + 250, procStart], [1, 1.1, 1]);
  
  const rippleOpacity = useTransform(time, [actualStart, actualStart + 250, procStart], [0, 0.6, 0]);
  const rippleScale = useTransform(time, [actualStart, procStart], [1, 1.4]);

  const originalOpacity = useTransform(time, [checkStart, checkStart + 150], [1, isForever ? 1 : 0]);
  const checkOpacity = useTransform(time, [checkStart, checkStart + 150], [0, isForever ? 0 : 1]);
  const checkScale = useTransform(time, [checkStart, checkStart + 200, checkStart + 350], [0.5, isForever ? 0.5 : 1.2, isForever ? 0.5 : 1]);

  // Running Pipeline breathing loop
  const runningScale = useTransform(time, (t: number) => {
    if (!isForever || t < procStart) return 1;
    const cycle = (t - procStart) % 4000;
    if (cycle < 150) return 1.03;
    if (cycle > 150 && cycle < 300) return 1;
    if (cycle > 300 && cycle < 450) return 1.02;
    return 1;
  });

  const runningPulseOpacity = useTransform(time, (t: number) => {
    if (!isForever || t < procStart) return 0;
    const cycle = (t - procStart) % 4000;
    if (cycle > 500 && cycle < 1500) return 0.6 * (1 - ((cycle - 500) / 1000));
    return 0;
  });

  const runningPulseScale = useTransform(time, (t: number) => {
    if (!isForever || t < procStart) return 1;
    const cycle = (t - procStart) % 4000;
    if (cycle > 500 && cycle < 1500) return 1 + 0.5 * ((cycle - 500) / 1000);
    return 1;
  });

  // Calculate combined scale for the inner container
  const finalInnerScale = isForever ? runningScale : scale;

  let shapeClasses = "";
  let innerClasses = "";
  if (shape === 'circle') shapeClasses = "rounded-full";
  if (shape === 'large-circle') shapeClasses = "rounded-full";
  if (shape === 'diamond') { shapeClasses = "rounded-xl rotate-45"; innerClasses = "-rotate-45"; }
  if (shape === 'rect') shapeClasses = "rounded-xl";

  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className={`flex items-center justify-center bg-white box-border shadow-sm relative z-10 ${shapeClasses}`}
        style={{ width: size, height: size, borderColor, borderWidth }}
      >
        <motion.div className={`flex items-center justify-center ${innerClasses} w-full h-full relative`} style={{ scale: finalInnerScale }}>
          <motion.div style={{ color: iconColor, opacity: originalOpacity }} className="absolute flex items-center justify-center">
            <Icon size={size * 0.45} strokeWidth={2} />
          </motion.div>
          {!isForever && (
            <motion.div style={{ color: "#10b981", opacity: checkOpacity, scale: checkScale }} className="absolute flex items-center justify-center">
              <Check size={size * 0.45} strokeWidth={3} />
            </motion.div>
          )}
        </motion.div>
        
        {/* Arrival Ripple */}
        <motion.div
          className={`absolute inset-0 pointer-events-none ${shapeClasses}`}
          style={{ opacity: rippleOpacity, scale: rippleScale, backgroundColor: "rgba(59,130,246,0.15)" }}
        />

        {/* Running Pipeline Loop Pulse */}
        {isForever && (
          <motion.div
            className={`absolute inset-0 pointer-events-none border border-blue-500 ${shapeClasses}`}
            style={{ opacity: runningPulseOpacity, scale: runningPulseScale }}
          />
        )}
      </motion.div>
      <motion.span style={{ color: textColor }} className="mt-3 text-xs font-medium w-max absolute top-full">
        {label}
      </motion.span>
    </div>
  );
}

function PipelineReadyPill({ time, arrive }: { time: MotionValue, arrive: number }) {
  const procStart = arrive + 500;
  const exitStart = arrive + 1300;

  const borderColor = useTransform(time, [arrive, procStart, exitStart, exitStart + 200], ["#e2e8f0", "#bfdbfe", "#bfdbfe", "#e2e8f0"]);
  const bg = useTransform(time, [arrive, procStart, exitStart, exitStart + 200], ["#ffffff", "#eff6ff", "#eff6ff", "#ffffff"]);
  const textColor = useTransform(time, [arrive, procStart, exitStart, exitStart + 200], ["#64748b", "#1e40af", "#1e40af", "#0f172a"]);
  
  const scale = useTransform(time, [arrive, arrive + 250, procStart], [1, 1.05, 1]);
  const rippleOpacity = useTransform(time, [arrive, arrive + 250, procStart], [0, 0.4, 0]);
  const rippleScale = useTransform(time, [arrive, procStart], [1, 1.2]);

  return (
    <div className="relative">
      <motion.div 
        className="px-5 py-2.5 rounded-full border flex items-center justify-center shadow-sm relative z-10"
        style={{ borderColor, backgroundColor: bg, scale }}
      >
        <motion.span style={{ color: textColor }} className="text-sm font-medium whitespace-nowrap">
          Pipeline Ready
        </motion.span>
      </motion.div>
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-full bg-blue-500/15"
        style={{ opacity: rippleOpacity, scale: rippleScale }}
      />
    </div>
  );
}

function EventChip({ time, arrive, active, title, name, color, className }: any) {
  const chipAnt = active ? arrive + 500 : 9999999;
  const fadeStart = active ? arrive + 2300 : 9999999;
  
  const opacity = useTransform(time, [chipAnt, chipAnt + 300, fadeStart, fadeStart + 300], [0, 1, 1, 0]);
  const y = useTransform(time, [chipAnt, chipAnt + 300], [10, 0]);
  const textColor = color === 'amber' ? 'text-amber-500' : 'text-purple-500';

  return (
    <motion.div className={className} style={{ opacity, y }}>
      <div className="bg-white border border-slate-200 shadow-lg rounded-xl p-3 w-full text-center relative z-10">
        <div className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${textColor}`}>{title}</div>
        <div className="text-sm font-medium text-slate-900">{name}</div>
      </div>
    </motion.div>
  );
}

function TrackerItem({ time, arrive, active, isForever = false, label }: any) {
  const procStart = active ? arrive + 500 : 9999999;
  const exitStart = active ? arrive + 1300 : 9999999;

  const dotColor = useTransform(time, 
    [procStart, procStart + 100, isForever ? exitStart + 999999 : exitStart, isForever ? exitStart + 999999 : exitStart + 200], 
    ["rgba(59,130,246,0)", "#3b82f6", "#3b82f6", "rgba(59,130,246,0)"]
  );
  const dotBorder = useTransform(time,
    [procStart, procStart + 100, isForever ? exitStart + 999999 : exitStart, isForever ? exitStart + 999999 : exitStart + 200], 
    ["#cbd5e1", "#3b82f6", "#3b82f6", "rgba(203,213,225,0)"]
  );
  const textColor = useTransform(time,
    [procStart, procStart + 100, isForever ? exitStart + 999999 : exitStart, isForever ? exitStart + 999999 : exitStart + 200], 
    ["#94a3b8", "#0f172a", "#0f172a", "#334155"]
  );
  
  const checkOpacity = useTransform(time, [exitStart, exitStart + 150], [0, isForever ? 0 : 1]);
  const checkScale = useTransform(time, [exitStart, exitStart + 200, exitStart + 350], [0.5, isForever ? 0.5 : 1.2, isForever ? 0.5 : 1]);
  
  // Monitoring continuous radar pulse
  const pulseOpacity = useTransform(time, (t: number) => {
    if (!isForever || t < procStart) return 0;
    const cycle = (t - procStart) % 2500;
    return 0.5 * (1 - (cycle / 2500));
  });
  const pulseScale = useTransform(time, (t: number) => {
    if (!isForever || t < procStart) return 1;
    const cycle = (t - procStart) % 2500;
    return 1 + 1.5 * (cycle / 2500);
  });

  // Slide translation to sync with left timeline
  const x = useTransform(time, [procStart, procStart + 300], [0, 4], { ease: t => t*t*(3-2*t) });

  return (
    <motion.div className="flex items-center gap-4 py-1" style={{ x }}>
      <div className="w-5 h-5 flex items-center justify-center shrink-0 relative">
        <motion.div
          className="w-2.5 h-2.5 rounded-full absolute"
          style={{ backgroundColor: dotColor, borderColor: dotBorder, borderWidth: "2px" }}
        />
        {!isForever && (
          <motion.div style={{ color: "#10b981", opacity: checkOpacity, scale: checkScale }} className="absolute">
            <Check size={18} strokeWidth={3} />
          </motion.div>
        )}
        {isForever && (
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/30 pointer-events-none"
            style={{ opacity: pulseOpacity, scale: pulseScale }}
          />
        )}
      </div>
      <motion.span style={{ color: textColor }} className="text-sm font-medium">
        {label}
      </motion.span>
    </motion.div>
  );
}

function StatusStrip({ time }: { time: MotionValue }) {
  // Gentle shimmer every 8 seconds on the entire strip
  const opacity = useTransform(time, (t: number) => {
    if (t < T.N4) return 1;
    const cycle = (t - T.N4) % 8000;
    if (cycle < 1000) {
      return cycle < 500 ? 1 - (cycle/500)*0.5 : 0.5 + ((cycle-500)/500)*0.5;
    }
    return 1;
  });

  return (
    <motion.div 
      className="absolute bottom-[-10px] w-full flex items-center justify-center gap-8 md:gap-16 text-[11px] uppercase tracking-wider font-semibold text-slate-400"
      style={{ opacity }}
    >
      <span className="flex items-center gap-1.5">
        Pipeline: <span className="text-slate-900">Running</span>
      </span>
      <span>Nodes: <span className="text-slate-600">14 / 14</span></span>
      <span className="flex items-center gap-1.5">
        Resolver: <span className="text-slate-900">Healthy</span>
      </span>
      <span className="flex items-center gap-1.5">
        Monitoring: <span className="text-slate-900">Active</span>
      </span>
    </motion.div>
  );
}
