import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

const App: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  if (showResume) {
    return <Resume onBack={() => setShowResume(false)} />;
  }

  return (
    <div className="flex bg-primary text-light font-sans min-h-screen">
      <Header onShowResume={() => setShowResume(true)} />
      <div className="flex-1 ml-0 md:ml-64 lg:ml-72 flex flex-col min-w-0">
        <main className="container mx-auto px-6 md:px-12 lg:px-24 flex-1 pt-20 md:pt-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;