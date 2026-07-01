import { Container } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { ResponsiveVideo } from '@/components/common/ResponsiveVideo';
import { FadeUp, FadeIn } from '@/components/animations/Animations';
import { Icons } from '@/constants/icons';
import { Tag } from '@/components/ui/TypographyAndBadges';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24 pb-16 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col items-start text-left">
            <FadeUp delay={0.1}>
              <h1 className="max-w-2xl text-heading">
                The Operating System for Autonomous Machine Learning
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-paragraph md:text-xl leading-relaxed">
                A unified platform designed to build, validate, orchestrate, and deploy machine learning pipelines with built-in intelligence. From rapid prototyping to semantic validation in a single environment.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="w-full sm:w-auto font-medium">
                Explore Platform
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-medium">
                Read Research <Icons.ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </FadeUp>

            <FadeUp delay={0.4} className="mt-12 flex flex-wrap items-center gap-3 opacity-80">
              <Tag className="bg-transparent border-slate-300 text-slate-500 text-xs px-2 py-1">Semantic Validation</Tag>
              <Tag className="bg-transparent border-slate-300 text-slate-500 text-xs px-2 py-1">Autonomous Resolver</Tag>
              <Tag className="bg-transparent border-slate-300 text-slate-500 text-xs px-2 py-1">Pipeline Intelligence</Tag>
            </FadeUp>
          </div>

          {/* Right Column: Video Demonstration */}
          <div className="relative w-full">
            <FadeIn delay={0.5}>
              <div className="relative mx-auto w-full max-w-2xl rounded-2xl border border-slate-200/50 bg-white p-2 shadow-2xl shadow-primary/5">
                <ResponsiveVideo 
                  src="" 
                  poster=""
                  aspectRatio="16/9" 
                  rounded="xl" 
                  className="w-full border border-slate-100"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </section>
  );
}
