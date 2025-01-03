import React from 'react';
import { AnimatedSection } from '../AnimatedSection';

export function ProjectsHeader() {
  return (
    <AnimatedSection className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-normal mb-4">Projects</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A collection of technical projects spanning various domains
      </p>
    </AnimatedSection>
  );
}