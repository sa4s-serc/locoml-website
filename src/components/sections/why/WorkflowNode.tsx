import { cn } from '@/utils/cn';
import { Icons } from '@/constants/icons';

export interface WorkflowNodeProps {
  title: string;
  type?: 'traditional' | 'locoml';
  hasWarning?: boolean;
  hasSuccess?: boolean;
}

export function WorkflowNode({ 
  title, 
  type = 'traditional',
  hasWarning = false,
  hasSuccess = false,
}: WorkflowNodeProps) {
  const isTraditional = type === 'traditional';

  return (
    <div className={cn(
      "relative flex items-center gap-4 w-full transition-all duration-300 hover:-translate-y-0.5",
      isTraditional ? "opacity-60 hover:opacity-80" : "opacity-100"
    )}>
      {/* Node Circle */}
      <div 
        className={cn(
          "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-sm transition-colors duration-300",
          isTraditional 
            ? "border-stone-200 bg-stone-50 text-stone-400" 
            : "border-primary/20 bg-primary/5 text-primary"
        )}
      >
        <div 
          className={cn(
            "h-2.5 w-2.5 rounded-full",
            isTraditional ? "bg-stone-300" : "bg-primary"
          )} 
        />
      </div>

      {/* Node Content */}
      <div 
        className={cn(
          "flex flex-1 items-center justify-between rounded-lg border px-4 py-3 transition-colors duration-300",
          isTraditional 
            ? "border-stone-200 bg-stone-50/30 shadow-none" 
            : "border-primary/15 bg-white shadow-sm shadow-primary/5"
        )}
      >
        <span 
          className={cn(
            "font-mono text-[11px] font-medium uppercase tracking-wider",
            isTraditional ? "text-stone-500" : "text-heading"
          )}
        >
          {title}
        </span>
        
        {hasWarning && isTraditional && (
          <Icons.Zap className="h-3 w-3 text-stone-400 opacity-70" />
        )}

        {hasSuccess && !isTraditional && (
          <Icons.Monitor className="h-3 w-3 text-primary/70" />
        )}
      </div>
    </div>
  );
}
