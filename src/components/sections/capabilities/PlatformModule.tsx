import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface PlatformModuleProps {
  title: string;
  description: string;
  chip: string;
  isHero?: boolean;
  className?: string;
  media: ReactNode;
}

export function PlatformModule({
  title,
  description,
  chip,
  isHero,
  className,
  media
}: PlatformModuleProps) {
  return (
    <div 
      className={cn(
        "group relative flex flex-col rounded-3xl border border-slate-200/60 bg-white shadow-sm transition-all duration-500",
        "hover:-translate-y-[2px] hover:border-primary/40 hover:shadow-md",
        isHero ? "p-8" : "p-6",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className={cn("font-medium tracking-tight text-slate-900", isHero ? "text-xl" : "text-lg")}>
          {title}
        </h3>
        {/* Tiny Status Chip */}
        <div className={cn(
          "px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-mono font-medium tracking-wide text-slate-500 transition-colors duration-500",
          "group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary"
        )}>
          {chip}
        </div>
      </div>
      
      {/* Description */}
      <p className={cn(
        "text-slate-500 leading-relaxed",
        isHero ? "text-sm max-w-md mb-8" : "text-[13px] mb-6"
      )}>
        {description}
      </p>
      
      {/* Media Container Slot (Permanent) */}
      <div className={cn(
        "relative flex flex-1 w-full flex-col items-center justify-center rounded-2xl bg-slate-50/50 border border-slate-100/50 overflow-hidden",
        isHero ? "min-h-[280px]" : "min-h-[160px]"
      )}>
        {media}
      </div>
    </div>
  );
}
