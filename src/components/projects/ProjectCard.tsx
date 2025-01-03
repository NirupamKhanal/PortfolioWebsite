import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { Calendar, Tag, Github } from 'lucide-react';
import { ProjectCardProps } from './types';
import { OCRAnimation } from './animations/OCRAnimation';
import { QuantAnimation } from './animations/QuantAnimation';
import { NumericalAnimation } from './animations/NumericalAnimation';
import { QuantumAnimation } from './animations/QuantumAnimation';
import { PathfindingAnimation } from './animations/PathfindingAnimation';
import { ChatbotAnimation } from './animations/ChatbotAnimation';

const animations: Record<string, React.ComponentType> = {
  ocr: OCRAnimation,
  quant: QuantAnimation,
  numerical: NumericalAnimation,
  quantum: QuantumAnimation,
  pathfinding: PathfindingAnimation,
  chatbot: ChatbotAnimation,
};

export function ProjectCard({ 
  title, 
  period, 
  image, 
  technologies, 
  description, 
  note,
  animation,
  githubUrl,
  delay = 0 
}: ProjectCardProps) {
  const AnimationComponent = animation ? animations[animation] : null;

  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video overflow-hidden">
          {AnimationComponent ? (
            <AnimationComponent />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-normal mb-2">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
            </div>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                         transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {technologies.map(tech => (
              <span
                key={tech}
                className="flex items-center gap-1 text-xs px-2 py-1 
                         bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            {description.map((point, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                • {point}
              </p>
            ))}
          </div>

          {note && (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              Note: {note}
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}