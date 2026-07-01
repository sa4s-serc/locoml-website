import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export const Background = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'fixed inset-0 -z-50 h-full w-full bg-white',
          className
        )}
        {...props}
      >
        {/* Soft Radial Gradients */}
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-primary-light/30 blur-[150px]" />
        
        {/* Subtle Engineering Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.2]"
        />

        {/* Low Opacity Dot Pattern */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] opacity-[0.1]"
        />
      </div>
    );
  }
);
Background.displayName = 'Background';
