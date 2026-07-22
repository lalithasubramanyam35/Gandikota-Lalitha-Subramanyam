import React from 'react';
import AnimatedSection from './AnimatedSection';

const technologies = ['C', 'Python', 'HTML', 'Java', 'GitHub', 'Antigravity'];

const About: React.FC = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-3xl font-bold mb-8 text-light flex items-center">
        <span className="text-accent-secondary font-mono mr-3 text-2xl">01.</span> About Me
        <span className="flex-grow h-px bg-dark/30 ml-4"></span>
      </h2>
      <div className="text-dark space-y-4 max-w-3xl">
        <p>
          I'm a motivated and passionate aspiring software developer with a strong foundation in programming and a hunger for learning. A proactive problem-solver with experience in building web applications and a proven ability to collaborate effectively in team environments.
        </p>
        <p>
          I'm seeking to apply my technical skills and an eagerness to grow to contribute to meaningful projects. Here are a few technologies I'm proficient with:
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span key={tech} className="bg-secondary text-accent-secondary font-mono text-sm px-3 py-1 rounded-full">{tech}</span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;