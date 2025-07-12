// src/components/Navigation.tsx - Updated for Bali Beach Sports & Recreation Facility
import React, { useState, useEffect } from 'react';
import { getProjectCounts } from '../data/projects.js';
import logoImage from '../assets/projects/logo.webp';

interface NavigationProps {
  currentPath: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [projectCounts, setProjectCounts] = useState({ 'Facility Overview': 1, 'Centrepiece Attraction': 1 }); // Default values to prevent layout shift
  const [isClient, setIsClient] = useState(false);
  

  const isHomePage = currentPath === '/' || currentPath === '';
  const isAboutPage = currentPath === '/about' || currentPath === '/about/';

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only update counts on client-side to prevent hydration mismatch
    if (isClient) {
      const counts = getProjectCounts();
      setProjectCounts(counts);
    }

    // Close menu on resize to desktop
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, isClient]);


  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburgerBtn = document.getElementById('hamburgerBtn');

      if (isMenuOpen && mobileMenu && hamburgerBtn &&
          !mobileMenu.contains(target) && !hamburgerBtn.contains(target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = "Hi! I'm interested in learning more about the Bali Beach Sports & Recreation Facility. Could you please provide me with more information about this revolutionary sports and wellness destination?";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Close mobile menu if open
    if (isMenuOpen) {
      closeMenu();
    }
  };


  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-[10px] z-[1000] border-b border-black/10 will-change-transform">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center gap-5">
          <a 
            href="/" 
            className="flex items-center gap-3 no-underline group"
          >
            {/* Logo Image with fixed dimensions to prevent layout shift */}
            <img 
              src={logoImage.src} 
              alt="Bali Beach Sports Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:brightness-110"
              width="24"
              height="24"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-[60px]">
          <a 
            href="/" 
            className={`text-sm font-normal transition-colors duration-300 hover:text-black whitespace-nowrap ${
              isHomePage ? 'text-black' : 'text-neutral-500'
            }`}
          >
            Facilities
          </a>
          <a 
            href="/#project-1" 
            className="text-neutral-500 text-sm font-normal transition-colors duration-300 hover:text-black whitespace-nowrap"
          >
            Sports & Recreation
          </a>
          <a 
            href="/#project-6" 
            className="text-neutral-500 text-sm font-normal transition-colors duration-300 hover:text-black whitespace-nowrap"
          >
            Wellness & Recovery
          </a>
        </div>

        <div className="hidden md:flex items-center gap-[30px]">
          <a 
            href="/about" 
            className={`text-sm font-normal transition-colors duration-300 hover:text-black whitespace-nowrap ${
              isAboutPage ? 'text-black' : 'text-neutral-500'
            }`}
          >
            About
          </a>
          <button 
            onClick={handleContactClick}
            className="text-neutral-500 text-sm font-normal transition-colors duration-300 hover:text-black bg-transparent border-none cursor-pointer font-inherit whitespace-nowrap"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Hamburger Button */}
          <button
            id="hamburgerBtn"
            className={`bg-transparent border-none cursor-pointer p-2 flex flex-col gap-1 transition-all duration-300 ${
              isMenuOpen ? 'active' : ''
            }`}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
            style={{ minWidth: '40px', minHeight: '40px' }}
          >
            <span className={`w-5 h-0.5 bg-neutral-800 transition-all duration-300 rounded-[1px] ${
              isMenuOpen ? 'transform rotate-45 translate-x-[6px] translate-y-[6px]' : ''
            }`} />
            <span className={`w-5 h-0.5 bg-neutral-800 transition-all duration-300 rounded-[1px] ${
              isMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-5 h-0.5 bg-neutral-800 transition-all duration-300 rounded-[1px] ${
              isMenuOpen ? 'transform -rotate-45 translate-x-[6px] -translate-y-[6px]' : ''
            }`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobileMenu"
        className={`fixed top-20 left-0 right-0 bg-white backdrop-blur-[20px] border-b border-black/10
          transform transition-all duration-300 ease-out -shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:hidden
          ${isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
          }`}
      >
        <div className="px-10 py-[30px] flex flex-col gap-5">
          <a
            href="/"
            className={`text-neutral-500 text-base font-medium transition-all duration-300 py-3 
              border-b border-black/5 flex justify-between items-center
              hover:text-black hover:translate-x-[5px] ${
              isHomePage ? 'text-black' : ''
            }`}
            onClick={closeMenu}
          >
            Facilities
          </a>
          <a
            href="/#project-1"
            className="text-neutral-500 text-base font-medium transition-all duration-300 py-3 
              border-b border-black/5 flex justify-between items-center
              hover:text-black hover:translate-x-[5px]"
            onClick={closeMenu}
          >
            Sports & Recreation
            <span className="bg-neutral-600 text-white text-xs font-semibold px-2 py-1 rounded-xl min-w-[20px] text-center">
              {projectCounts['Facility Overview'] || 8}
            </span>
          </a>
          <a
            href="/#project-6"
            className="text-neutral-500 text-base font-medium transition-all duration-300 py-3 
              border-b border-black/5 flex justify-between items-center
              hover:text-black hover:translate-x-[5px]"
            onClick={closeMenu}
          >
            Wellness & Recovery
            <span className="bg-neutral-600 text-white text-xs font-semibold px-2 py-1 rounded-xl min-w-[20px] text-center">
              {projectCounts['Centrepiece Attraction'] || 7}
            </span>
          </a>
          <a
            href="/about"
            className={`text-neutral-500 text-base font-medium transition-all duration-300 py-3 
              border-b border-black/5 flex justify-between items-center
              hover:text-black hover:translate-x-[5px] ${
              isAboutPage ? 'text-black' : ''
            }`}
            onClick={closeMenu}
          >
            About
          </a>
          <button
            onClick={handleContactClick}
            className="text-neutral-500 text-base font-medium transition-all duration-300 py-3 
              border-b border-black/5 flex justify-between items-center
              hover:text-black hover:translate-x-[5px] bg-transparent border-none cursor-pointer 
              text-left w-full font-inherit"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;