import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/80',
        secondary: 'bg-secondary text-heading hover:bg-secondary/80',
        outline: 'text-heading border border-border',
        success: 'bg-success/10 text-success hover:bg-success/20',
        warning: 'bg-warning/10 text-warning hover:bg-warning/20',
        error: 'bg-error/10 text-error hover:bg-error/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
    );
  }
);
Badge.displayName = 'Badge';

// Tag is a technical label utilizing the Mono font
export const Tag = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-medium text-slate-700 border border-slate-200',
          className
        )}
        {...props}
      />
    );
  }
);
Tag.displayName = 'Tag';

export const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn('tracking-tight text-heading', className)}
        {...props}
      />
    );
  }
);
SectionTitle.displayName = 'SectionTitle';

export const SectionDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('mt-4 max-w-2xl text-lg text-paragraph', className)}
        {...props}
      />
    );
  }
);
SectionDescription.displayName = 'SectionDescription';

export const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => {
    return <hr ref={ref} className={cn('my-8 border-t border-border', className)} {...props} />;
  }
);
Divider.displayName = 'Divider';
