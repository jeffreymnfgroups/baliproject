// src/components/FacilitySectionsList.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import type { FacilitySection } from '../types/facility.js';

gsap.registerPlugin(ScrollToPlugin);

interface FacilitySectionsListProps {
  sections: FacilitySection[];
}

const FacilitySectionsList: React.FC<FacilitySectionsListProps> = ({ sections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInitializedRef = useRef(false);

  // Debounced scroll handler to prevent excessive state updates
  const debouncedSetCurrentIndex = useCallback((index: number) => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(index);
    }, 100);
  }, []);

  // Handle initial scroll based on URL hash (only once on page load)
  const handleInitialScroll = useCallback(() => {
    if (isInitializedRef.current) return;
    
    const hash = window.location.hash;
    if (hash) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const sectionIndex = parseInt((targetElement as HTMLElement).dataset.sectionIndex || '0');
          if (!isNaN(sectionIndex)) {
            setCurrentIndex(sectionIndex);
            
            // Smooth scroll to element without changing URL
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          }
        }
      });
    }
    isInitializedRef.current = true;
  }, []);

  // Setup intersection observer with optimized settings
  const setupIntersectionObserver = useCallback(() => {
    // Clean up existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // More conservative margins
      threshold: [0.3, 0.7] // Multiple thresholds for better detection
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // Only process if not currently scrolling programmatically
      if (isScrolling) return;

      let maxIntersectionRatio = 0;
      let mostVisibleEntry: IntersectionObserverEntry | null = null;

      // Find the most visible section
      entries.forEach(entry => {
        if (entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio;
          mostVisibleEntry = entry;
        }
      });

      if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
        const target = mostVisibleEntry.target as HTMLElement;
        const sectionIndex = parseInt(target.dataset.sectionIndex || '0');
        
        if (!isNaN(sectionIndex)) {
          debouncedSetCurrentIndex(sectionIndex);
        }
      }
    }, options);

    // Observe all sections
    sectionsRef.current.forEach(section => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });
  }, [isScrolling, debouncedSetCurrentIndex]);

  // Optimized scroll to section function
  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionsRef.current.length || isScrolling) return;
    
    const targetSection = sectionsRef.current[index];
    if (!targetSection) return;

    setIsScrolling(true);
    
    // Use GSAP for smooth, controlled scrolling
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { 
        y: targetSection, 
        offsetY: 0
      },
      ease: "power2.inOut",
      onComplete: () => {
        // Add delay to prevent immediate intersection observer conflicts
        setTimeout(() => {
          setIsScrolling(false);
        }, 200);
      }
    });
  }, [isScrolling]);

  // Handle navigation clicks
  const handleNavigationClick = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (!link) return;
    
    e.preventDefault();
    const section = link.getAttribute('href')?.substring(1);
    
    if (section?.startsWith('section-')) {
      const sectionId = section.replace('section-', '');
      const sectionIndex = sections.findIndex(s => s.id.toString() === sectionId);
      if (sectionIndex !== -1) {
        scrollToSection(sectionIndex);
      }
    }
  }, [sections, scrollToSection]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isScrolling) return;
    
    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
      e.preventDefault();
      scrollToSection(currentIndex + 1);
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      e.preventDefault();
      scrollToSection(currentIndex - 1);
    }
  }, [currentIndex, sections.length, scrollToSection, isScrolling]);

  // Generate section URL - maps to corresponding project page
  const getSectionUrl = useCallback((section: FacilitySection) => {
    // Special case: Section ID 15 (Call to Action) redirects to about page
    if (section.id === 15) {
      return '/about';
    }
    // Map facility section to corresponding project page
    return `/projects/${section.name.toLowerCase().replace(/[\s&]/g, '-').replace(/--+/g, '-')}`;
  }, []);

  // Initialize everything
  useEffect(() => {
    handleInitialScroll();
    
    // Small delay to ensure DOM is fully rendered
    const initTimeout = setTimeout(() => {
      setupIntersectionObserver();
    }, 100);

    return () => {
      clearTimeout(initTimeout);
    };
  }, [handleInitialScroll, setupIntersectionObserver]);

  // Add event listeners
  useEffect(() => {
    document.addEventListener('click', handleNavigationClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleNavigationClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleNavigationClick, handleKeyDown]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen overflow-x-hidden relative"
      id="facilitySectionsContainer"
    >
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={el => { 
            if (el) sectionsRef.current[index] = el; 
          }}
          className={`
            min-h-screen w-full flex items-center justify-center relative
            ${index % 2 === 1 ? 'bg-neutral-50' : 'bg-white'}
            transition-colors duration-300
          `}
          id={`section-${section.id}`}
          data-section-id={section.id}
          data-section-name={section.name}
          data-section-category={section.category.toLowerCase()}
          data-section-index={index}
        >
          <div className="w-full max-w-[1400px] mx-auto px-4 py-[60px] 
            grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[60px] items-center">
            
            {/* Section Header */}
            <div className="flex flex-col gap-5 text-left lg:text-left">
              <span className="text-sm text-neutral-500 font-medium">
                {section.number}
              </span>
              <h2 className="text-7xl font-semibold leading-tight text-neutral-800 m-0">
                {section.name}
              </h2>
              <p className="text-lg text-neutral-600 font-normal">
                {section.category}
              </p>
              
              {/* Headlines */}
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-neutral-800 mb-2 leading-tight">
                  {section.headline}
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {section.subheadline}
                </p>
              </div>
              
              {/* Mobile View Details Button */}
              <div className="mt-6 lg:hidden">
                <a 
                  href={getSectionUrl(section)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white no-underline 
                    rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 transform backface-visibility-hidden will-change-transform"
                >
                  <span>{section.id === 15 ? 'About Us' : 'View Details'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Image Container */}
            <a 
              href={getSectionUrl(section)}
              className="w-full relative block no-underline text-inherit transition-all 
                duration-500 ease-out group hover:-translate-y-2 focus:outline-none 
                focus:ring-4 focus:ring-blue-500/20"
            >
              <div className="relative w-full overflow-hidden rounded-2xl 
                shadow-[0_40px_80px_rgba(0,0,0,0.15)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.2)]
                transition-shadow duration-500">
                
                {/* Desktop: Standard container */}
                <div className="relative w-full h-[60vh]">
                  <img
                    src={section.image.src}
                    alt={section.name}
                    className="absolute inset-0 w-full h-full object-cover object-center 
                      transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                
                {/* Overlay for better interaction feedback */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>
            </a>
            
            {/* Desktop Details Button */}
            <div className="col-span-full text-center mt-10 hidden lg:block">
              <a 
                href={getSectionUrl(section)}
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#121212] hover:bg-black text-white no-underline 
                  rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 transform backface-visibility-hidden will-change-transform"
              >
                <span>{section.id === 15 ? 'About Us' : `Get More Info About ${section.name}`}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-8 right-8 text-sm text-neutral-400 font-medium">
            {String(index + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
          </div>
        </section>
      ))}
    </div>
  );
};

export default FacilitySectionsList;