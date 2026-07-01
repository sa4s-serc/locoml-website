import { WorkflowColumn } from './WorkflowColumn';

const TRADITIONAL_NODES = [
  { title: 'Dataset', hasWarning: true },
  { title: 'Manual Task Identification', hasWarning: true },
  { title: 'Pipeline Construction', hasWarning: true },
  { title: 'Model Training', hasWarning: true },
  { title: 'Debugging', hasWarning: true },
  { title: 'Deployment' },
];

const LOCOML_NODES = [
  { title: 'Dataset' },
  { title: 'Intelligent Analysis', hasSuccess: true },
  { title: 'Pipeline Generation', hasSuccess: true },
  { title: 'Validation', hasSuccess: true },
  { title: 'Training', hasSuccess: true },
  { title: 'Continuous Monitoring', hasSuccess: true },
  { title: 'Deployment' },
];

export function WorkflowComparison() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <WorkflowColumn 
        title="Traditional Workflow" 
        type="traditional" 
        nodes={TRADITIONAL_NODES} 
        delay={0}
      />
      <WorkflowColumn 
        title="LoCoML Workflow" 
        type="locoml" 
        nodes={LOCOML_NODES} 
        delay={0.3}
      />
    </div>
  );
}
