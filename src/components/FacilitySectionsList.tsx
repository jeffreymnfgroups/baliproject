// src/components/FacilitySectionsList.tsx - Full-screen immersive sections
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

  const handleContactClick = () => {
    const message = "Hi! I'm interested in learning more about the Bali Beach Sports & Recreation Facility. Could you please provide more information about investment opportunities?";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Setup intersection observer
  const setupIntersectionObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0.3, 0.7]
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (isScrolling) return;

      let maxIntersectionRatio = 0;
      let mostVisibleEntry: IntersectionObserverEntry | null = null;

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
          setCurrentIndex(sectionIndex);
        }
      }
    }, options);

    sectionsRef.current.forEach(section => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });
  }, [isScrolling]);

  useEffect(() => {
    setupIntersectionObserver();
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupIntersectionObserver]);

  // Get high-quality placeholder images for each section
  const getSectionImage = (section: FacilitySection) => {
    const imageMap: Record<string, string> = {
      'Hero Aerial View': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Waterpark': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Dual Surf Machines': 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Beach Sports Arena': 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Racquet Sports Complex': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Extreme Sports Zone': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Digital Sports': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Wellness and Fitness Zones': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Spa and Recovery Centre': 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Food, Beverage and Culinary Experience': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Eco-Accommodation and Lodging': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Sustainability and Environmental Responsibility': 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Community and Job Creation': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Partnerships and Global Recognition': 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'Final Section ': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    };

    return imageMap[section.name] || section.image.src;
  };

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
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
          id={`section-${section.id}`}
          data-section-id={section.id}
          data-section-name={section.name}
          data-section-category={section.category.toLowerCase()}
          data-section-index={index}
        >
          {/* Full-screen Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('${getSectionImage(section)}')`
            }}
          />

          {/* Content Overlay */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 text-center text-white">
            
            {/* Section Number */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider">
                {section.number}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {section.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
              {section.subheadline}
            </p>

            {/* Category Badge */}
            <div className="mb-12">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/80 to-cyan-400/80 backdrop-blur-sm rounded-full text-lg font-medium">
                {section.category}
              </span>
            </div>

            {/* Call to Action - Special handling for final section */}
            {section.id === 15 ? (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button
                    onClick={handleContactClick}
                    className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl"
                  >
                    <span>Contact Us</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <a
                    href="/about"
                    className="group inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                  >
                    <span>View Site Plan</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80 mt-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+62 812 3456 7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@balibeachsports.com</span>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (index < sections.length - 1) {
                    document.getElementById(`section-${sections[index + 1].id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/30 hover:scale-105"
              >
                <span>Explore More</span>
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            )}
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-8 right-8 text-white/60 text-sm font-medium">
            {String(index + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </section>
      ))}
    </div>
  );
};

export default FacilitySectionsList;