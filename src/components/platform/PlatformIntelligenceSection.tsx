import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { Workflow, BrainCircuit, ShieldCheck, CloudUpload, Activity, Split, Merge } from 'lucide-react';

const PATH_MANUAL = "M 250 60 L 250 90 Q 250 110 270 110 L 330 110 Q 350 110 350 160";
const PATH_LLM = "M 450 60 L 450 90 Q 450 110 430 110 L 370 110 Q 350 110 350 160";
const PATH_CORE = "M 350 160 L 350 580";
const PATH_ADAPTIVE = "M 350 580 L 350 640 Q 350 670 320 670 L 250 670 Q 220 670 220 700";
const PATH_STITCH = "M 350 580 L 350 640 Q 350 670 380 670 L 450 670 Q 480 670 480 700";

export function PlatformIntelligenceSection() {
  return (
    <section className="relative w-full pt-24 pb-24 lg:pb-32 bg-white overflow-hidden">
      <Container>
        {/* Header Section */}
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
          
          {/* Architecture Canvas (65-70%) */}
          <div className="w-full lg:w-[65%] flex justify-center lg:justify-start">
            <div className="relative w-[700px] h-[750px] shrink-0 origin-top scale-[0.5] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
              
              {/* Static Connectors (Always Slate-200, 1px) */}
              <svg width="700" height="750" className="absolute inset-0 pointer-events-none z-0">
                <path d={PATH_MANUAL} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d={PATH_LLM} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d={PATH_CORE} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" />
                <path d={PATH_ADAPTIVE} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d={PATH_STITCH} stroke="#e2e8f0" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Nodes */}
              <Node 
                id="builder" shape="circle" icon={Workflow} 
                x={250} y={60} w={48} h={48} 
                label="Manual Builder" labelPosition="left"
              />
              
              <Node 
                id="llm" shape="circle" icon={BrainCircuit} 
                x={450} y={60} w={48} h={48} 
                label="Pipeline LLM" labelPosition="right"
              />
              
              <Node 
                id="ready" shape="pill" icon={null} 
                x={350} y={160} w={140} h={40} 
                label="Pipeline Ready" 
              />
              
              <Node 
                id="resolver" shape="diamond" icon={ShieldCheck} 
                x={350} y={300} w={88} h={88} 
                label="Resolver" labelPosition="left"
              />
              
              <Node 
                id="deploy" shape="square" icon={CloudUpload} 
                x={350} y={440} w={56} h={56} 
                label="Deployment" labelPosition="left"
              />
              
              <Node 
                id="running" shape="circle" icon={Activity} 
                x={350} y={580} w={90} h={90} 
                label="Running Pipeline" labelPosition="left"
              />
              
              <Node 
                id="adaptive" shape="pill" icon={Split} 
                x={220} y={700} w={190} h={40} 
                label="Adaptive Routing" 
              />
              
              <Node 
                id="stitch" shape="pill" icon={Merge} 
                x={480} y={700} w={170} h={40} 
                label="Stitch Model" 
              />
              
            </div>
          </div>

          {/* Right Educational Panel (30-35%) */}
          <div className="w-full lg:w-[35%] flex flex-col pt-4 lg:pt-[120px] lg:pl-12">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-10">
              Why this architecture matters?
            </h3>
            
            <div className="flex flex-col gap-10">
              <Feature 
                title="Dual Entry"
                desc="Build visually or generate with Pipeline LLM."
              />
              <Feature 
                title="Resolver"
                desc="Automatically detects and repairs structural and semantic issues."
              />
              <Feature 
                title="Deployment"
                desc="Packages validated pipelines for execution."
              />
              <Feature 
                title="Adaptive Intelligence"
                desc="Routes or recommends better models only when needed."
              />
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}

/* --- Sub-Components --- */

function Feature({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h4 className="text-[15px] font-semibold text-slate-900 tracking-tight">
        {title}
      </h4>
      <p className="text-[14.5px] text-slate-500 leading-relaxed pr-4">
        {desc}
      </p>
    </div>
  );
}

function Node({ id, shape, icon: Icon, x, y, w, h, label, labelPosition }: any) {
  const isCapsule = shape === 'pill';
  const isResolver = shape === 'diamond';

  let shapeClass = "";
  let innerClasses = "";
  if (shape === 'circle') shapeClass = "rounded-full";
  if (isCapsule) shapeClass = "rounded-full px-5";
  if (shape === 'square') shapeClass = "rounded-2xl";
  if (isResolver) { shapeClass = "rounded-2xl rotate-45"; innerClasses = "-rotate-45"; }

  const visualRadius = isResolver ? (w * 1.414) / 2 : w / 2;

  return (
    <div 
      className="absolute flex items-center justify-center z-10 pointer-events-none" 
      style={{ left: x - 150, top: y - h/2, width: 300, height: h }}
    >
      
      {/* Label Left */}
      {!isCapsule && labelPosition === 'left' && (
        <div 
          className="absolute text-[15px] font-semibold text-slate-900 text-right whitespace-nowrap bg-white/80 px-2 py-0.5 z-20"
          style={{ right: 150 + visualRadius + 24 }}
        >
          {label}
        </div>
      )}

      {/* The Shape Container */}
      <div className="relative flex items-center justify-center bg-white" style={{ width: w, height: h }}>
        {/* Main Node Box */}
        <div className={`flex items-center justify-center relative z-10 w-full h-full box-border border-[1.5px] border-slate-200 bg-white ${shapeClass}`}>
          <div className={`flex items-center justify-center gap-2.5 ${innerClasses} w-full h-full relative z-10`}>
            {Icon && (
              <div className="text-slate-400">
                <Icon size={isResolver ? w * 0.45 : 20} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
              </div>
            )}
            {isCapsule && (
              <span className="text-[15px] font-semibold text-slate-500 whitespace-nowrap">
                {label}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Label Right */}
      {!isCapsule && labelPosition === 'right' && (
        <div 
          className="absolute text-[15px] font-semibold text-slate-900 text-left whitespace-nowrap bg-white/80 px-2 py-0.5 z-20"
          style={{ left: 150 + visualRadius + 24 }}
        >
          {label}
        </div>
      )}

    </div>
  );
}
