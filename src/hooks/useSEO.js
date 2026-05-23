import { useEffect } from 'react';

/**
 * Custom hook to dynamically update document Title and Meta Description for SEO.
 * @param {string} title - Page title prefix (e.g. "Infrastructure Blueprints")
 * @param {string} description - Page meta description content
 */
export const useSEO = (title, description) => {
  useEffect(() => {
    // Dynamically set title tags
    document.title = title 
      ? `${title} | Autonomix` 
      : 'Autonomix | Futuristic Enterprise AI & Automation';

    // Dynamically set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.content = description || 
      'Autonomous workflows and intelligent AI agents engineered for next-generation enterprise scale and zero trust security.';
  }, [title, description]);
};

export default useSEO;
