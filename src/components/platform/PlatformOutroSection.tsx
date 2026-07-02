import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/layout/Layout';
import { Tag } from '@/components/ui/TypographyAndBadges';

export function PlatformOutroSection() {
  const shouldReduceMotion = useReducedMotion();

  const labelVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.18 } }
  };

  return (
    <section className="w-full pt-[72px] pb-[80px] bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
          
          {/* Label */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={labelVariants}
            className="mb-[24px]"
          >
            <Tag>PLATFORM EXPERIENCE</Tag>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={headingVariants}
            className="mb-[28px] text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.15]"
          >
            Built for the complete ML lifecycle.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={textVariants}
            className="max-w-[760px] mx-auto text-base text-slate-500 sm:text-lg"
          >
            LoCoML brings every stage of machine learning into one intelligent workflow, connecting development, validation, deployment, and continuous optimization in a single autonomous platform.
          </motion.p>

        </div>
      </Container>
    </section>
  );
}
