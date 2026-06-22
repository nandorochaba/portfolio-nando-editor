
export enum ProjectStatus {
  DEVELOPMENT = 'development',
  HOMOLOGATION = 'homologation',
  DELIVERED = 'delivered'
}

export interface Metric {
  label: string;
  value: string;
}

export interface ValidationStep {
  id: string;
  title: string;
  completed: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  status: ProjectStatus;
  metrics: Metric[];
  architecture_summary: string;
  validation_steps: ValidationStep[];
  tech_stack: string[];
  client_quote?: {
    text: string;
    author: string;
    position: string;
  };
  image: string;
  videoUrl?: string;
  isVertical?: boolean;
}

export interface TimelineEvent {
  title: string;
  description: string;
  status: 'past' | 'current' | 'future';
}
