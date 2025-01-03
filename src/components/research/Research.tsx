import React from 'react';
import { Section } from '../Section';
import { ResearchHeader } from './ResearchHeader';
import { ResearchCard } from './ResearchCard';
import { researchProjects } from '../../data/research/projects';

export function Research() {
  return (
    <Section id="research">
      <ResearchHeader />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {researchProjects.map((project, index) => (
          <ResearchCard
            key={project.title}
            {...project}
            delay={index * 100}
          />
        ))}
      </div>
    </Section>
  );
}