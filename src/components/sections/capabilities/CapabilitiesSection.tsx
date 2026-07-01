import { capabilitiesConfig } from '@/config/capabilities.config';
import { PlatformModule } from './PlatformModule';
import { FadeUp, StaggerContainer } from '@/components/animations/Animations';
import { PipelineBuilderIllustration } from './modules/PipelineBuilder/Illustration';
import { ResolverIllustration } from './modules/Resolver/Illustration';
import { DashboardIllustration } from './modules/Dashboard/Illustration';
import { StressTestingIllustration } from './modules/StressTesting/Illustration';
import { InferenceStudioIllustration } from './modules/InferenceStudio/Illustration';
import { AdaptiveRoutingIllustration } from './modules/AdaptiveRouting/Illustration';
import { StitchModelIllustration } from './modules/StitchModel/Illustration';
import { PipelinePortabilityIllustration } from './modules/PipelinePortability/Illustration';
import { PipelineLLMIllustration } from './modules/PipelineLLM/Illustration';

const IllustrationMap: Record<string, React.ReactNode> = {
  'pipeline-builder': <PipelineBuilderIllustration />,
  'resolver': <ResolverIllustration />,
  'dashboard': <DashboardIllustration />,
  'stress-testing': <StressTestingIllustration />,
  'inference-studio': <InferenceStudioIllustration />,
  'routing': <AdaptiveRoutingIllustration />,
  'stitch-model': <StitchModelIllustration />,
  'pipeline-portability': <PipelinePortabilityIllustration />,
  'pipeline-llm': <PipelineLLMIllustration />
};

export function CapabilitiesSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto">
          <FadeUp delay={0.1}>
            <h2 className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              Core Capabilities
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h3 className="mb-6 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-tight">
              A Complete Environment <br className="hidden sm:block" />
              for Building Intelligent Systems.
            </h3>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-base text-slate-500 sm:text-lg max-w-2xl">
              Design visual pipelines, train and manage models, validate workflows, deploy production-ready systems, and monitor every stage of the machine learning lifecycle through one unified open source platform.
            </p>
          </FadeUp>
        </div>

        {/* Editorial Grid Layout */}
        <StaggerContainer delay={0.4} staggerChildren={0.1} className="flex flex-col gap-6">
          
          {/* Hero Row (5 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <FadeUp className="md:col-span-2 lg:col-span-3 lg:row-span-2 flex h-full">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'pipeline-builder')!} 
                media={IllustrationMap['pipeline-builder']}
                className="w-full h-full"
              />
            </FadeUp>
            <FadeUp className="flex h-full lg:col-span-2">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'resolver')!} 
                media={IllustrationMap['resolver']}
                className="w-full h-full"
              />
            </FadeUp>
            <FadeUp className="flex h-full lg:col-span-2">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'dashboard')!} 
                media={IllustrationMap['dashboard']}
                className="w-full h-full"
              />
            </FadeUp>
          </div>

          {/* Catalog Rows (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 2 */}
            <FadeUp className="flex h-full">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'stress-testing')!} 
                media={IllustrationMap['stress-testing']}
                className="w-full h-full"
              />
            </FadeUp>
            <FadeUp className="flex h-full">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'inference-studio')!} 
                media={IllustrationMap['inference-studio']}
                className="w-full h-full"
              />
            </FadeUp>
            <FadeUp className="flex h-full md:col-span-2 lg:col-span-1">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'routing')!} 
                media={IllustrationMap['routing']}
                className="w-full h-full"
              />
            </FadeUp>

            {/* Row 3 */}
            <FadeUp className="flex h-full">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'stitch-model')!} 
                media={IllustrationMap['stitch-model']}
                className="w-full h-full"
              />
            </FadeUp>
            <FadeUp className="flex h-full">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'pipeline-portability')!} 
                media={IllustrationMap['pipeline-portability']}
                className="w-full h-full"
              />
            </FadeUp>
            <FadeUp className="flex h-full md:col-span-2 lg:col-span-1">
              <PlatformModule 
                {...capabilitiesConfig.find(c => c.id === 'pipeline-llm')!} 
                media={IllustrationMap['pipeline-llm']}
                className="w-full h-full"
              />
            </FadeUp>
          </div>
        </StaggerContainer>

        {/* Closing Statement */}
        <div className="mt-24 sm:mt-32 mb-12 flex justify-center text-center">
          <FadeUp delay={0.6}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-900 leading-snug">
              Everything you need to build, validate, deploy,<br className="hidden md:block"/>
              and improve machine learning systems.<br/><br/>
              <span className="text-primary">One unified platform.</span>
            </h3>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
