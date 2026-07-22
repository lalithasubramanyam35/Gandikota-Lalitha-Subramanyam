import React, { useState, useEffect } from 'react';

// FIX: Add Experience to the navigation links array.
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education & Achievements', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onShowResume: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const handleResumeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onShowResume();
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Nav */}
      <header className={`md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 shadow-lg backdrop-blur-sm' : 'bg-secondary'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-accent text-2xl font-bold font-mono group" onClick={(e) => handleLinkClick(e, '#hero')}>
            <span className="group-hover:text-accent-secondary transition-colors duration-300">L</span>
            <span className="group-hover:text-light transition-colors duration-300">S</span>
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-accent z-50 relative">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 h-screen fixed left-0 top-0 bg-secondary shadow-2xl z-40">
        <div className="flex-1 flex flex-col justify-center px-8">
          <div className="mb-12 text-center">
            <a href="#hero" className="text-accent text-5xl font-bold font-mono group block mb-4" onClick={(e) => handleLinkClick(e, '#hero')}>
              <span className="group-hover:text-accent-secondary transition-colors duration-300">L</span>
              <span className="group-hover:text-light transition-colors duration-300">S</span>
            </a>
            <p className="text-light/70 text-sm tracking-widest uppercase font-mono">Portfolio</p>
          </div>
          
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="text-light hover:text-accent transition-colors duration-300 font-mono text-sm xl:text-base flex items-center group" 
                style={{ animation: `fadeInUp ${0.1 * (index + 1)}s ease-out forwards`, opacity: 0 }}
              >
                <span className="w-8 h-[1px] bg-light/30 mr-4 group-hover:w-12 group-hover:bg-accent transition-all duration-300"></span>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-16">
            <button 
              onClick={handleResumeClick} 
              className="w-full border border-accent text-accent px-4 py-3 rounded-md hover:bg-accent hover:text-primary transition-colors duration-300 font-mono text-sm uppercase tracking-wider" 
              style={{ animation: `fadeInUp ${0.1 * (navLinks.length + 1)}s ease-out forwards`, opacity: 0 }}
            >
              View Resume
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 h-full bg-secondary w-3/4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-2xl text-light hover:text-accent transition-colors duration-300 font-mono">
              {link.name}
            </a>
          ))}
          <button onClick={handleResumeClick} className="border border-accent text-accent px-6 py-3 rounded-md text-lg hover:bg-accent hover:text-primary transition-colors duration-300 mt-4 font-mono uppercase tracking-wider">
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;