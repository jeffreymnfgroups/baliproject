// src/components/FacilityHeroSection.tsx - Immersive Hero Section
import React, { useEffect, useRef } from 'react';

const FacilityHeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Auto-play video with proper handling
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  const handleContactClick = () => {
    const message = "Hi! I'm interested in learning more about the Bali Beach Sports & Recreation Facility investment opportunity. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Video/Image Background */}
      <div className="absolute inset-0">
        {/* Placeholder for 3D aerial view - replace with actual facility render */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          {/* Optional: Video background */}
          {/* <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/facility-aerial-video.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Welcome to the Future of
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Global Beach Sport
            </span>
            <span className="block">& Wellness Tourism</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            Bali's integrated arena for surf, play, recovery, and community
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15</div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Sport Zones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">400+</div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Sustainable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Operations</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleContactClick}
              className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl"
            >
              <span>Explore Investment</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button
              onClick={() => document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            >
              <span>View Facilities</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default FacilityHeroSection;