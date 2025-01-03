import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { Calendar, MapPin, Building2, ExternalLink } from 'lucide-react';
import { WorkCardProps } from './types';

export function WorkCard({ 
  title, 
  organization,
  organizationUrl,
  location, 
  period, 
  type, 
  description,
  relatedLinks,
  image, 
  delay = 0 
}: WorkCardProps) {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`${title} at ${organization}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-normal mb-1">{title}</h3>
            <a 
              href={organizationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 
                       dark:hover:text-gray-100 transition-colors duration-300 flex items-center gap-2"
            >
              {organization}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span>{type}</span>
            </div>
          </div>

          <div className="space-y-2">
            {description.map((point, index) => (
              <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                • {point}
              </p>
            ))}
          </div>

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {relatedLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 
                           dark:hover:text-gray-100 transition-colors duration-300 
                           flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}