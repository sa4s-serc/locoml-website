import { architectureConfig } from '@/config/architecture.config';
import { IntelligenceNode } from './IntelligenceNode';

export function IntelligenceEngine() {
  const { intelligenceEngine } = architectureConfig;

  return (
    <div className="group relative w-full rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-8 md:p-10 shadow-[0_0_40px_-10px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-[2px] hover:border-primary/40 hover:bg-primary/[0.07] hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.25)]">
      
      {/* Title Area */}
      <div className="mb-10 text-center flex flex-col items-center">
        <h3 className="font-heading text-xl font-bold tracking-tight text-primary sm:text-2xl">
          {intelligenceEngine.title}
        </h3>
        <span className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-primary/60">
          {intelligenceEngine.subtitle}
        </span>
        <p className="mt-4 max-w-lg text-sm text-slate-600">
          {intelligenceEngine.description}
        </p>
      </div>

      {/* Grid of Groups */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {intelligenceEngine.groups.map((group) => (
          <div key={group.id} className="flex flex-col rounded-2xl border border-primary/10 bg-white/50 p-4">
            <h4 className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center">
              {group.title}
            </h4>
            <div className="flex flex-col gap-3">
              {group.nodes.map((node) => (
                <IntelligenceNode key={node.id} node={node} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="mt-8 text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          {intelligenceEngine.footerText}
        </span>
      </div>

    </div>
  );
}
