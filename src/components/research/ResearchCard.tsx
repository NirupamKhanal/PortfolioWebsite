import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { Calendar, User } from 'lucide-react';
import { ResearchCardProps } from './types';
import { NavierStokesAnimation } from './animations/NavierStokesAnimation';
import { BrachistochroneAnimation } from './animations/BrachistochroneAnimation';

export function ResearchCard({ title, period, supervisor, description, delay = 0 }: ResearchCardProps) {
  const getAnimation = (title: string) => {
    if (title.includes('Navier-Stokes')) {
      return <NavierStokesAnimation />;
    }
    if (title.includes('Brachistochrone')) {
      return <BrachistochroneAnimation />;
    }
    return null;
  };

  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-normal">{title}</h3>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Supervisor: {supervisor}</span>
            </div>
          </div>

          {getAnimation(title) && (
            <div className="my-4">
              {getAnimation(title)}
            </div>
          )}

          <div className="space-y-2">
            {description.map((point, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                • {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}