// src/utils/imageLoader.ts - Utility for safe image loading
import type { ImageMetadata } from 'astro';

export interface SafeImageResult {
  src: ImageMetadata | null;
  alt: string;
  width: number;
  height: number;
}

/**
 * Safely load an image with fallback handling
 */
export async function loadImageSafely(
  imagePath: string, 
  alt: string, 
  fallback?: ImageMetadata
): Promise<SafeImageResult> {
  try {
    // Get all image modules
    const imageModules = import.meta.glob('/src/assets/projects/**/*.{webp,jpg,jpeg,png}');
    
    // Try to find the exact path
    const fullPath = `/src/assets/projects/${imagePath}`;
    
    if (imageModules[fullPath]) {
      const module = await imageModules[fullPath]();
      return {
        src: (module as any).default,
        alt,
        width: 1200,
        height: 800
      };
    }
    
    // If not found, return fallback or null
    return {
      src: fallback || null,
      alt,
      width: 1200,
      height: 800
    };
  } catch (error) {
    console.warn(`Failed to load image: ${imagePath}`, error);
    return {
      src: fallback || null,
      alt,
      width: 1200,
      height: 800
    };
  }
}

/**
 * Load multiple gallery images for a project
 */
export async function loadProjectGallery(
  projectLocation: string,
  projectId: string,
  maxImages: number = 10
): Promise<SafeImageResult[]> {
  const galleryImages: SafeImageResult[] = [];
  const basePath = `${projectLocation.toLowerCase()}/${projectId}`;
  
  for (let i = 1; i <= maxImages; i++) {
    const imagePath = `${basePath}/gallery-${i}.webp`;
    const result = await loadImageSafely(imagePath, `Gallery Image ${i}`);
    
    if (result.src) {
      galleryImages.push(result);
    }
  }
  
  return galleryImages;
}

/**
 * Get available image formats for a project
 */
export function getImageFormats(): string[] {
  return ['webp', 'jpg', 'jpeg', 'png'];
}

/**
 * Generate image paths with different format fallbacks
 */
export function generateImagePaths(basePath: string, imageName: string): string[] {
  const formats = getImageFormats();
  return formats.map(format => `${basePath}/${imageName}.${format}`);
}