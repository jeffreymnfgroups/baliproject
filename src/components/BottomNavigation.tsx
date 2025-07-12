// src/components/BottomNavigation.tsx - Updated for Bali Beach Sports & Recreation Facility
import React, { useState, useEffect } from 'react';
import { getProjectCounts } from '../data/projects.js';

interface BottomNavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentSection, onSectionChange }) => {
  const [projectCounts, setProjectCounts] = useState({ 'Sports & Recreation': 0, 'Wellness & Recovery': 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const counts = getProjectCounts();
      setProjectCounts({
        'Sports & Recreation': counts['Facility Overview'] || 8,
        'Wellness & Recovery': counts['Centrepiece Attraction'] || 7
      });
    }
  }, [isClient]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-[10px] border-t border-black/10 z-[1000] md:hidden">
      <div className="flex justify-around items-center py-3">
        <button
          onClick={() => onSectionChange('sports')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
            currentSection === 'sports' ? 'text-black bg-neutral-100' : 'text-neutral-500'
          }`}
          data-section="sports"
        >
          <span className="text-xs font-medium">
            Sports & Recreation <sup className="text-[10px] ml-0.5">{projectCounts['Sports & Recreation'] || 8}</sup>
          </span>
        </button>
        
        <button
          onClick={() => onSectionChange('wellness')}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
            currentSection === 'wellness' ? 'text-black bg-neutral-100' : 'text-neutral-500'
          }`}
          data-section="wellness"
        >
          <span className="text-xs font-medium">
            Wellness & Recovery <sup className="text-[10px] ml-0.5">{projectCounts['Wellness & Recovery'] || 7}</sup>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;