import { cn } from '@/utils/cn';

export interface WorkflowConnectorProps {
  type?: 'traditional' | 'locoml';
}

export function WorkflowConnector({ type = 'traditional' }: WorkflowConnectorProps) {
  const isTraditional = type === 'traditional';

  return (
    <div className="relative ml-4 flex h-6 w-full flex-col">
      <div 
        className={cn(
          "absolute top-0 left-[-0.5px] h-full w-[2px]",
          isTraditional 
            ? "border-l-2 border-dashed border-stone-200 opacity-60" 
            : "bg-gradient-to-b from-primary/30 to-primary/60 animate-pulse-subtle"
        )}
      />
    </div>
  );
}
