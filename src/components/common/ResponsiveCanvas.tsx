import { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface ResponsiveCanvasProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  aspectRatio?: '16/9' | '21/9' | 'auto';
}

/**
 * A wrapper for future interactive elements (Three.js, Canvas, interactive SVGs).
 * Ensures they scale correctly and do not break layout on mobile devices.
 */
export const ResponsiveCanvas = forwardRef<HTMLDivElement, ResponsiveCanvasProps>(
  ({ children, className, aspectRatio = '16/9', ...props }, ref) => {
    
    const aspectRatioClasses = {
      '16/9': 'aspect-video',
      '21/9': 'aspect-[21/9]',
      'auto': 'aspect-auto min-h-[300px]',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden bg-slate-50/50 rounded-xl border border-border/50',
          aspectRatioClasses[aspectRatio],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ResponsiveCanvas.displayName = 'ResponsiveCanvas';
