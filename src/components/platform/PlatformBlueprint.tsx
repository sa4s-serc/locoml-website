import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { FadeUp } from '@/components/animations/Animations';

export function PlatformBlueprint() {
  const duration = 6;
  const transition: any = {
    duration,
    repeat: Infinity,
    ease: "linear",
  };

  const nodes = [
    { label: "Build" },
    { label: "Validate" },
    { label: "Optimize" },
    { label: "Deploy" },
    { label: "Monitor" }
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-center">
          
          <FadeUp>
            <div className="text-center mb-16">
               <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Platform Flow</h3>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="w-full overflow-x-auto no-scrollbar pb-8">
            <div className="relative w-full max-w-[800px] h-[80px] mx-auto font-mono flex items-center justify-between px-8">
              
              {/* Connection Line */}
              <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-[1px] bg-slate-200 z-0" />
              
              {/* Animated Pulse */}
              <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-[1px] bg-transparent z-10 overflow-hidden">
                 <motion.div 
                   className="h-full bg-primary w-[80px]"
                   animate={{ x: ["-100px", "800px"] }}
                   transition={transition}
                 />
              </div>

              {/* Nodes */}
              {nodes.map((node, index) => (
                <div 
                  key={index} 
                  className="relative z-20 flex items-center justify-center bg-white border border-slate-300 rounded-[8px] w-24 h-12 shadow-sm"
                >
                  <span className="text-[12px] font-medium text-slate-700">{node.label}</span>
                </div>
              ))}

            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
