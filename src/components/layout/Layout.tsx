import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8', className)}
        {...props}
      />
    );
  }
);
Container.displayName = 'Container';

export const Section = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-16 md:py-24', className)}
        {...props}
      />
    );
  }
);
Section.displayName = 'Section';

export const Grid = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}
        {...props}
      />
    );
  }
);
Grid.displayName = 'Grid';

export const Stack = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-4', className)}
        {...props}
      />
    );
  }
);
Stack.displayName = 'Stack';
