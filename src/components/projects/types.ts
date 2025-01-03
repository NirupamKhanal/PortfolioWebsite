export interface Project {
  title: string;
  period: string;
  image: string;
  technologies: string[];
  description: string[];
  note?: string;
}

export interface ProjectCardProps extends Project {
  delay?: number;
}