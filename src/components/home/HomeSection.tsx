import React from 'react';
import { Section } from '../Section';
import { AnimatedSection } from '../AnimatedSection';
import { Introduction } from '../Introduction';
import { Timeline } from '../timeline/Timeline';
import { SocialLink } from '../social/SocialLink';
import { Github, Linkedin, Mail } from 'lucide-react';

export function HomeSection() {
  return (
    <Section id="home" className="flex flex-col items-center justify-center min-h-screen">
      <div className="space-y-12 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-normal mb-8">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-400 dark:to-gray-100">Niv</span>
            </h1>
            <Introduction />
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <div className="flex justify-center space-x-6">
            <SocialLink href="#" icon={<Github />} />
            <SocialLink href="#" icon={<Linkedin />} />
            <SocialLink href="#" icon={<Mail />} />
          </div>
        </AnimatedSection>

        <Timeline />
      </div>
    </Section>
  );
}