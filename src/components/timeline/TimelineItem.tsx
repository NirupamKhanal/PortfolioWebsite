import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  isLast?: boolean;
}

export function TimelineItem({ 
  title, 
  organization, 
  period, 
  location, 
  description,
  isLast = false 
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-800" />
      )}
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 -translate-x-1/2" />
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">{organization}</p>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          {description.map((item, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300">
              • {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}