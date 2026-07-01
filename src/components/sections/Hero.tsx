import { Container } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ResponsiveVideo } from '@/components/common/ResponsiveVideo';
import { FadeUp, FadeIn } from '@/components/animations/Animations';
import { Icons } from '@/constants/icons';
import { Tag } from '@/components/ui/TypographyAndBadges';

export function Hero() {
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
              <Tag className="bg-transparent border-slate-200/50 text-slate-400 text-xs px-2 py-1 hover:border-slate-300 hover:text-slate-500 transition-colors cursor-default">Open Source</Tag>
              <Tag className="bg-transparent border-slate-200/50 text-slate-400 text-xs px-2 py-1 hover:border-slate-300 hover:text-slate-500 transition-colors cursor-default">Visual Pipelines</Tag>
              <Tag className="bg-transparent border-slate-200/50 text-slate-400 text-xs px-2 py-1 hover:border-slate-300 hover:text-slate-500 transition-colors cursor-default">Autonomous Resolver</Tag>
              <Tag className="bg-transparent border-slate-200/50 text-slate-400 text-xs px-2 py-1 hover:border-slate-300 hover:text-slate-500 transition-colors cursor-default">Stress Testing</Tag>
              <Tag className="bg-transparent border-slate-200/50 text-slate-400 text-xs px-2 py-1 hover:border-slate-300 hover:text-slate-500 transition-colors cursor-default">Adaptive Routing</Tag>
            </FadeUp>
          </div>

          {/* Right Column: Video Demonstration */}
          <div className="relative w-full">
            {/* Soft Breathing Blue Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse-subtle" />
            
            <FadeIn delay={0.5}>
              <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-white/40 bg-white/60 backdrop-blur-md p-2 shadow-[0_0_60px_-15px_rgba(37,99,235,0.15)] animate-float">
                <div className="mb-2 flex items-center justify-between px-3 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-slate-500 flex items-center gap-2">
                    <Icons.Monitor className="h-3 w-3 text-primary/80" /> Product Preview
                  </span>
                </div>
                
                <ResponsiveVideo 
                  src="" 
                  poster=""
                  aspectRatio="16/9" 
                  rounded="2xl" 
                  className="w-full border border-slate-100 bg-white"
                />
                
                <div className="mt-3 flex items-center justify-between px-3 pb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">2:45 Product Overview</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-400 opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <Icons.ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
