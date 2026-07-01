import { VideoHTMLAttributes, useState } from 'react';
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
  const [isLoaded, setIsLoaded] = useState(false);

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
      className={cn(
        'relative overflow-hidden bg-slate-900', // Darker background for videos
        aspectRatioClasses[aspectRatio],
        roundedClasses[rounded],
        className
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-800" />
      )}
      
      {/* Video tag natively supports poster for initial skeleton */}
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline // Crucial for iOS autoplay
        onLoadedData={() => setIsLoaded(true)}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-700',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        {...props}
      />
    </div>
  );
}
