export interface IndustryConfig {
  id: string;
  hero: {
    title: string;
    description: string;
    highlights: string[];
  };
  workflow: {
    steps: string[];
  };
  comparison: {
    traditional: string[];
    locoml: string[];
  };
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    icon: string;
    title: string;
    description: string;
  }[];
  impact: string[];
}

export const industryData: Record<string, IndustryConfig> = {
  healthcare: {
    id: 'healthcare',
    hero: {
      title: 'Machine Learning for Modern Healthcare',
      description: 'Explain how LoCoML supports Disease prediction, Clinical decision support, Medical imaging, and Patient risk analysis.',
      highlights: ['Medical Imaging', 'Patient Risk Prediction', 'Clinical Decision Systems'],
    },
    workflow: {
      steps: ['Patient Records', 'Cleaning', 'Feature Engineering', 'Disease Prediction', 'Clinical Validation', 'Deployment'],
    },
    comparison: {
      traditional: ['Manual Development', 'Disconnected Tools', 'Hidden Errors', 'Late Validation', 'Long Debugging'],
      locoml: ['Visual Pipeline', 'Semantic Validation', 'Automatic Repair', 'Continuous Optimization', 'Production Ready'],
    },
    challenges: [
      { title: 'Sensitive Patient Data', description: 'Handling highly confidential healthcare information.' },
      { title: 'Complex Regulations', description: 'Navigating stringent compliance and privacy laws.' },
      { title: 'Model Explainability', description: 'Ensuring clinicians can understand and trust AI predictions.' },
      { title: 'Dataset Imbalance', description: 'Dealing with rare diseases and skewed clinical datasets.' },
    ],
    solutions: [
      { icon: 'shield-check', title: 'Semantic Validation', description: 'Ensure clinical models meet rigorous constraints.' },
      { icon: 'wrench', title: 'Pipeline Repair', description: 'Automatically fix data drift and pipeline errors.' },
      { icon: 'puzzle', title: 'Model Compatibility', description: 'Seamlessly integrate with existing hospital systems.' },
      { icon: 'zap', title: 'Automatic Optimization', description: 'Continuously improve diagnostic accuracy.' },
    ],
    impact: [
      'Faster Clinical Pipelines',
      'Reduced Engineering Effort',
      'Reliable Validation',
      'Reproducible Experiments',
    ],
  },
  finance: {
    id: 'finance',
    hero: {
      title: 'Intelligent Financial Decision Systems',
      description: 'Explain how LoCoML supports Fraud Detection, Credit Scoring, Risk Analysis, and AML.',
      highlights: ['Fraud Detection', 'Credit Risk', 'Compliance Automation'],
    },
    workflow: {
      steps: ['Transactions', 'Preprocessing', 'Fraud Detection', 'Risk Scoring', 'Deployment'],
    },
    comparison: {
      traditional: ['Manual Development', 'Disconnected Tools', 'Hidden Errors', 'Late Validation', 'Long Debugging'],
      locoml: ['Visual Pipeline', 'Semantic Validation', 'Automatic Repair', 'Continuous Optimization', 'Production Ready'],
    },
    challenges: [
      { title: 'Fraud Evolution', description: 'Adapting to rapidly changing adversarial tactics.' },
      { title: 'False Positives', description: 'Minimizing disruptions to legitimate customer transactions.' },
      { title: 'Compliance', description: 'Strict adherence to global financial regulations.' },
      { title: 'Real-time Decisions', description: 'Processing high-volume transactions instantly.' },
    ],
    solutions: [
      { icon: 'layout-template', title: 'Fraud Workflow Templates', description: 'Rapidly deploy proven fraud detection pipelines.' },
      { icon: 'check-circle', title: 'Semantic Verification', description: 'Mathematically verify model compliance.' },
      { icon: 'activity', title: 'Risk Monitoring', description: 'Real-time alerts for concept drift and anomalies.' },
      { icon: 'refresh-cw', title: 'Continuous Validation', description: 'Automated testing on live streaming data.' },
    ],
    impact: [
      'Faster Fraud Detection',
      'Lower Operational Cost',
      'Continuous Monitoring',
      'Scalable Deployment',
    ],
  },
  retail: {
    id: 'retail',
    hero: {
      title: 'AI-Powered Retail & E-commerce',
      description: 'Explain how LoCoML supports Demand Forecasting, Recommendation Systems, Inventory Optimization, and Customer Segmentation.',
      highlights: ['Demand Forecasting', 'Recommendation Systems', 'Inventory Optimization'],
    },
    workflow: {
      steps: ['Sales Data', 'Forecasting', 'Recommendations', 'Optimization', 'Deployment'],
    },
    comparison: {
      traditional: ['Manual Development', 'Disconnected Tools', 'Hidden Errors', 'Late Validation', 'Long Debugging'],
      locoml: ['Visual Pipeline', 'Semantic Validation', 'Automatic Repair', 'Continuous Optimization', 'Production Ready'],
    },
    challenges: [
      { title: 'Demand Volatility', description: 'Unpredictable spikes and shifts in consumer behavior.' },
      { title: 'Cold Start', description: 'Making accurate predictions for brand new products.' },
      { title: 'Seasonality', description: 'Complex recurring patterns in historical sales data.' },
      { title: 'Inventory Waste', description: 'Financial losses from overstocking and understocking.' },
    ],
    solutions: [
      { icon: 'trending-up', title: 'Demand Forecast Templates', description: 'Deploy robust time-series forecasting pipelines.' },
      { icon: 'cpu', title: 'Auto Feature Engineering', description: 'Automatically extract seasonal and categorical features.' },
      { icon: 'users', title: 'Recommendation Pipelines', description: 'Personalize user experiences at massive scale.' },
      { icon: 'bar-chart', title: 'Production Monitoring', description: 'Track forecasting accuracy in real-time.' },
    ],
    impact: [
      'Higher Forecast Accuracy',
      'Reduced Inventory Waste',
      'Better Recommendations',
      'Faster Deployment',
    ],
  },
  manufacturing: {
    id: 'manufacturing',
    hero: {
      title: 'Intelligent Manufacturing Workflows',
      description: 'Explain how LoCoML supports Predictive Maintenance, Fault Detection, Quality Inspection, and Production Optimization.',
      highlights: ['Predictive Maintenance', 'Fault Detection', 'Quality Inspection'],
    },
    workflow: {
      steps: ['Sensor Streams', 'Cleaning', 'Feature Extraction', 'Failure Prediction', 'Maintenance Alerts'],
    },
    comparison: {
      traditional: ['Manual Development', 'Disconnected Tools', 'Hidden Errors', 'Late Validation', 'Long Debugging'],
      locoml: ['Visual Pipeline', 'Semantic Validation', 'Automatic Repair', 'Continuous Optimization', 'Production Ready'],
    },
    challenges: [
      { title: 'Equipment Failure', description: 'Unexpected breakdowns causing costly production halts.' },
      { title: 'Noisy Sensors', description: 'Handling incomplete and erratic IoT data streams.' },
      { title: 'Downtime', description: 'Minimizing the time required for manual maintenance.' },
      { title: 'Data Drift', description: 'Adapting to degrading machinery and changing environments.' },
    ],
    solutions: [
      { icon: 'wifi', title: 'Streaming Support', description: 'Process high-frequency sensor data natively.' },
      { icon: 'alert-triangle', title: 'Fault Prediction', description: 'Identify anomalies before catastrophic failures occur.' },
      { icon: 'tool', title: 'Pipeline Self-Repair', description: 'Automatically handle missing or corrupted sensor signals.' },
      { icon: 'server', title: 'Deployment Automation', description: 'Push models directly to edge devices on the factory floor.' },
    ],
    impact: [
      'Reduced Downtime',
      'Predictive Maintenance',
      'Fault Prevention',
      'Automated Workflows',
    ],
  },
  agriculture: {
    id: 'agriculture',
    hero: {
      title: 'Precision Agriculture & Analytics',
      description: 'Explain how LoCoML supports Crop Yield Prediction, Disease Detection, Soil Monitoring, and Smart Irrigation.',
      highlights: ['Crop Yield Prediction', 'Disease Detection', 'Smart Irrigation'],
    },
    workflow: {
      steps: ['Satellite Images', 'Weather Data', 'Crop Analytics', 'Yield Prediction'],
    },
    comparison: {
      traditional: ['Manual Development', 'Disconnected Tools', 'Hidden Errors', 'Late Validation', 'Long Debugging'],
      locoml: ['Visual Pipeline', 'Semantic Validation', 'Automatic Repair', 'Continuous Optimization', 'Production Ready'],
    },
    challenges: [
      { title: 'Climate Variability', description: 'Unpredictable weather patterns affecting crop growth.' },
      { title: 'Sparse Data', description: 'Limited ground-truth data in remote agricultural regions.' },
      { title: 'Disease Detection', description: 'Identifying crop diseases early from aerial imagery.' },
      { title: 'Weather Dependency', description: 'Integrating complex meteorological models into ML pipelines.' },
    ],
    solutions: [
      { icon: 'map', title: 'Sensor Integration', description: 'Combine satellite imagery with local IoT soil sensors.' },
      { icon: 'filter', title: 'Data Cleaning', description: 'Automatically handle missing weather and sensor data.' },
      { icon: 'git-merge', title: 'Prediction Pipelines', description: 'End-to-end workflows for accurate yield forecasting.' },
      { icon: 'eye', title: 'Continuous Monitoring', description: 'Track crop health metrics continuously.' },
    ],
    impact: [
      'Higher Crop Yield',
      'Earlier Disease Detection',
      'Optimized Irrigation',
      'Resource Savings',
    ],
  },
  'smart-cities': {
    id: 'smart-cities',
    hero: {
      title: 'Urban Analytics for Smart Cities',
      description: 'Explain how LoCoML supports Traffic Prediction, Energy Optimization, Urban Analytics, and Public Safety.',
      highlights: ['Traffic Prediction', 'Energy Optimization', 'Urban Analytics'],
    },
    workflow: {
      steps: ['IoT Streams', 'Traffic Data', 'Analytics', 'Optimization'],
    },
    comparison: {
      traditional: ['Manual Development', 'Disconnected Tools', 'Hidden Errors', 'Late Validation', 'Long Debugging'],
      locoml: ['Visual Pipeline', 'Semantic Validation', 'Automatic Repair', 'Continuous Optimization', 'Production Ready'],
    },
    challenges: [
      { title: 'Massive IoT Data', description: 'Processing petabytes of data from millions of city sensors.' },
      { title: 'Latency', description: 'Requiring ultra-low latency for critical public safety alerts.' },
      { title: 'Scalability', description: 'Expanding infrastructure without exponential cost increases.' },
      { title: 'Infrastructure Complexity', description: 'Integrating disjointed legacy systems across city departments.' },
    ],
    solutions: [
      { icon: 'activity', title: 'Real-time Analytics', description: 'Process and analyze city-wide data streams instantly.' },
      { icon: 'link', title: 'IoT Integration', description: 'Seamlessly ingest data from diverse urban sensors.' },
      { icon: 'git-branch', title: 'Adaptive Workflows', description: 'Pipelines that automatically scale with data volume.' },
      { icon: 'box', title: 'Scalable Deployment', description: 'Deploy resilient ML models across decentralized networks.' },
    ],
    impact: [
      'Better Traffic Flow',
      'Energy Savings',
      'Improved Public Services',
      'Scalable Infrastructure',
    ],
  },
};
