import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { FadeUp } from '@/components/animations/Animations';
import { WorkflowComparison } from './WorkflowComparison';
import { TransitionLine } from './TransitionLine';

export function WhySection() {
  return (
    <section className="relative w-full bg-white pt-36 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-t border-border/50">
      <Container className="max-w-[1280px]">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Column: Typography */}
          <div className="flex flex-col items-start text-left lg:sticky lg:top-32">
            <FadeUp>
              <Tag className="mb-6">WHY LOCOML EXISTS</Tag>
            </FadeUp>
            
            <FadeUp delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl md:text-5xl leading-[1.1]">
                Machine Learning Has Outgrown Traditional Workflows.
              </h2>
            </FadeUp>
            
            <FadeUp delay={0.2} className="mt-8 space-y-6 text-lg text-paragraph">
              <p>
                Building a machine learning model is only one small part of the journey.
              </p>
              <p>
                Real-world ML systems require dataset understanding, complex preprocessing, pipeline construction, semantic validation, debugging, continuous monitoring, and scalable deployment.
              </p>
              <p>
                These critical stages are historically disconnected across dozens of fragmented tools—requiring constant manual intervention and painful trial and error.
              </p>
              <p className="font-medium text-heading">
                LoCoML was created to unify these disconnected stages into one natively intelligent environment.
              </p>
            </FadeUp>
          </div>

          {/* Right Column: Workflow Comparison */}
          <div className="w-full">
            <WorkflowComparison />
          </div>

        </div>

        {/* Bottom Transition */}
        <TransitionLine />

      </Container>
    </section>
  );
}
