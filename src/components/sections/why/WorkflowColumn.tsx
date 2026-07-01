import { cn } from '@/utils/cn';
import { WorkflowNode, WorkflowNodeProps } from './WorkflowNode';
import { WorkflowConnector } from './WorkflowConnector';
import { FadeUp, StaggerContainer } from '@/components/animations/Animations';

export interface WorkflowColumnProps {
  title: string;
  type: 'traditional' | 'locoml';
  nodes: Omit<WorkflowNodeProps, 'type'>[];
  delay?: number;
}

export function WorkflowColumn({ title, type, nodes, delay = 0 }: WorkflowColumnProps) {
  const isTraditional = type === 'traditional';

  return (
    <div className={cn(
      "flex flex-col rounded-2xl border p-6 lg:p-8",
      isTraditional ? "border-stone-200/50 bg-stone-50/30" : "border-primary/10 bg-white shadow-xl shadow-primary/5"
    )}>
      <h3 className={cn(
        "mb-8 font-mono text-xs font-semibold uppercase tracking-widest text-center",
        isTraditional ? "text-stone-400" : "text-primary"
      )}>
        {title}
      </h3>
      
      <StaggerContainer delay={delay} staggerChildren={0.15} className={cn(
        "flex flex-col w-full",
        isTraditional ? "gap-0" : "gap-1" // LoCoML gets slightly more breathing room
      )}>
        {nodes.map((node, idx) => (
          <div key={idx} className="flex flex-col w-full">
            <FadeUp>
              <WorkflowNode 
                title={node.title} 
                type={type} 
                hasWarning={node.hasWarning}
                hasSuccess={node.hasSuccess}
              />
            </FadeUp>
            {idx < nodes.length - 1 && (
              <FadeUp>
                <WorkflowConnector type={type} />
              </FadeUp>
            )}
          </div>
        ))}
      </StaggerContainer>
    </div>
  );
}
