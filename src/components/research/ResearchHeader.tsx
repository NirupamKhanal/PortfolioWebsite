import React from 'react';
import { AnimatedSection } from '../AnimatedSection';

export function ResearchHeader() {
  return (
    <AnimatedSection className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-normal mb-4">Research Experience</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Exploring the intersection of mathematics, physics, and computational methods
      </p>
    </AnimatedSection>
  );
}