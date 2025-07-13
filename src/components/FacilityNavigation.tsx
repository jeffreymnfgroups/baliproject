// src/components/FacilityNavigation.tsx - Premium navigation for sports facility
import React, { useState, useEffect } from 'react';
import logoImage from '../assets/projects/logo.webp';

interface FacilityNavigationProps {
  currentPath: string;
}

const FacilityNavigation: React.FC<FacilityNavigationProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = currentPath === '/' || currentPath === '';
  const isAboutPage = currentPath === '/about' || currentPath === '/about/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = "Hi! I'm interested in learning more about the Bali Beach Sports & Recreation Facility investment opportunity. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <a 
            href="/" 
            className="flex items-center gap-3 no-underline group"
          >
            <img 
              src={logoImage.src} 
              alt="Bali Beach Sports Logo" 
              className="h-10 w-auto transition-all duration-300 group-hover:scale-110 filter brightness-0 invert"
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              Bali Beach Sports
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="/" 
            className={`text-sm font-medium transition-all duration-300 hover:text-white ${
              isHomePage ? 'text-white' : 'text-white/70'
            }`}
          >
            Facilities
          </a>
          <a 
            href="/#section-2" 
            className="text-white/70 text-sm font-medium transition-all duration-300 hover:text-white"
          >
            Attractions
          </a>
          <a 
            href="/#section-6" 
            className="text-white/70 text-sm font-medium transition-all duration-300 hover:text-white"
          >
            Sports & Wellness
          </a>
          <a 
            href="/about" 
            className={`text-sm font-medium transition-all duration-300 hover:text-white ${
              isAboutPage ? 'text-white' : 'text-white/70'
            }`}
          >
            About
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={handleContactClick}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-gray-100 hover:scale-105"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 transition-all duration-300"
            aria-label="Toggle navigation"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0.5' : ''
              }`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 transform transition-all duration-300 ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="px-6 py-8 space-y-6">
          <a
            href="/"
            className={`block text-lg font-medium transition-all duration-300 ${
              isHomePage ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
            onClick={closeMenu}
          >
            Facilities
          </a>
          <a
            href="/#section-2"
            className="block text-white/70 text-lg font-medium transition-all duration-300 hover:text-white"
            onClick={closeMenu}
          >
            Attractions
          </a>
          <a
            href="/#section-6"
            className="block text-white/70 text-lg font-medium transition-all duration-300 hover:text-white"
            onClick={closeMenu}
          >
            Sports & Wellness
          </a>
          <a
            href="/about"
            className={`block text-lg font-medium transition-all duration-300 ${
              isAboutPage ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
            onClick={closeMenu}
          >
            About
          </a>
          <button
            onClick={handleContactClick}
            className="w-full bg-white text-black px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 mt-6"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FacilityNavigation;