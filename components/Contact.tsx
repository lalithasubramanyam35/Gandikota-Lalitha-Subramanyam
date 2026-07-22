import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact">
      <div className="max-w-2xl mx-auto text-center">
        {/* FIX: Update section number to 05 to maintain correct order. */}
        <h2 className="text-2xl font-mono text-accent-secondary mb-2">05. What’s Next?</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-light mb-4">Let's Build Something Cool</h3>
        <p className="text-dark mb-8">
          I'm always down to collaborate on interesting projects. My inbox is open if you want to chat about tech, opportunities, or your favorite video game. Hit me up!
        </p>
        <a href="mailto:lalithasubramanyam35@gmail.com?subject=Hello from your portfolio!" className="inline-block bg-transparent text-accent border-2 border-accent rounded-md px-8 py-4 font-mono hover:bg-accent/10 transition-all duration-300 text-lg">
          Drop a Line
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Contact;