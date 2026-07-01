import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

// --- Standard Card ---
export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-border bg-card text-paragraph shadow-sm',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight text-heading', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

// --- Feature Card ---
export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, ...props }, ref) => (
    <Card ref={ref} className={cn('transition-all duration-300 hover:shadow-md hover:border-primary/20', className)} {...props}>
      <CardHeader>
        {icon && <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-paragraph">{description}</p>
      </CardContent>
    </Card>
  )
);
FeatureCard.displayName = 'FeatureCard';
