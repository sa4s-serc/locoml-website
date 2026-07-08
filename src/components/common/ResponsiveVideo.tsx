import { VideoHTMLAttributes, useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface ResponsiveVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function ResponsiveVideo({
  src,
  poster,
  className,
  aspectRatio = '16/9',
  rounded = 'lg',
  autoPlay = false,
  muted = false,
  loop = false,
  controls = false,
  ...props
}: ResponsiveVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });

  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    'auto': 'aspect-auto',
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden bg-slate-50/50', // Lighter background for a cleaner placeholder
        aspectRatioClasses[aspectRatio],
        roundedClasses[rounded],
        className
      )}
    >
      {!src && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
          {/* Static premium placeholder when no video is present */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
        </div>
      )}
      
      {src && isInView && (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline // Crucial for iOS autoplay
          preload="none"
          className={cn(
            'h-full w-full object-cover transition-opacity duration-700 opacity-100'
          )}
          {...props}
        />
      )}
    </div>
  );
}
