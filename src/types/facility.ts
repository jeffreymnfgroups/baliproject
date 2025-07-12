// src/types/facility.ts
import type { ImageMetadata } from 'astro';

export interface FacilitySection {
  id: number;
  number: string;
  name: string;
  category: string;
  image: ImageMetadata;
  headline: string;
  subheadline: string;
}

export interface FacilityImage {
  src: ImageMetadata;
  alt: string;
  width: number;
  height: number;
}

export interface FacilityData {
  id: string;
  name: string;
  category: string;
  description: string;
  heroImage: FacilityImage;
  info: {
    type: string[];
    status: string;
    yearOfDesign: number;
    location: string;
    area: string;
  };
  aboutSection: string;
  galleryImages: FacilityImage[];
}