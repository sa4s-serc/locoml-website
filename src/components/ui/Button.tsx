import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-hover',
        secondary: 'bg-secondary text-heading hover:bg-slate-100',
        outline: 'border border-border text-heading hover:bg-slate-50',
        ghost: 'hover:bg-slate-100 hover:text-heading text-paragraph',
      },
      size: {
        default: 'min-h-[44px] md:min-h-[40px] py-2 px-4',
        sm: 'min-h-[44px] md:min-h-[36px] px-3 rounded-md',
        lg: 'min-h-[48px] md:min-h-[44px] px-8 rounded-lg',
        xl: 'min-h-[52px] px-8 rounded-xl',
        icon: 'min-h-[44px] min-w-[44px] md:min-h-[40px] md:min-w-[40px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
