import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { Calendar, User } from 'lucide-react';
import { NavierStokesAnimation } from './animations/NavierStokesAnimation';
import { BrachistochroneAnimation } from './animations/BrachistochroneAnimation';

interface ResearchTileProps {
  title: string;
  period: string;
  supervisor: string;
  description: string[];
  type: 'navier-stokes' | 'brachistochrone';
  delay?: number;
}

export function ResearchTile({ 
  title, 
  period, 
  supervisor, 
  description,
  type,
  delay = 0 
}: ResearchTileProps) {
  const Animation = type === 'navier-stokes' ? NavierStokesAnimation : BrachistochroneAnimation;

  return (
    <div className="h-full">
      <AnimatedSection delay={delay} className="h-full">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg h-full flex flex-col">
          {/* Title Section */}
          <div className="p-6 border-b border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-normal mb-3">{title}</h3>
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
          </div>
          
          {/* Animation Section */}
          <div className="h-48 relative overflow-hidden">
            <Animation />
          </div>
          
          {/* Description Section */}
          <div className="p-6 flex-grow border-t border-gray-100 dark:border-gray-800">
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              {description.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}