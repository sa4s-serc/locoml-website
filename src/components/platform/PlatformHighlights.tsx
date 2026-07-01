import { Container } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export function PlatformHighlights() {
  const highlights = [
    { value: "9", label: "Core Capabilities" },
    { value: "100%", label: "Open Source" },
    { value: "Autonomous", label: "Pipeline Repair" },
    { value: "Private + Public", label: "Model Ecosystem" },
  ];

  return (
    <section className="relative w-full py-16 bg-white border-t border-border/50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                {item.value}
              </div>
              <div className="text-[13px] font-medium text-slate-500 uppercase tracking-widest">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
