import React from 'react';
import AnimatedSection from './AnimatedSection';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience">
      <h2 className="text-3xl font-bold mb-12 text-light text-center">
        <span className="text-accent-secondary font-mono mr-3 text-2xl">04.</span> Education & Achievements
      </h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-secondary transform -translate-x-1/2"></div>

        {EXPERIENCE_DATA.map((item, index) => (
          <div key={index} className="relative mb-12 group">
            <div className="flex items-center">
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full z-10 transform -translate-x-1/2 group-hover:animate-pulse-glow"></div>
              
              <div className={`w-full p-6 bg-secondary rounded-lg shadow-lg md:w-5/12 transition-all duration-300 border border-transparent hover:border-accent/50 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'}`}>
                <h3 className="text-xl font-bold text-light">{item.role}</h3>
                <h4 className="text-accent mb-2">@ {item.company}</h4>
                <p className="text-sm text-dark font-mono mb-4">{item.period}</p>
                <ul className="space-y-2 text-dark text-sm">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex">
                      <span className="text-accent mr-2">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;