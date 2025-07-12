// src/data/projects.js - Bali Beach Sports & Recreation Facility
// Import your images - these paths need to match your actual file structure
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

export const projects = [
  {
    id: 1,
    number: '001',
    name: 'Hero Aerial View',
    location: 'Facility Overview',
    image: panoramaImg,
    description: 'Get a bird’s eye view of the entire destination — the perfect first impression that sets the stage for everything this world-class venue has to offer.',
    headline: 'Welcome to the Future of Global Beach Sport & Wellness Tourism',
    subheadline: 'Bali\'s integrated arena for surf, play, recovery, and community'
  },
  {
    id: 2,
    number: '002',
    name: 'Waterpark',
    location: 'Centrepiece Attraction',
    image: theViewsImg,
    description: 'Splash, slide, and float your way through a family-friendly oasis — where thrill-seekers and toddlers alike make unforgettable memories.',
    headline: 'Bali\'s most iconic water attraction',
    subheadline: 'Fun and adventure for all ages'
  },
  {
    id: 3,
    number: '003',
    name: 'Dual Surf Machines',
    location: 'URBNSURF + Recreational Waves',
    image: parkEdgeImg,
    description: 'Whether it’s your first time standing on a board or you’re chasing the perfect barrel, our dual surf machines offer waves for every skill level.',
    headline: 'Ride World-Class Waves in Paradise',
    subheadline: 'Two wave systems for every level of surfing'
  },
  {
    id: 4,
    number: '004',
    name: 'Beach Sports Arena',
    location: 'Multi-Sport Complex',
    image: coralTowersImg,
    description: 'Feel the energy of competition in a dynamic arena where sand meets sport — from casual games to global championships.',
    headline: 'Where Sand Meets Skill',
    subheadline: 'Bali\'s first multi-sport beach arena, hosting local and international events'
  },
  {
    id: 5,
    number: '005',
    name: 'Racquet Sports Complex',
    location: 'Tennis & Padel',
    image: pearlReefImg,
    description: 'Smash, serve, and rally in state-of-the-art courts designed for pros, families, and anyone passionate about racquet sports.',
    headline: 'Elite Courts for Every Passion',
    subheadline: 'Designed for athletes, families, and local development'
  },
  {
    id: 6,
    number: '006',
    name: 'Extreme Sports Zone',
    location: 'Action Sports',
    image: aaWaterfrontImg,
    description: 'An adrenaline-fueled playground for skaters, bikers, and action lovers ready to push limits and unleash their edge.',
    headline: 'Bali\'s New Hub for Youth and Action Sports',
    subheadline: 'Designed for energy, performance, and adrenaline'
  },
  {
    id: 7,
    number: '007',
    name: 'Digital Sports',
    location: 'eSports + Mixed Reality Fitness',
    image: goldCrestImg,
    description: 'Step into the future with immersive gaming zones and interactive workouts that blend digital play with real-world movement.',
    headline: 'Where Gaming and Fitness Collide',
    subheadline: 'Innovation meets movement in Bali\'s first digital sports hub'
  },
  {
    id: 8,
    number: '008',
    name: 'Wellness and Fitness Zones',
    location: 'Health & Wellness',
    image: hsResidenceImg,
    description: 'Recenter your mind and body with open-air yoga decks, fitness centers, and nature-connected wellness spaces.',
    headline: 'Mind. Body. Balance.',
    subheadline: 'For athletes, tourists, and recovery-focused guests'
  },
  {
    id: 9,
    number: '009',
    name: 'Spa and Recovery Centre',
    location: 'Elite Performance',
    image: h1TowerImg,
    description: 'Unwind and recharge in a serene environment with massage therapies, ice baths, and elite recovery treatments.',
    headline: 'Recover. Reset. Recharge.',
    subheadline: 'Elite performance facilities for full recovery and wellness'
  },
  {
    id: 10,
    number: '010',
    name: 'Food, Beverage and Culinary Experience',
    location: 'Dining & Nutrition',
    image: saimaMarinaImg,
    description: 'Savor nutrient-rich meals made from fresh, local ingredients — combining delicious flavor with health-conscious living.',
    headline: 'From Bali\'s Soil to Your Plate',
    subheadline: 'Locally sourced, nutritionally driven food experiences'
  },
  {
    id: 11,
    number: '011',
    name: 'Eco-Accommodation and Lodging',
    location: 'Sustainable Living',
    image: saimaWaterfrontImg,
    description: 'Sleep among the trees or beside the waves in eco-friendly pods, bamboo villas, and sports lodges made for comfort and connection.',
    headline: 'Stay Inspired',
    subheadline: 'Bespoke sustainable living experiences for every visitor'
  },
  {
    id: 12,
    number: '012',
    name: 'Sustainability and Environmental Responsibility',
    location: 'Green Technology',
    image: beachTerraceImg,
    description: 'Built with the planet in mind — using solar energy, recycled water, and locally made zero-carbon materials to protect our future.',
    headline: 'Built for a Sustainable Tomorrow',
    subheadline: 'Ocean water use, solar energy, zero-carbon concrete, local materials'
  },
  {
    id: 13,
    number: '013',
    name: 'Community and Job Creation',
    location: 'Local Impact',
    image: beachTerraceImg1, // Reused image
    description: 'Empowering local talent through jobs, skills training, and inclusive participation — because real impact starts at home.',
    headline: 'Investing in People, Not Just Property',
    subheadline: 'Over 400 jobs created. Local training. Community led.'
  },
  {
    id: 14,
    number: '014',
    name: 'Partnerships and Global Recognition',
    location: 'International Alliances',
    image: beachTerraceImg2, // Reused image
    description: 'Collaborating with the world’s most respected names in sport and tech to elevate Bali’s global reputation.',
    headline: 'Powered by the World\'s Most Visionary Brands',
    subheadline: 'Backed by sport, tech, and performance leaders'
  },
  {
    id: 15,
    number: '015',
    name: 'Final Section / Call to Action',
    location: 'Project Overview',
    image: beachTerraceImg3, // Reused image
    description: 'A breathtaking sunset view that invites you to take the next step — explore, invest, or visit the future of global sport tourism.',
    headline: 'This is Not a Resort. It\'s a Revolution.',
    subheadline: 'Contact us to learn more, view our site plan, or schedule a walk-through'
  },
];


