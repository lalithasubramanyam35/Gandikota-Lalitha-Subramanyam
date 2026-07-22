import React from 'react';
import AnimatedSection from './AnimatedSection';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-light">
           <span className="text-accent-secondary font-mono mr-3 text-2xl">02.</span> My Tech Stack
        </h2>
        <p className="text-dark mb-12">The tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.title} className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
            <h3 className="text-accent text-lg font-bold mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center text-light font-mono text-sm">
                  <span className="text-accent-secondary mr-3">▹</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;