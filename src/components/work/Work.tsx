import React from 'react';
import { Section } from '../Section';
import { WorkHeader } from './WorkHeader';
import { WorkCard } from './WorkCard';
import { workExperiences } from '../../data/work/experiences';

export function Work() {
  return (
    <Section id="work">
      <WorkHeader />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {workExperiences.map((experience, index) => (
          <WorkCard
            key={experience.title}
            {...experience}
            delay={index * 100}
          />
        ))}
      </div>
    </Section>
  );
}