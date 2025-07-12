// src/data/facility-sections.js - Facility sections data
// Using existing project images as placeholders for Bali facility
import heroAerialImg from '../assets/projects/emaar/panorama/main-image.webp';
import waterparkImg from '../assets/projects/emaar/panorama/gallery-1.webp';
import surfMachinesImg from '../assets/projects/emaar/the-views/main-image.webp';
import beachSportsImg from '../assets/projects/emaar/park-edge/main-image.webp';
import racquetSportsImg from '../assets/projects/emaar/coral-towers/main-image.webp';
import extremeSportsImg from '../assets/projects/emaar/pearl-reef-towers/main-image.webp';
import digitalSportsImg from '../assets/projects/hmr/aa-waterfront/main-image.webp';
import wellnessImg from '../assets/projects/hmr/gold-crest-residence/main-image.webp';
import spaRecoveryImg from '../assets/projects/hmr/hs-residence/main-image.webp';
import culinaryImg from '../assets/projects/hmr/h1-tower/main-image.webp';
import accommodationImg from '../assets/projects/hmr/saima-marina/main-image.webp';
import sustainabilityImg from '../assets/projects/hmr/saima-waterfront/main-image.webp';
import communityImg from '../assets/projects/hmr/beach-terraces-by-metro/main-image.webp';
import partnershipsImg from '../assets/projects/emaar/panorama/gallery-2.webp';
import finalImg from '../assets/projects/emaar/panorama/gallery-3.webp';

export const facilitySections = [
  {
    id: 1,
    number: '001',
    name: 'Hero Aerial View',
    category: 'Overview',
    image: heroAerialImg,
    headline: 'Welcome to the Future of Global Beach Sport & Wellness Tourism',
    subheadline: "Bali's integrated arena for surf, play, recovery, and community"
  },
  {
    id: 2,
    number: '002',
    name: 'Waterpark',
    category: 'Attractions',
    image: waterparkImg,
    headline: "Bali's most iconic water attraction",
    subheadline: 'Fun and adventure for all ages'
  },
  {
    id: 3,
    number: '003',
    name: 'Dual Surf Machines',
    category: 'Water Sports',
    image: surfMachinesImg,
    headline: 'Ride World-Class Waves in Paradise',
    subheadline: 'Two wave systems for every level of surfing'
  },
  {
    id: 4,
    number: '004',
    name: 'Beach Sports Arena',
    category: 'Sports',
    image: beachSportsImg,
    headline: 'Where Sand Meets Skill',
    subheadline: "Bali's first multi-sport beach arena, hosting local and international events"
  },
  {
    id: 5,
    number: '005',
    name: 'Racquet Sports Complex',
    category: 'Sports',
    image: racquetSportsImg,
    headline: 'Elite Courts for Every Passion',
    subheadline: 'Designed for athletes, families, and local development'
  },
  {
    id: 6,
    number: '006',
    name: 'Extreme Sports Zone',
    category: 'Action Sports',
    image: extremeSportsImg,
    headline: "Bali's New Hub for Youth and Action Sports",
    subheadline: 'Designed for energy, performance, and adrenaline'
  },
  {
    id: 7,
    number: '007',
    name: 'Digital Sports',
    category: 'Innovation',
    image: digitalSportsImg,
    headline: 'Where Gaming and Fitness Collide',
    subheadline: "Innovation meets movement in Bali's first digital sports hub"
  },
  {
    id: 8,
    number: '008',
    name: 'Wellness and Fitness',
    category: 'Wellness',
    image: wellnessImg,
    headline: 'Mind. Body. Balance.',
    subheadline: 'For athletes, tourists, and recovery-focused guests'
  },
  {
    id: 9,
    number: '009',
    name: 'Spa and Recovery Centre',
    category: 'Recovery',
    image: spaRecoveryImg,
    headline: 'Recover. Reset. Recharge.',
    subheadline: 'Elite performance facilities for full recovery and wellness'
  },
  {
    id: 10,
    number: '010',
    name: 'Culinary Experience',
    category: 'Dining',
    image: culinaryImg,
    headline: "From Bali's Soil to Your Plate",
    subheadline: 'Locally sourced, nutritionally driven food experiences'
  },
  {
    id: 11,
    number: '011',
    name: 'Eco-Accommodation',
    category: 'Lodging',
    image: accommodationImg,
    headline: 'Stay Inspired',
    subheadline: 'Bespoke sustainable living experiences for every visitor'
  },
  {
    id: 12,
    number: '012',
    name: 'Sustainability',
    category: 'Environment',
    image: sustainabilityImg,
    headline: 'Built for a Sustainable Tomorrow',
    subheadline: 'Ocean water use, solar energy, zero-carbon concrete, local materials'
  },
  {
    id: 13,
    number: '013',
    name: 'Community Impact',
    category: 'Social',
    image: communityImg,
    headline: 'Investing in People, Not Just Property',
    subheadline: 'Over 400 jobs created. Local training. Community led.'
  },
  {
    id: 14,
    number: '014',
    name: 'Global Partnerships',
    category: 'Recognition',
    image: partnershipsImg,
    headline: "Powered by the World's Most Visionary Brands",
    subheadline: 'Backed by sport, tech, and performance leaders'
  },
  {
    id: 15,
    number: '015',
    name: 'Call to Action',
    category: 'Contact',
    image: finalImg,
    headline: "This is Not a Resort. It's a Revolution.",
    subheadline: 'Contact us to learn more about investment opportunities, view our site plan, or schedule a facility walk-through'
  }
];

export const getFacilitySectionsByCategory = (category) => {
  return facilitySections.filter(section => section.category === category);
};

export const getFacilitySectionCounts = () => {
  return {
    attractions: facilitySections.filter(s => s.category === 'Attractions').length,
    sports: facilitySections.filter(s => s.category === 'Sports').length,
    wellness: facilitySections.filter(s => s.category === 'Wellness').length,
    innovation: facilitySections.filter(s => s.category === 'Innovation').length,
    total: facilitySections.length
  };
};