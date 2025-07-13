// src/data/facility-sections.js - Updated with proper sports facility content
// Using high-quality placeholder images that match the facility concept
import panoramaImg from '../assets/projects/emaar/panorama/main-image.webp';
import theViewsImg from '../assets/projects/emaar/the-views/main-image.webp';
import parkEdgeImg from '../assets/projects/emaar/park-edge/main-image.webp';
import coralTowersImg from '../assets/projects/emaar/coral-towers/main-image.webp';
import pearlReefImg from '../assets/projects/emaar/pearl-reef-towers/main-image.webp';
import aaWaterfrontImg from '../assets/projects/hmr/aa-waterfront/main-image.webp';
import goldCrestImg from '../assets/projects/hmr/gold-crest-residence/main-image.webp';
import hsResidenceImg from '../assets/projects/hmr/hs-residence/main-image.webp';
import h1TowerImg from '../assets/projects/hmr/h1-tower/main-image.webp';
import saimaMarinaImg from '../assets/projects/hmr/saima-marina/main-image.webp';
import saimaWaterfrontImg from '../assets/projects/hmr/saima-waterfront/main-image.webp';
import beachTerraceImg from '../assets/projects/hmr/beach-terraces-by-metro/main-image.webp';
import beachTerraceImg1 from '../assets/projects/hmr/beach-terraces-by-metro/main-image1.webp';
import beachTerraceImg2 from '../assets/projects/hmr/beach-terraces-by-metro/main-image2.webp';
import beachTerraceImg3 from '../assets/projects/hmr/beach-terraces-by-metro/main-image3.webp';

export const facilitySections = [
  {
    id: 1,
    number: '001',
    name: 'Hero Aerial View',
    category: 'Facility Overview',
    image: panoramaImg,
    headline: 'Welcome to the Future of Global Beach Sport & Wellness Tourism',
    subheadline: 'Bali\'s integrated arena for surf, play, recovery, and community'
  },
  {
    id: 2,
    number: '002',
    name: 'Waterpark',
    category: 'Centrepiece Attraction',
    image: theViewsImg,
    headline: 'Bali\'s Most Iconic Water Attraction',
    subheadline: 'Fun and adventure for all ages with world-class water slides and lazy river'
  },
  {
    id: 3,
    number: '003',
    name: 'Dual Surf Machines',
    category: 'URBNSURF Technology',
    image: parkEdgeImg,
    headline: 'Ride World-Class Waves in Paradise',
    subheadline: 'Two wave systems for every level of surfing - beginner to pro'
  },
  {
    id: 4,
    number: '004',
    name: 'Beach Sports Arena',
    category: 'Multi-Sport Complex',
    image: coralTowersImg,
    headline: 'Where Sand Meets Skill',
    subheadline: 'Bali\'s first multi-sport beach arena hosting local and international events'
  },
  {
    id: 5,
    number: '005',
    name: 'Racquet Sports Complex',
    category: 'Elite Training',
    image: pearlReefImg,
    headline: 'Elite Courts for Every Passion',
    subheadline: 'Professional tennis, pickleball, and padel courts for athletes and families'
  },
  {
    id: 6,
    number: '006',
    name: 'Extreme Sports Zone',
    category: 'Action Sports',
    image: aaWaterfrontImg,
    headline: 'Bali\'s New Hub for Youth and Action Sports',
    subheadline: 'Skate park, BMX ramps, and ninja warrior courses for adrenaline seekers'
  },
  {
    id: 7,
    number: '007',
    name: 'Digital Sports',
    category: 'Innovation Hub',
    image: goldCrestImg,
    headline: 'Where Gaming and Fitness Collide',
    subheadline: 'eSports arena and mixed reality fitness in Bali\'s first digital sports hub'
  },
  {
    id: 8,
    number: '008',
    name: 'Wellness and Fitness Zones',
    category: 'Health & Wellness',
    image: hsResidenceImg,
    headline: 'Mind. Body. Balance.',
    subheadline: 'Open-air yoga decks and nature-integrated wellness for complete rejuvenation'
  },
  {
    id: 9,
    number: '009',
    name: 'Spa and Recovery Centre',
    category: 'Elite Performance',
    image: h1TowerImg,
    headline: 'Recover. Reset. Recharge.',
    subheadline: 'Elite performance facilities with massage, saunas, and ice baths'
  },
  {
    id: 10,
    number: '010',
    name: 'Food, Beverage and Culinary Experience',
    category: 'Sustainable Dining',
    image: saimaMarinaImg,
    headline: 'From Bali\'s Soil to Your Plate',
    subheadline: 'Locally sourced, nutritionally driven food experiences'
  },
  {
    id: 11,
    number: '011',
    name: 'Eco-Accommodation and Lodging',
    category: 'Sustainable Living',
    image: saimaWaterfrontImg,
    headline: 'Stay Inspired',
    subheadline: 'Treehouse pods, bamboo villas, and sports lodges for every visitor'
  },
  {
    id: 12,
    number: '012',
    name: 'Sustainability and Environmental Responsibility',
    category: 'Green Innovation',
    image: beachTerraceImg,
    headline: 'Built for a Sustainable Tomorrow',
    subheadline: 'Solar energy, water recycling, and zero-carbon materials'
  },
  {
    id: 13,
    number: '013',
    name: 'Community and Job Creation',
    category: 'Social Impact',
    image: beachTerraceImg1,
    headline: 'Investing in People, Not Just Property',
    subheadline: 'Over 400 jobs created with local training and community leadership'
  },
  {
    id: 14,
    number: '014',
    name: 'Partnerships and Global Recognition',
    category: 'World-Class Partners',
    image: beachTerraceImg2,
    headline: 'Powered by the World\'s Most Visionary Brands',
    subheadline: 'Backed by FIVB, ITF, URBNSURF, and global sports leaders'
  },
  {
    id: 15,
    number: '015',
    name: 'Final Section ',
    category: 'Investment Opportunity',
    image: beachTerraceImg3,
    headline: 'This is Not a Resort. It\'s a Revolution.',
    subheadline: 'Contact us to learn more, view our site plan, or schedule a walk-through'
  }
];

export const getFacilitySectionsByCategory = (category) => {
  return facilitySections.filter(section => section.category === category);
};

export const getFacilitySectionCounts = () => {
  return {
    attractions: facilitySections.filter(s => s.category === 'Centrepiece Attraction').length,
    sports: facilitySections.filter(s => ['Multi-Sport Complex', 'Elite Training', 'Action Sports'].includes(s.category)).length,
    wellness: facilitySections.filter(s => ['Health & Wellness', 'Elite Performance'].includes(s.category)).length,
    innovation: facilitySections.filter(s => ['Innovation Hub', 'Green Innovation'].includes(s.category)).length,
    total: facilitySections.length
  };
};