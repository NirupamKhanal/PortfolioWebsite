export interface WorkExperience {
  title: string;
  organization: string;
  organizationUrl: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  image: string;
  relatedLinks?: Array<{
    name: string;
    url: string;
  }>;
}

export interface WorkCardProps extends WorkExperience {
  delay?: number;
}