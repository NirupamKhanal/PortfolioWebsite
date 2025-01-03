import React from 'react';
import { Section } from '../Section';
import { AnimatedSection } from '../AnimatedSection';
import { ResearchTile } from './ResearchTile';

const researchProjects = [
  {
    title: "Mesh-less LMAPS for Navier-Stokes Equations",
    period: "Sep 2024 - Present",
    supervisor: "Dr. Huiqing Zhu",
    type: 'navier-stokes' as const,
    description: [
      "Exploring mesh-less LMAPS for solving unsteady, incompressible Navier Stokes problems",
      "Implementing HRBF for velocity interpolation in discretized PDE systems",
      "Optimizing algorithms for accurate 2-D numerical solutions"
    ]
  },
  {
    title: "Brachistochrone in Hyperbolic Spaces",
    period: "Nov 2023 - Present",
    supervisor: "Dr. Sungwook Lee",
    type: 'brachistochrone' as const,
    description: [
      "Investigating brachistochrone solutions in Poincare half-plane",
      "Solving geodesic PDEs using Euler-Lagrange equations",
      "Exploring applications to EPR paradox and Bell's inequality"
    ]
  }
];

export function ResearchTiles() {
  return (
    <Section id="research">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Research Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of mathematics, physics, and computational methods
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <ResearchTile key={project.title} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </Section>
  );
}