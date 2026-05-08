// Source of truth for German's project portfolio.
// Each project renders as a tile on the homepage and a detail page at /work/[slug].
// Replace placeholder Vimeo IDs and copy as German shares his actual reel/clips.

export interface Project {
  slug: string;
  title: string;
  category: "Feature" | "Episodic" | "Commercial" | "Music Video" | "Documentary" | "Short";
  year: number;
  role: "Director of Photography" | "Gaffer" | "Additional Photography";
  director?: string;
  studio?: string;
  format?: string;          // e.g., "ARRI Alexa 35 / 35mm"
  vimeoId?: string;         // numeric or alphanumeric Vimeo ID
  posterImage?: string;     // path under /public/work/<slug>/poster.jpg
  stills?: string[];        // paths under /public/work/<slug>/...
  synopsis?: string;
  /** Show on homepage grid? */
  featured?: boolean;
}

// PLACEHOLDER projects — to be replaced with content from germanvalle.com
// and German's Vimeo profile. Vimeo IDs below are public Vimeo demos used
// only so the site renders during development.
export const projects: Project[] = [
  {
    slug: "feature-placeholder-one",
    title: "Untitled Feature",
    category: "Feature",
    year: 2025,
    role: "Director of Photography",
    director: "TBD",
    studio: "TBD",
    format: "ARRI Alexa 35",
    vimeoId: "76979871",
    posterImage: "/work/feature-placeholder-one/poster.jpg",
    synopsis: "Placeholder synopsis. Replace with German's actual project.",
    featured: true,
  },
  {
    slug: "episodic-placeholder",
    title: "Untitled Episodic",
    category: "Episodic",
    year: 2024,
    role: "Director of Photography",
    director: "TBD",
    studio: "TBD",
    vimeoId: "1084537",
    featured: true,
  },
  {
    slug: "commercial-placeholder-one",
    title: "Untitled Commercial",
    category: "Commercial",
    year: 2024,
    role: "Director of Photography",
    director: "TBD",
    vimeoId: "169599296",
    featured: true,
  },
  {
    slug: "commercial-placeholder-two",
    title: "Untitled Brand Spot",
    category: "Commercial",
    year: 2023,
    role: "Director of Photography",
    director: "TBD",
    vimeoId: "169599296",
    featured: true,
  },
  {
    slug: "music-video-placeholder",
    title: "Untitled Music Video",
    category: "Music Video",
    year: 2023,
    role: "Director of Photography",
    director: "TBD",
    vimeoId: "76979871",
    featured: true,
  },
  {
    slug: "short-film-placeholder",
    title: "Untitled Short",
    category: "Short",
    year: 2022,
    role: "Director of Photography",
    director: "TBD",
    vimeoId: "1084537",
    featured: true,
  },
];

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured !== false);

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
