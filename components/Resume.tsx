import React from 'react';
import { SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA } from '../constants';
import { SkillCategory } from '../types';

interface ResumeProps {
  onBack: () => void;
}

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-accent border-b-2 border-accent/30 pb-2 mb-4 font-mono">{title}</h2>
    {children}
  </section>
);

const Resume: React.FC<ResumeProps> = ({ onBack }) => {
  const education = EXPERIENCE_DATA.find(item => item.company.includes('Sreenidhi'));
  const achievements = EXPERIENCE_DATA.filter(item => !item.company.includes('Sreenidhi'));

  return (
    <div className="bg-primary text-light font-sans min-h-screen p-4 sm:p-8 md:p-12 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack} 
          className="mb-8 text-accent-secondary hover:text-accent transition-colors duration-300 font-mono text-sm"
        >
          &larr; Back to Portfolio
        </button>

        <div className="bg-secondary p-6 sm:p-10 rounded-lg shadow-2xl shadow-accent/10">
          {/* Header */}
          <header className="text-center border-b-2 border-dark/30 pb-6 mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-light">Lalitha Subramanyam</h1>
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-4 text-dark text-xs sm:text-sm">
              <span>Hyderabad, Telangana</span>
              <span className="hidden sm:inline">|</span>
              <a href="tel:+916303490644" className="hover:text-accent">+91 63034 90644</a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:lalithasubramanyam35@gmail.com" className="hover:text-accent">lalithasubramanyam35@gmail.com</a>
            </div>
             <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mt-2 text-dark text-xs sm:text-sm">
              <a href="https://linkedin.com/in/lalitha-subramanyam-674575262" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn Profile</a>
               <span className="hidden sm:inline">|</span>
               <a href="https://github.com/lalithasubramanyam35" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub Profile</a>
            </div>
          </header>

          <main>
            {/* Summary */}
            <ResumeSection title="Summary">
              <p className="text-dark">
                Motivated and passionate aspiring software developer with a strong foundation in programming and a hunger for learning. A proactive problem-solver with experience in building web applications and a proven ability to collaborate effectively in team environments. Seeking to apply technical skills and an eagerness to grow to contribute to meaningful projects.
              </p>
            </ResumeSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Projects */}
                <ResumeSection title="Projects">
                  {PROJECTS_DATA.map(project => (
                    <div key={project.title} className="mb-6">
                      <h3 className="text-lg font-bold text-light">{project.title}</h3>
                      <ul className="list-disc list-inside text-dark space-y-1 mt-1 text-sm">
                        {project.description.map((point, i) => <li key={i}>{point}</li>)}
                      </ul>
                    </div>
                  ))}
                </ResumeSection>
                
                {/* Education */}
                {education && (
                  <ResumeSection title="Education">
                    <h3 className="text-lg font-bold text-light">{education.role}</h3>
                    <p className="text-dark/80 font-semibold">{education.company}</p>
                    <p className="text-dark text-sm font-mono mb-2">{education.period}</p>
                     <p className="text-dark text-sm">{education.description.join(' ')}</p>
                  </ResumeSection>
                )}
              </div>

              <div className="lg:col-span-1">
                {/* Skills */}
                <ResumeSection title="Skills">
                  {SKILLS_DATA.map(category => (
                    <div key={category.title} className="mb-4">
                      <h4 className="font-bold text-accent-secondary mb-2">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map(skill => (
                           <span key={skill.name} className="bg-primary text-light font-mono text-xs px-3 py-1 rounded-full">{skill.name}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </ResumeSection>

                {/* Awards & Achievements */}
                <ResumeSection title="Awards & Achievements">
                  <ul className="list-disc list-inside text-dark space-y-2 text-sm">
                    {achievements.map((item, i) => (
                      <li key={i}>{item.description.join(' ')}</li>
                    ))}
                  </ul>
                </ResumeSection>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Resume;