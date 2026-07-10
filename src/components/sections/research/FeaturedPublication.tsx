import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';
import { buttonVariants } from '@/components/ui/Button';
import { FadeUp, Slide, StaggerContainer } from '@/components/animations/Animations';

export function FeaturedPublication() {
  return (
    <section className="relative w-full pt-[120px] pb-[60px] bg-white overflow-hidden">
      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[750px] mx-auto mb-10">
          <FadeUp>
            <Tag className="mb-8 border border-slate-200 bg-white px-3 py-1 text-xs font-mono tracking-wider">
              FEATURED PUBLICATION
            </Tag>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-6">
              LoCoML: A Low-Code Framework for Real-World Machine Learning Inference Pipelines
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-[650px] mx-auto">
              Presented at the 4th International Workshop on Concepts in AI for Software Engineering (CAIN 2025), co-located with ICSE 2025.
            </p>
          </FadeUp>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (60%): Paper Information */}
          <Slide direction="left" delay={0.3} className="w-full lg:w-[60%] flex">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 lg:p-12 flex flex-col h-full w-full">
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight mb-4">
                LoCoML: A Low-Code Framework for Real-World Machine Learning Inference Pipelines
              </h3>
              
              <p className="text-sm md:text-base text-slate-500 mb-8 font-medium">
                Kritin Maddireddy, Santhosh Kotekal Methukula, Chandrasekar Sridhar, Karthik Vaidhyanathan
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  CAIN 2025
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  ICSE 2025
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Research Paper
                </span>
              </div>
              
              <div className="mb-10 text-slate-600 leading-relaxed space-y-4 flex-grow">
                <p>
                  The rapid adoption of Machine Learning (ML) across industries has exposed significant challenges in operationalizing ML models. While numerous platforms exist to streamline MLOps, they often cater to highly technical users and require extensive custom coding for deployment. In this paper, we present LoCoML, a low-code framework designed to simplify the construction and execution of real-world machine learning inference pipelines...
                </p>
              </div>
              
              <StaggerContainer delay={0.5} staggerChildren={0.1} className="flex flex-col sm:flex-row gap-4 mt-auto">
                <FadeUp>
                  <a 
                    href="https://arxiv.org/html/2501.14165v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: 'default', size: 'lg', className: 'w-full sm:w-auto' })}
                  >
                    Read Paper
                  </a>
                </FadeUp>
                <FadeUp>
                  <a 
                    href="https://arxiv.org/abs/2501.14165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: 'outline', size: 'lg', className: 'w-full sm:w-auto' })}
                  >
                    View arXiv
                  </a>
                </FadeUp>
              </StaggerContainer>
              
            </div>
          </Slide>

          {/* Right Column (40%): Paper Preview */}
          <Slide direction="right" delay={0.4} className="w-full lg:w-[40%] flex justify-center lg:justify-end">
            <a 
              href={`${import.meta.env.BASE_URL}2501.14165v1.pdf`}
              download="LoCoML_Research_Paper_2025.pdf"
              aria-label="Download LoCoML Research Paper PDF"
              className="block bg-white rounded-lg border border-slate-200 shadow-md p-8 md:p-10 w-full max-w-[450px] aspect-[1/1.414] relative group hover:-translate-y-1 hover:shadow-lg hover:border-primary active:bg-slate-50/50 active:scale-[0.99] active:shadow-sm transition-all duration-[250ms] active:duration-[120ms] ease-out flex flex-col cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              onKeyDown={(e) => {
                if (e.key === ' ') {
                  e.preventDefault();
                  e.currentTarget.click();
                }
              }}
            >
              
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded bg-red-50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-red-600 border border-red-200">
                  PDF
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400">
                2025
              </div>
              
              <div className="w-full h-px bg-slate-200 mb-8 mt-4" />
              
              <h4 className="text-xl md:text-2xl font-serif text-slate-800 text-center mb-6 px-4 leading-snug group-active:opacity-90 transition-opacity duration-[120ms]">
                LoCoML: A Low-Code Framework for<br />
                Real-World Machine Learning
              </h4>
              
              <div className="w-full h-px bg-slate-200 mb-6" />
              
              <div className="text-center text-[10px] md:text-xs text-slate-500 mb-8 px-4 leading-relaxed group-active:opacity-90 transition-opacity duration-[120ms]">
                Kritin Maddireddy &nbsp; Santhosh Kotekal Methukula<br />
                Chandrasekar Sridhar &nbsp; Karthik Vaidhyanathan
              </div>
              
              <div className="w-full h-px bg-slate-200 mb-8" />
              
              <div className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-800 mb-6 group-active:opacity-90 transition-opacity duration-[120ms]">
                Abstract
              </div>
              
              <div className="space-y-3 px-6 md:px-8 flex-grow group-active:opacity-90 transition-opacity duration-[120ms]">
                <div className="h-2 bg-slate-100 rounded w-full" />
                <div className="h-2 bg-slate-100 rounded w-[95%] mx-auto" />
                <div className="h-2 bg-slate-100 rounded w-full" />
                <div className="h-2 bg-slate-100 rounded w-[90%] mx-auto" />
                <div className="h-2 bg-slate-100 rounded w-full" />
                <div className="h-2 bg-slate-100 rounded w-[85%] mx-auto" />
                <div className="h-2 bg-slate-100 rounded w-[95%] mx-auto" />
                <div className="h-2 bg-slate-100 rounded w-[60%] mx-auto" />
              </div>
              
              <div className="w-full h-px bg-slate-200 mt-8 mb-4" />
              
            </a>
          </Slide>

        </div>
      </Container>
    </section>
  );
}
