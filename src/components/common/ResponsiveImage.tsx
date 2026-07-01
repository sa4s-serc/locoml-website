import { ImgHTMLAttributes, useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

export interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  alt: string; // Enforce alt text for accessibility
}

export function ResponsiveImage({
  src,
  alt,
  className,
  aspectRatio = 'auto',
  rounded = 'lg',
  loading = 'lazy',
  ...props
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset state if src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

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
    full: 'rounded-full',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-slate-100', // Skeleton background
        aspectRatioClasses[aspectRatio],
        roundedClasses[rounded],
        className
      )}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-slate-200" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-sm text-muted">
          Failed to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          {...props}
        />
      )}
    </div>
  );
}
