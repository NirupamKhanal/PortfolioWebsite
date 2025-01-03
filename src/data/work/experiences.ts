import { WorkExperience } from '../../components/work/types';

export const workExperiences: WorkExperience[] = [
  {
    title: "Student Tutor",
    organization: "TRIO-Student Support Services at USM",
    organizationUrl: "https://www.usm.edu/trio-student-support-services/trio-student-support-services-program.php",
    location: "MS, USA",
    period: "Feb 2024 - Present",
    type: "On-site",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Subject-matter expert in physics, mathematics, chemistry, computer science, and General Education Curriculum (GEC) courses, including English and history.",
      "Provide individualized tutoring sessions and help organize outreach events that cater to diverse learning styles, assisting students in overcoming educational barriers and empowering them to reach their full potential and successfully graduate."
    ]
  },
  {
    title: "Consultant",
    organization: "Center for Mental Health and Counseling Services (CMCS)",
    organizationUrl: "https://cmcsnepal.com.np/",
    location: "Nepal",
    period: "Jan 2023 - Aug 2023",
    type: "On-site",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Handling clinical cases of neurodivergence, personality, neurotic and psychotic disorders.",
      "Administering psychometric/psychosocial tools for diagnostics; producing diagnostic reports following protocols under the supervision of a clinical psychologist.",
      "Academic research focusing on Cluster B personality disorders, especially in medical professionals and students.",
      "Institutional/extramural research consultation, including projects to improve organizational well-being, community mental health, and grassroots access to mental health facilities, in collaboration with organizations including the World Health Organization (WHO)."
    ],
    relatedLinks: [
      {
        name: "WHO Nepal",
        url: "https://www.who.int/nepal"
      }
    ]
  },
  {
    title: "Intern",
    organization: "Youth-led SRHR Advocacy Nepal (YoSHAN)",
    organizationUrl: "https://yoshan.org/",
    location: "Nepal",
    period: "Dec 2020 - Apr 2023",
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
    description: [
      "Report and grant writing that secured funding from the Center for Reproductive Rights (CRR), Global Fund for Women (GFW), and Asia Safe Abortion Partnership (ASAP).",
      "Designing and facilitating capacity-building workshops for SRHR advocates across Nepal.",
      "Lobbying for policy changes with authority figures and key stakeholders, on agendas including decriminalization of abortions in Nepal, development of a Comprehensive Sexuality Education (CSE) curriculum, and formulation of the National APFSD Youth Alliance (NAYA) working to achieve relevant SDGs.",
      "Annual strategic planning."
    ],
    relatedLinks: [
      {
        name: "ASAP",
        url: "https://asap-asia.org/"
      },
      {
        name: "CRR",
        url: "https://reproductiverights.org/"
      },
      {
        name: "GFW",
        url: "https://www.globalfundforwomen.org/"
      }
    ]
  }
];