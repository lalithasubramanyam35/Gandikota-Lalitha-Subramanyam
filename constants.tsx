import React from 'react';
import { ShieldAlert, Landmark, Scale } from 'lucide-react';
import type { SkillCategory, Project, ExperienceItem } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages & Core Web',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Java' },
      { name: 'TypeScript' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    title: 'Developer Tools & Deployment',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Antigravity' },
      { name: 'Vercel' },
      { name: 'Netlify' },
      { name: 'Postman' },
    ],
  },
  {
    title: 'UI/UX & Concepts',
    skills: [
      { name: 'Responsive Web Design' },
      { name: 'REST APIs' },
      { name: 'Web Accessibility (a11y)' },
      { name: 'Wireframing' },
    ],
  },
];


export const PROJECTS_DATA: Project[] = [
  {
    title: 'Aegis Nexus: Predictive Stadium Twin Engine',
    description: [
      'A predictive digital twin dashboard for stadium operations, featuring real-time AI simulation and behavioral gamification.',
      'Forecasts crowd flow and anomaly events up to 15 minutes before they occur, automatically deploying mitigations to staff and fans.'
    ],
    tags: ['React', 'TypeScript', 'AI Simulation', 'Tailwind CSS'],
    icon: ShieldAlert,
    liveUrl: 'https://aegisnexus39.netlify.app/',
    sourceUrl: 'https://github.com/lalithasubramanyam35/Aegis-Nexus',
  },
  {
    title: 'QuantumCash 3.0 Enterprise',
    description: [
      'An enterprise-grade corporate banking dashboard and predictive treasury simulator.',
      'Features a 7-day predictive cash flow, masked data privacy, smart budgeting buckets, and zero-dependency client-side operations.'
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'SPA'],
    icon: Landmark,
    liveUrl: 'https://quantumcash3.netlify.app/',
    sourceUrl: 'https://github.com/lalithasubramanyam35/QuantumCash-3.0-Enterprise',
  },
  {
    title: 'Chanakya: Policy & Tax Engine',
    description: [
      'Autonomous Corporate Policy & Tax Memory Engine utilizing distributed vector indexing and LLMs.',
      'Parses statutory circulars via drag-and-drop, evaluates legal liabilities, and features immutable ACID audit trails.'
    ],
    tags: ['TypeScript', 'CockroachDB', 'Gemini 1.5 Pro', 'Netlify'],
    icon: Scale,
    liveUrl: 'https://chanakya39.netlify.app/',
    sourceUrl: 'https://github.com/lalithasubramanyam35/chanakya',
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Sreenidhi Institute of Science & Technology',
    period: 'Expected Graduation: Aug 2029',
    description: [
      'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Development.',
    ],
  },
  {
    role: 'School Captain',
    company: 'Leadership & Responsibility',
    period: 'School Tenure',
    description: [
      'Served as a School Captain, demonstrating strong leadership and responsibility in a key student-led role.',
    ],
  },
   {
    role: 'Public Speaker',
    company: 'Communication Skills',
    period: 'Achievement',
    description: [
      'Honed public speaking and communication skills through presentations to audiences of over 100 people.',
    ],
  },
    {
    role: 'Hindi Language Proficiency',
    company: 'Dakshin Bharat Hindi Prachar Sabha',
    period: 'Certification',
    description: [
      'Achieved a degree equivalent certificate, demonstrating a commitment to advanced learning and cultural proficiency.',
    ],
  },
];

export const GITHUB_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>GitHub</title>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LINKEDIN_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>LinkedIn</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const EMAIL_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <title>Email</title>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const EXTERNAL_LINK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <title>External Link</title>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);