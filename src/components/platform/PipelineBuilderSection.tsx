import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { FadeUp } from '@/components/animations/Animations';
import { Tag } from '@/components/ui/TypographyAndBadges';

function BuilderCanvas() {
  const loopDuration = 10;
  
  // Transition configuration for 10s loop
  const transition: any = { duration: loopDuration, repeat: Infinity, ease: "easeInOut" };

  // Core Timeline (0s - 10s)
  // Node 1: 0.0s (0.0)
  // Conn 1: 0.5s (0.05)
  // Node 2: 1.0s (0.1)
  // Conn 2: 1.5s (0.15)
  // Node 3: 2.0s (0.2)
  // Vert C: 2.5s (0.25)
  // Node 4: 3.0s (0.3)
  // SemAnl: 3.3s (0.33)
  // ExecRd: 3.8s (0.38)
  // Reset : 9.0s (0.9)

  return (
    <motion.div 
      className="w-full h-full min-h-[360px] bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row font-mono hover:border-slate-300 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-35%", once: false }}
    >
      {/* Canvas Area */}
      <div className="flex-1 relative bg-slate-50/50 flex items-center justify-center p-8">
        
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative w-64 h-32 flex items-center justify-center">
          
          {/* Horizontal Connection 1 (Node 1 -> Node 2) */}
          <div className="absolute left-[32px] right-1/2 top-[47px] h-[2px] z-0 overflow-hidden">
             <motion.div 
               className="h-full bg-slate-300 w-full origin-left"
               variants={{
                 hidden: { scaleX: 0 },
                 visible: { scaleX: [0, 0, 1, 1, 0], transition: { ...transition, times: [0, 0.05, 0.1, 0.9, 1] } }
               }}
             />
          </div>

          {/* Horizontal Connection 2 (Node 2 -> Node 3) */}
          <div className="absolute left-1/2 right-[32px] top-[47px] h-[2px] z-0 overflow-hidden">
             <motion.div 
               className="h-full bg-slate-300 w-full origin-left"
               variants={{
                 hidden: { scaleX: 0 },
                 visible: { scaleX: [0, 0, 1, 1, 0], transition: { ...transition, times: [0, 0.15, 0.2, 0.9, 1] } }
               }}
             />
          </div>

          {/* Vertical Connection (Node 2 -> Node 4) */}
          <div className="absolute left-[calc(50%-1px)] top-[48px] bottom-[32px] w-[2px] z-0 overflow-hidden">
             <motion.div 
               className="w-full h-full bg-slate-300 origin-top"
               variants={{
                 hidden: { scaleY: 0 },
                 visible: { scaleY: [0, 0, 1, 1, 0], transition: { ...transition, times: [0, 0.25, 0.3, 0.9, 1] } }
               }}
             />
          </div>

          {/* Node 1 */}
          <motion.div 
            className="absolute left-4 top-12 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[2px] border-slate-300 z-10 flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { 
                opacity: [0, 1, 1, 0], 
                scale: [0.85, 1.05, 1, 1, 0.85],
                transition: { ...transition, times: [0, 0.02, 0.04, 0.9, 1] } 
              }
            }}
          />

          {/* Node 2 */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-12 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[2px] border-slate-300 z-10 flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { 
                opacity: [0, 0, 1, 1, 0], 
                scale: [0.85, 0.85, 1.05, 1, 1, 0.85],
                transition: { ...transition, times: [0, 0.1, 0.12, 0.14, 0.9, 1] } 
              }
            }}
          />

          {/* Node 3 */}
          <motion.div 
            className="absolute right-4 top-12 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-[2px] border-slate-300 z-10 flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { 
                opacity: [0, 0, 1, 1, 0], 
                scale: [0.85, 0.85, 1.05, 1, 1, 0.85],
                transition: { ...transition, times: [0, 0.2, 0.22, 0.24, 0.9, 1] } 
              }
            }}
          />

          {/* Node 4 (Validation - Pop at 3.0s) */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 bottom-4 w-8 h-8 rounded-full bg-white border-[2px] border-slate-300 z-10 flex items-center justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              visible: { 
                opacity: [0, 0, 1, 1, 0], 
                scale: [0.85, 0.85, 1.05, 1, 1, 0.85],
                transition: { ...transition, times: [0, 0.3, 0.32, 0.34, 0.9, 1] } 
              }
            }}
          >
            {/* Validation Pulse inner dot */}
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              variants={{
                hidden: { opacity: 0, scale: 1 },
                visible: { 
                  opacity: [0, 0, 1, 1, 0, 0],
                  scale: [1, 1, 1.5, 1, 1, 1],
                  transition: { ...transition, times: [0, 0.31, 0.33, 0.35, 0.9, 1] }
                }
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Status Sidebar */}
      <div className="w-full md:w-[220px] bg-white border-t md:border-t-0 md:border-l border-slate-200 p-6 flex flex-col justify-center">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Status</div>
        
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-slate-600 font-medium">Dataset</span>
            <motion.span 
              className="text-[11px] font-bold" 
              variants={{
                hidden: { opacity: 0.3, color: "#94a3b8" },
                visible: { 
                  opacity: [0.3, 0.3, 1, 1, 0.3],
                  color: ["#94a3b8", "#94a3b8", "#22c55e", "#22c55e", "#94a3b8"],
                  transition: { ...transition, times: [0, 0.1, 0.12, 0.9, 1] }
                }
              }}
            >✓</motion.span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-slate-600 font-medium">Training</span>
            <motion.span 
              className="text-[11px] font-bold" 
              variants={{
                hidden: { opacity: 0.3, color: "#94a3b8" },
                visible: { 
                  opacity: [0.3, 0.3, 1, 1, 0.3],
                  color: ["#94a3b8", "#94a3b8", "#22c55e", "#22c55e", "#94a3b8"],
                  transition: { ...transition, times: [0, 0.2, 0.22, 0.9, 1] }
                }
              }}
            >✓</motion.span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-slate-600 font-medium">Validation</span>
            <motion.span 
              className="text-[11px] font-bold" 
              variants={{
                hidden: { opacity: 0.3, color: "#94a3b8" },
                visible: { 
                  opacity: [0.3, 0.3, 1, 1, 0.3],
                  color: ["#94a3b8", "#94a3b8", "#22c55e", "#22c55e", "#94a3b8"],
                  transition: { ...transition, times: [0, 0.3, 0.32, 0.9, 1] }
                }
              }}
            >✓</motion.span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-slate-600 font-medium">Deployment</span>
            <motion.span 
              className="text-[11px] font-bold" 
              variants={{
                hidden: { opacity: 0.3, color: "#94a3b8" },
                visible: { 
                  opacity: [0.3, 0.3, 1, 1, 0.3],
                  color: ["#94a3b8", "#94a3b8", "#2563eb", "#2563eb", "#94a3b8"],
                  transition: { ...transition, times: [0, 0.38, 0.4, 0.9, 1] }
                }
              }}
            >Ready</motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PipelineBuilderSection() {
  const loopDuration = 10;
  const transition: any = { duration: loopDuration, repeat: Infinity, ease: "easeInOut" };

  return (
    <section className="relative w-full py-24 lg:py-32 bg-white">
      <Container>
        <div className="flex flex-col items-start mb-16 max-w-3xl">
          <FadeUp>
            <Tag className="mb-6">PIPELINE BUILDER</Tag>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-[1.2] mb-6">
              Design intelligent ML workflows visually.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-slate-500 leading-relaxed">
              Construct complex machine learning pipelines through an intuitive visual interface. Every connection is semantically validated in real-time before execution.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-2 h-full">
            <FadeUp delay={0.3} className="h-full">
              <BuilderCanvas />
            </FadeUp>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <div className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-6">
                Capabilities
              </div>
              <ul className="flex flex-col gap-4">
                {['Drag & Drop', 'Auto Connect', 'Semantic Validation', 'One Click Execution'].map((item, i) => (
                  <FadeUp key={i} delay={0.4 + (i * 0.1)} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-slate-600 font-medium">{item}</span>
                  </FadeUp>
                ))}
              </ul>
            </div>

            <FadeUp delay={0.8}>
              <motion.div 
                className="relative border border-slate-200 rounded-lg p-5 bg-slate-50/50 font-mono text-[11px] uppercase tracking-wider overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-35%", once: false }}
              >
                <div className="flex flex-col gap-3 relative z-10">
                  <motion.div 
                    className="flex justify-between font-bold"
                    variants={{
                      hidden: { opacity: 0.4, color: "#94a3b8" },
                      visible: { opacity: [0.4, 1, 1, 0.4], color: ["#94a3b8", "#64748b", "#64748b", "#94a3b8"], transition: { ...transition, times: [0, 0.05, 0.9, 1] } }
                    }}
                  >
                    <span>Visual Workflow</span>
                  </motion.div>
                  <div className="pl-4 text-slate-400">↓</div>
                  <motion.div 
                    className="flex justify-between font-bold"
                    variants={{
                      hidden: { opacity: 0.4, color: "#94a3b8" },
                      visible: { opacity: [0.4, 0.4, 1, 1, 0.4], color: ["#94a3b8", "#94a3b8", "#64748b", "#64748b", "#94a3b8"], transition: { ...transition, times: [0, 0.33, 0.35, 0.9, 1] } }
                    }}
                  >
                    <span>Semantic Analysis</span>
                  </motion.div>
                  <div className="pl-4 text-slate-400">↓</div>
                  <motion.div 
                    className="flex justify-between font-bold"
                    variants={{
                      hidden: { opacity: 0.4, color: "#94a3b8", textShadow: "none" },
                      visible: { 
                        opacity: [0.4, 0.4, 1, 1, 0.4], 
                        color: ["#94a3b8", "#94a3b8", "#2563eb", "#2563eb", "#94a3b8"],
                        textShadow: ["none", "none", "0 0 8px rgba(37,99,235,0.4)", "0 0 8px rgba(37,99,235,0.4)", "none"],
                        transition: { ...transition, times: [0, 0.38, 0.4, 0.9, 1] } 
                      }
                    }}
                  >
                    <span>Execution Ready</span>
                  </motion.div>
                </div>
              </motion.div>
            </FadeUp>
          </div>

        </div>
      </Container>
    </section>
  );
}
