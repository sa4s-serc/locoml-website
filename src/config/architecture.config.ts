export type ArchitectureNode = {
  id: string;
  label: string;
  description?: string;
  syncId?: string; // Links workflow steps to architecture nodes for synced animations
};

export type ArchitectureLayer = {
  id: string;
  title: string;
  nodes: ArchitectureNode[];
};

export type IntelligenceGroup = {
  id: string;
  title: string;
  nodes: ArchitectureNode[];
};

export const architectureConfig = {
  layers: {
    layer1: {
      id: 'layer-1',
      title: 'LAYER 1 — USER EXPERIENCE',
      nodes: [
        { id: 'l1-1', label: 'Login / Signup' },
        { id: 'l1-2', label: 'Dashboard' },
        { id: 'l1-3', label: 'Model Zoo' },
        { id: 'l1-4', label: 'Pipeline Builder', syncId: 'sync-pipeline-builder' },
        { id: 'l1-5', label: 'Resolver Workstation' },
        { id: 'l1-6', label: 'Inference Studio' },
        { id: 'l1-7', label: 'Stress Testing' },
        { id: 'l1-8', label: 'Pipeline Dashboard' },
        { id: 'l1-9', label: 'Sample Inference' },
      ],
    },
    layer2: {
      id: 'layer-2',
      title: 'LAYER 2 — PLATFORM SERVICES',
      nodes: [
        { id: 'l2-1', label: 'Authentication' },
        { id: 'l2-2', label: 'Model Management' },
        { id: 'l2-3', label: 'Dataset Management', syncId: 'sync-dataset' },
        { id: 'l2-4', label: 'Pipeline Management' },
        { id: 'l2-5', label: 'Workflow Manager' },
        { id: 'l2-6', label: 'Inference Engine', syncId: 'sync-inference' },
        { id: 'l2-7', label: 'Deployment Manager', syncId: 'sync-deployment' },
        { id: 'l2-8', label: 'Execution Coordinator' },
      ],
    },
    layer4: {
      id: 'layer-4',
      title: 'LAYER 4 — EXECUTION LAYER',
      nodes: [
        { id: 'l4-1', label: 'Preprocessing' },
        { id: 'l4-2', label: 'Training', syncId: 'sync-training' },
        { id: 'l4-3', label: 'Validation' },
        { id: 'l4-4', label: 'Inference' },
        { id: 'l4-5', label: 'Deployment' },
        { id: 'l4-6', label: 'Monitoring' },
        { id: 'l4-7', label: 'Pipeline Execution' },
      ],
    },
    layer5: {
      id: 'layer-5',
      title: 'LAYER 5 — PERSISTENT STORAGE',
      nodes: [
        { id: 'l5-1', label: 'User Database' },
        { id: 'l5-2', label: 'Dataset Storage' },
        { id: 'l5-3', label: 'Model Registry' },
        { id: 'l5-4', label: 'Pipeline Repository' },
        { id: 'l5-5', label: 'Artifact Store' },
        { id: 'l5-6', label: 'Logs' },
        { id: 'l5-7', label: 'Metrics' },
        { id: 'l5-8', label: 'Public Model Registry' },
      ],
    },
  },

  intelligenceEngine: {
    id: 'intelligence-engine',
    title: 'INTELLIGENCE ENGINE',
    subtitle: '(Core Brain)',
    description: 'Every machine learning workflow passes through the Intelligence Engine before execution.',
    footerText: 'Every workflow is analyzed, validated, optimized, and monitored before execution.',
    groups: [
      {
        id: 'group-validation',
        title: 'VALIDATION',
        nodes: [
          { 
            id: 'ie-val-1', 
            label: 'Semantic Validator', 
            syncId: 'sync-semantic-validation',
            description: 'Detects semantic inconsistencies, dataset mismatches, and invalid ML task configurations.'
          },
          { 
            id: 'ie-val-2', 
            label: 'Pipeline Analyzer',
            description: 'Statically analyzes pipeline graphs for structural bottlenecks and missing data dependencies.'
          },
        ],
      },
      {
        id: 'group-automation',
        title: 'AUTOMATION',
        nodes: [
          { 
            id: 'ie-auto-1', 
            label: 'Resolver Engine',
            syncId: 'sync-resolver',
            description: 'Automatically repairs broken machine learning pipelines by substituting compatible components.'
          },
          { 
            id: 'ie-auto-2', 
            label: 'Task Inference Engine',
            syncId: 'sync-task-inference',
            description: 'Uses heuristics to automatically infer the target ML task based on dataset structure.'
          },
          { 
            id: 'ie-auto-3', 
            label: 'Pipeline Copy / Paste Engine',
            description: 'Enables instant extraction, sharing, and reinjection of pipeline fragments.'
          },
        ],
      },
      {
        id: 'group-optimization',
        title: 'OPTIMIZATION',
        nodes: [
          { 
            id: 'ie-opt-1', 
            label: 'Adaptive Routing Engine',
            description: 'Selects the most efficient available model or compute cluster automatically.'
          },
          { 
            id: 'ie-opt-2', 
            label: 'Recommendation Engine',
            description: 'Suggests better public or private models from the Model Zoo based on performance metrics.'
          },
        ],
      },
      {
        id: 'group-reliability',
        title: 'RELIABILITY',
        nodes: [
          { 
            id: 'ie-rel-1', 
            label: 'Synthetic Failure Injection Engine',
            description: 'Injects controlled failures into cloned datasets to evaluate model robustness.'
          },
          { 
            id: 'ie-rel-2', 
            label: 'Monitoring Engine',
            description: 'Continuously observes inference data distributions to detect concept drift in real-time.'
          },
        ],
      },
    ] as IntelligenceGroup[],
  },

  workflow: [
    { id: 'wf-1', label: 'Dataset', syncId: 'sync-dataset' },
    { id: 'wf-2', label: 'Task Inference', syncId: 'sync-task-inference' },
    { id: 'wf-3', label: 'Pipeline Builder', syncId: 'sync-pipeline-builder' },
    { id: 'wf-4', label: 'Semantic Validation', syncId: 'sync-semantic-validation' },
    { id: 'wf-5', label: 'Resolver', syncId: 'sync-resolver' },
    { id: 'wf-6', label: 'Training', syncId: 'sync-training' },
    { id: 'wf-7', label: 'Deployment', syncId: 'sync-deployment' },
    { id: 'wf-8', label: 'Inference', syncId: 'sync-inference' },
  ],
};
