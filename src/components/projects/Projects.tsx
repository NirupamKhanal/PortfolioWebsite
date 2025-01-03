import React from 'react';
import { Section } from '../Section';
import { ProjectsHeader } from './ProjectsHeader';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects/projects';

export function Projects() {
  return (
    <Section id="projects">
      <ProjectsHeader />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            delay={index * 100}
          />
        ))}
      </div>
    </Section>
  );
}