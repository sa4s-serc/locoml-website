import { Container } from '@/components/layout/Layout';
import { FadeUp } from '@/components/animations/Animations';
import { GitBranch, Brain, Zap, Activity } from 'lucide-react';

export function PlatformOverview() {
  const blocks = [
    {
      title: "Pipeline Intelligence",
      description: "Generates optimal workflows and detects semantic inconsistencies.",
      icon: <Brain className="w-5 h-5 text-slate-500" />
    },
    {
      title: "Semantic Understanding",
      description: "Understands dataset features and recommends appropriate architectures.",
      icon: <GitBranch className="w-5 h-5 text-slate-500" />
    },
    {
      title: "Autonomous Optimization",
      description: "Reroutes inference and stitches models to guarantee continuous uptime.",
      icon: <Zap className="w-5 h-5 text-slate-500" />
    },
    {
      title: "Production Operations",
      description: "Manages deployments, stress testing, and real-time inference monitoring.",
      icon: <Activity className="w-5 h-5 text-slate-500" />
    }
  ];

  return (
    <section className="relative w-full pt-12 pb-24 bg-slate-50 border-y border-border/50">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.2] mb-6">
              Everything you need to build autonomous machine learning systems.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              LoCoML combines intelligent workflow generation, semantic validation, autonomous optimization, deployment automation, and continuous monitoring into a single open-source platform.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {blocks.map((block, index) => (
            <FadeUp key={index} delay={0.2 + (index * 0.1)} className="flex flex-col items-start">
              <div className="w-10 h-10 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-5">
                {block.icon}
              </div>
              <h3 className="text-[17px] font-semibold text-slate-900 mb-2">{block.title}</h3>
              <p className="text-[15px] text-slate-500 leading-[1.6]">{block.description}</p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
