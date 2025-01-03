export interface ResearchProject {
  title: string;
  period: string;
  supervisor: string;
  description: string[];
}

export interface ResearchCardProps extends ResearchProject {
  delay?: number;
}