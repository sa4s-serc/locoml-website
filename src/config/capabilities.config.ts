export interface CapabilityConfig {
  id: string;
  title: string;
  description: string;
  chip: string;
  isHero?: boolean;
}

export const capabilitiesConfig: CapabilityConfig[] = [
  {
    id: 'pipeline-builder',
    title: 'Pipeline Builder',
    description: 'Design visual pipelines, train and manage models, validate workflows, deploy production-ready systems, and monitor every stage of the machine learning lifecycle through one unified open source platform.',
    chip: 'Workspace',
    isHero: true
  },
  {
    id: 'resolver',
    title: 'Autonomous Resolver',
    description: 'Automatically detects pipeline failures, identifies root causes, and recommends semantic repairs before execution.',
    chip: 'AI Powered'
  },
  {
    id: 'model-zoo',
    title: 'Model Zoo',
    description: 'Train, organize, version, publish, and reuse machine learning models across projects.',
    chip: 'Management'
  },
  {
    id: 'dashboard',
    title: 'Pipeline Dashboard',
    description: 'Monitor execution status, pipeline health, metrics, runtime progress, and workflow lineage across Configured, Running, Completed, and Failed states.',
    chip: 'Monitoring'
  },
  {
    id: 'stress-testing',
    title: 'Stress Testing',
    description: 'Creates cloned datasets and injects controlled failures to evaluate pipeline robustness without affecting production data.',
    chip: 'Reliability'
  },
  {
    id: 'inference-studio',
    title: 'Inference Studio',
    description: 'Run real-time predictions using Dataset Inference or Single Sample Inference through an interactive environment.',
    chip: 'Evaluation'
  },
  {
    id: 'routing',
    title: 'Adaptive Routing',
    description: 'Automatically recommends the most efficient model by evaluating both private and public model repositories based on application requirements.',
    chip: 'Optimization'
  },
  {
    id: 'pipeline-portability',
    title: 'Pipeline Portability',
    description: 'Copy complete machine learning pipelines between projects while preserving structure, node connections, semantic information, and execution logic. Paste instantly and continue building without reconstruction.',
    chip: 'Portability'
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description: 'Deploy validated pipelines and production-ready models through a unified deployment workflow.',
    chip: 'Production'
  }
];
