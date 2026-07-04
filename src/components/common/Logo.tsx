import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  iconSize?: number;
}

export function Logo({ className, iconSize = 36 }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-3 relative z-10 group", className)}>

      <span className="font-heading text-[22px] font-bold tracking-[0.015em] text-[#0F172A] transition-colors group-hover:text-primary leading-none mt-0.5">
        LoCoML
      </span>
    </Link>
  );
}
