import { ReactNode, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface BaseAnimationProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export const FadeUp = forwardRef<HTMLDivElement, BaseAnimationProps>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
FadeUp.displayName = 'FadeUp';

export const FadeIn = forwardRef<HTMLDivElement, BaseAnimationProps>(
  ({ children, delay = 0, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: 'easeInOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
FadeIn.displayName = 'FadeIn';

export const Slide = forwardRef<HTMLDivElement, BaseAnimationProps & { direction?: 'left' | 'right' }>(
  ({ children, delay = 0, direction = 'left', className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
Slide.displayName = 'Slide';

export const HoverLift = forwardRef<HTMLDivElement, BaseAnimationProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);
HoverLift.displayName = 'HoverLift';
