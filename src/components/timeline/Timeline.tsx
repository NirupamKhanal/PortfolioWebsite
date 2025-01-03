import React from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { TimelineItem } from './TimelineItem';

const experiences = [
  {
    title: "Student Tutor",
    organization: "TRIO-Student Support Services at USM",
    period: "Feb 2024 - Present",
    location: "MS, USA",
    description: [
      "Subject-matter expert in physics, mathematics, chemistry, computer science, and General Education Curriculum (GEC) courses.",
      "Provide individualized tutoring sessions and help organize outreach events that cater to diverse learning styles."
    ]
  },
  {
    title: "Consultant",
    organization: "Center for Mental Health and Counseling Services (CMCS)",
    period: "Jan 2023 - Aug 2023",
    location: "Nepal",
    description: [
      "Handled clinical cases of neurodivergence, personality, neurotic and psychotic disorders.",
      "Administered psychometric/psychosocial tools for diagnostics under supervision.",
      "Conducted academic research on Cluster B personality disorders.",
      "Collaborated with WHO on community mental health initiatives."
    ]
  },
  {
    title: "Intern",
    organization: "Youth-led SRHR Advocacy Nepal (YoSHAN)",
    period: "Dec 2020 - Apr 2023",
    location: "Nepal",
    description: [
      "Secured funding through grant writing from CRR, GFW, and ASAP.",
      "Designed and facilitated capacity-building workshops for SRHR advocates.",
      "Lobbied for policy changes and participated in annual strategic planning."
    ]
  }
];

export function Timeline() {
  return (
    <AnimatedSection className="max-w-3xl mx-auto mt-16">
      <h2 className="text-3xl font-normal mb-8 text-center">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.title}
            {...exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}