export const getProjectsByLocation = (location) => {
  return projects.filter(project => project.location === location);
};

export const getProjectCounts = () => {
  return {
    'Facility Overview': projects.filter(p => p.location === 'Facility Overview').length,
    'Centrepiece Attraction': projects.filter(p => p.location === 'Centrepiece Attraction').length,
    'URBNSURF + Recreational Waves': projects.filter(p => p.location === 'URBNSURF + Recreational Waves').length,
    'Multi-Sport Complex': projects.filter(p => p.location === 'Multi-Sport Complex').length,
    'Tennis & Padel': projects.filter(p => p.location === 'Tennis & Padel').length,
    'Action Sports': projects.filter(p => p.location === 'Action Sports').length,
    'eSports + Mixed Reality Fitness': projects.filter(p => p.location === 'eSports + Mixed Reality Fitness').length,
    'Health & Wellness': projects.filter(p => p.location === 'Health & Wellness').length,
    'Elite Performance': projects.filter(p => p.location === 'Elite Performance').length,
    'Dining & Nutrition': projects.filter(p => p.location === 'Dining & Nutrition').length,
    'Sustainable Living': projects.filter(p => p.location === 'Sustainable Living').length,
    'Green Technology': projects.filter(p => p.location === 'Green Technology').length,
    'Local Impact': projects.filter(p => p.location === 'Local Impact').length,
    'International Alliances': projects.filter(p => p.location === 'International Alliances').length,
    'Project Overview': projects.filter(p => p.location === 'Project Overview').length,
  };
};
