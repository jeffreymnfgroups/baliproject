import React, { useEffect, useRef } from 'react';

// Partner logos

const AboutUsPage: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Helper function to set refs properly
  const setRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    const message = "Hi! I'm interested in learning more about the Bali Beach Sports & Recreation Facility. Could you please provide more information about the project scope and investment opportunities?";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1
              ref={setRef(0)}
              className="text-5xl lg:text-6xl font-semibold text-[#4c4c4c] mb-8 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
              aria-label="Welcome to Bali Beach Sports & Recreation Facility"
            >
              Welcome to the Future of Global Beach Sport & Wellness Tourism
            </h1>
            <div className="w-24 h-1 bg-[#4c4c4c] mx-auto mb-8"></div>
            <p
              ref={setRef(1)}
              className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed opacity-0 transform translate-y-8 transition-all duration-1000 ease-out delay-200"
            >
              Bali's integrated arena for surf, play, recovery, and community
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
            <div
              ref={setRef(2)}
              className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#4c4c4c] mb-8 leading-tight">
                This is Not a Resort. It's a Revolution.
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  The Bali Beach Sports & Recreation Facility represents a paradigm shift in sustainable tourism and community development.
                  This <strong className="text-[#4c4c4c]">world-class facility</strong> combines cutting-edge sports technology with
                  environmental responsibility, creating a model for future developments.
                </p>
                <p>
                  Our facility is designed to serve both local communities and international visitors, creating over 400 jobs while
                  preserving Bali's natural beauty through innovative sustainability practices.
                </p>
                <p className="text-xl font-semibold text-[#4c4c4c]">
                  Where innovation meets tradition, and sustainability drives success.
                </p>
              </div>
              <div className="mt-12">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-3 bg-[#121212] hover:bg-black text-white px-8 py-4 rounded-none font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  aria-label="Contact us via WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - Stats & Features */}
            <div
              ref={setRef(3)}
              className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out delay-300"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="text-center p-6 bg-neutral-50 rounded-none hover:bg-neutral-100 transition-colors duration-300">
                  <div className="text-4xl font-semibold text-[#4c4c4c] mb-2">400+</div>
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                    Jobs Created
                  </div>
                </div>
                <div className="text-center p-6 bg-neutral-50 rounded-none hover:bg-neutral-100 transition-colors duration-300">
                  <div className="text-4xl font-semibold text-[#4c4c4c] mb-2">15</div>
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                    Sports Zones
                  </div>
                </div>
                <div className="text-center p-6 bg-neutral-50 rounded-none hover:bg-neutral-100 transition-colors duration-300">
                  <div className="text-4xl font-semibold text-[#4c4c4c] mb-2">100%</div>
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                    Sustainable
                  </div>
                </div>
                <div className="text-center p-6 bg-neutral-50 rounded-none hover:bg-neutral-100 transition-colors duration-300">
                  <div className="text-4xl font-semibold text-[#4c4c4c] mb-2">24/7</div>
                  <div className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                    Operations
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#4c4c4c] mb-6">Facility Highlights</h3>
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-[#4c4c4c] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-neutral-600 transition-colors duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4c4c4c] mb-1">Dual Surf Machines</h4>
                    <p className="text-neutral-600">URBNSURF technology for beginners and advanced surfers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-[#4c4c4c] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-neutral-600 transition-colors duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4c4c4c] mb-1">Multi-Sport Arena</h4>
                    <p className="text-neutral-600">Beach volleyball, tennis, cricket, soccer, and badminton</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-[#4c4c4c] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-neutral-600 transition-colors duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4c4c4c] mb-1">Digital Sports Hub</h4>
                    <p className="text-neutral-600">eSports arena and mixed reality fitness experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-[#4c4c4c] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-neutral-600 transition-colors duration-300">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4c4c4c] mb-1">Wellness & Recovery</h4>
                    <p className="text-neutral-600">Spa, saunas, plunge pools, and elite performance facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={setRef(4)}
            className="text-center mb-12 opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          >
            <h2 className="text-4xl font-semibold text-[#4c4c4c] mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Backed by sport, tech, and performance leaders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FIVB Partnership */}
            <div
              ref={setRef(5)}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 transform translate-y-8 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center mr-4 shadow-lg border border-neutral-100 p-2">
                  <div
                    className="w-full h-full object-contain"
                    dangerouslySetInnerHTML={{
                      __html: `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" fill="#005fa9">
                          <rect width="900" height="600" fill="#fff"/>
                          <g transform="matrix(3.498527,0,0,3.8034251,94.952326,112.71663)">
                            <rect x="70.37" y="0" width="11.53" height="44.45"/>
                            <rect x="33.34" y="0" width="32.92" height="9.88"/>
                            <polygon points="62.96,16.46 62.96,26.34 44.86,26.34 44.86,44.45 33.34,44.45 33.34,16.46"/>
                            <path d="M162.27,21.65c1.66-1.28,4.41-4.08,4.41-8.59c0-8.18-5.37-13.05-14.34-13.05h-36.4l-8.45,28.17h-0.13L98.89,0H86.01v9.88h4.12l11.54,34.57h11.49L124.69,9.88h26.39c3.54,0,4.07,2.32,4.07,3.7c0,1.38-0.53,3.7-4.07,3.7h-19.8v9.88h20.3c3.54,0,4.07,2.32,4.07,3.7c0,1.38-0.53,3.7-4.07,3.7h-20.3v9.88h21.97c8.52,0,14.03-5.23,14.03-13.3C165.36,25.36,162.28,22.89,162.27,21.65z"/>
                            <path d="M100,54.32c-35.83,0-69.75,5.96-100,16.6v0.75c30.92-7.47,64.66-11.59,100-11.59s69.09,4.12,100,11.59v-0.75C169.76,60.29,135.84,54.32,100,54.32z"/>
                          </g>
                        </svg>
                      `,
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4c4c4c]">FIVB</h3>
                  <p className="text-neutral-600 text-sm font-medium">International Volleyball Federation</p>
                </div>
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
                Official partnership with FIVB for beach volleyball tournaments and training facilities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">International tournaments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">Training facilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">Development programs</span>
                </div>
              </div>
              <a
                href="https://www.fivb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-700 font-medium hover:text-neutral-900 transition-colors duration-300 group text-sm"
              >
                Explore FIVB Partnership
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>


            {/* ITF Partnership */}
            <div
              ref={setRef(6)}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 transform translate-y-8 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center mr-4 shadow-lg border border-neutral-100 p-2">
                  <div className="w-10 h-10" dangerouslySetInnerHTML={{
                    __html: `
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756">
                        <g fill-rule="evenodd" clip-rule="evenodd">
                          <path fill="#fff" d="M0 0h192.756v192.756H0V0z"/>
                          <path d="M189.408 78.295l.514-2.062H135.49c-3.166 10.828-5.135 18.391-5.99 22.603l8.643-4.728 11.811-5.328 11.811-4.297 8.988-2.578c3.079-.86 9.241-2.063 18.655-3.61zM158.426 112.156l2.91-9.197h21.225l4.879-18.734-14.807 3.094c-5.818 1.546-11.467 3.266-16.773 5.156l-12.496 5.157c-1.541.688-3.338 1.633-5.477 2.922l-9.842 5.756-.43.26-.428.256-13.094 48.213h32.779c.855-3.352 2.994-10.742 6.246-22.344h21.312l5.646-20.539h-21.65zM75.923 91.187c.771 2.234 1.626 5.242 2.567 9.194 1.113 5.33 1.969 9.367 2.311 11.947 1.455 9.797 1.37 19.938-.171 30.508l13.266-15.814 8.301-7.99 4.535-16.158h16.006l7.189-26.726H69.419l1.455 2.75 5.049 12.289zM75.325 112.842a90.572 90.572 0 0 0-1.798-9.623l-.342.084-9.158 33.604c-3.338 12.117-4.964 18.133-4.878 18.133h13.094c2.055-7.047 3.339-14.695 4.023-22.859.342-5.16.085-11.605-.941-19.339z" fill="#5a7d64"/>
                          <path fill="#3f9f5b" d="M73.099 103.045l.086.258.342-.084v-.26l-.428.086z"/>
                          <path d="M73.099 103.045l.428-.086a114.571 114.571 0 0 0-5.734-17.358c-1.797-4.039-3.337-7.047-4.707-9.024l-7.274 26.468h17.287z" fill="#5a7d64"/>
                          <path d="M55.64 43.49l3.594-2.062c-.77-1.117-2.225-2.062-4.45-2.836-2.311-.773-4.365-1.031-6.419-.945-2.054.172-4.365.773-6.761 1.719-1.626.688-2.91 1.375-3.851 2.148.342.43 1.112 1.032 2.225 1.633 2.226 1.29 4.793 1.976 7.617 1.976 2.739 0 5.478-.602 8.045-1.633z" fill="#fff22d" stroke="#587a79" stroke-width=".974" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/>
                          <path d="M64.369 55.436a15.251 15.251 0 0 0-.428-7.305c-.684-2.148-1.625-3.867-2.909-5.156-2.738 1.719-5.049 2.836-7.189 3.523-3.252 1.031-6.675 1.117-10.184.344-3.167-.688-5.82-1.976-7.788-3.867-2.054 1.891-3.509 3.609-4.536 5.243-1.455 2.32-2.225 4.812-2.396 7.476-.257 3.61.428 6.618 2.054 9.024l1.198 1.547 2.824-1.719c1.455-.688 2.91-1.375 4.365-1.805a16.172 16.172 0 0 1 6.761-.945c2.482.086 4.707.602 6.675 1.632 1.711.86 2.825 1.547 3.338 1.891l1.626 1.203 1.711-1.891c.856-.774 1.541-1.805 2.397-3.094 1.283-2.234 2.053-4.21 2.481-6.101z" fill="#fff22d" stroke="#587a79" stroke-width=".974" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/>
                          <path d="M44.685 64.202c-4.536.344-8.216 1.633-10.955 3.867 3.714 2.486 6.229 3.702 10.778 3.678 4.379-.024 7.512-1.411 11.132-3.764-3.36-2.43-6.604-4.136-10.955-3.781z" fill="#fff22d" stroke="#587a79" stroke-width=".974" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2.613"/>
                        </g>
                      </svg>
                    `,
                  }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4c4c4c]">ITF</h3>
                  <p className="text-neutral-600 text-sm font-medium">International Tennis Federation</p>
                </div>
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
                Partnership with ITF for tennis courts, coaching programs, and professional tournaments.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">Professional courts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">Coaching programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">Tournament hosting</span>
                </div>
              </div>
              <a
                href="https://www.itftennis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-700 font-medium hover:text-neutral-900 transition-colors duration-300 group text-sm"
              >
                Explore ITF Partnership
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>


            {/* URBNSURF Partnership */}
            <div
            ref={setRef(7)}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 transform translate-y-8 hover:-translate-y-2"
            >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-neutral-600 flex items-center justify-center mr-4 shadow-lg border border-neutral-100 p-2">
                {/* Text-based inline logo */}
                <span className="text-white text-xs font-semibold tracking-wide">URBNSURF</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#4c4c4c]">URBNSURF</h3>
                <p className="text-neutral-600 text-sm font-medium">Wave Technology Partner</p>
              </div>
            </div>

            <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
              Cutting-edge wave technology for perfect surfing conditions year-round.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                <span className="text-neutral-600 text-sm">Perfect waves year-round</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                <span className="text-neutral-600 text-sm">Dual wave systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                <span className="text-neutral-600 text-sm">All skill levels</span>
              </div>
            </div>

            <a
              href="https://www.urbnsurf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-700 font-medium hover:text-neutral-900 transition-colors duration-300 group text-sm"
            >
              Explore URBNSURF Partnership
              <svg
                className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            </div>


            {/* Extreme Partnership */}
            <div
              ref={setRef(8)}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 transform translate-y-8 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center mr-4 shadow-lg border border-neutral-100 p-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EX</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#4c4c4c]">Extreme</h3>
                  <p className="text-neutral-600 text-sm font-medium">Extreme Sports Partner</p>
                </div>
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed text-sm">
                Partnership for extreme sports facilities including skateboarding, BMX, and adventure courses.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">Skateboarding zones</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">BMX tracks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
                  <span className="text-neutral-600 text-sm">Adventure courses</span>
                </div>
              </div>
              <a
                href="https://www.extremesports.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-700 font-medium hover:text-neutral-900 transition-colors duration-300 group text-sm"
              >
                Explore Extreme Partnership
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#4c4c4c] via-neutral-700 to-neutral-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            }}
          ></div>
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div
            ref={setRef(9)}
            className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="mb-8">
              <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-4 tracking-tight">
                This is Not a Resort.
              </h2>
              <div className="relative inline-block">
                <h2 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  It's a Revolution.
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transform scale-x-0 animate-pulse"></div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-xl lg:text-2xl text-neutral-200 leading-relaxed mb-6">
                Contact us to learn more, view our site plan, or schedule a walk-through.
              </p>
              <p className="text-lg text-neutral-300 font-medium">
                Built for a sustainable tomorrow with over 400 jobs created.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={handleContactClick}
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-none font-semibold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transform-gpu"
                aria-label="Contact us via WhatsApp"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-none opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="relative z-10">Contact Us</span>
              </button>
              <a
                href="/projects"
                className="group relative inline-flex items-center gap-4 bg-transparent border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-[#4c4c4c] px-10 py-5 rounded-none font-semibold text-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm"
                aria-label="View site plan"
              >
                <span className="relative z-10">View Site Plan</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <div className="absolute inset-0 bg-white rounded-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-neutral-300">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">info@balibeachsports.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;