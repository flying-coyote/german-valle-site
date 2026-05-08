// Source of truth for German's project portfolio.
// Each project renders as a tile on the homepage and a detail page at /work/[slug].
// videoUrl supports either Vimeo or YouTube — see src/utils/video.ts for the parser.

export interface Project {
  slug: string;
  title: string;
  category: "Feature" | "Episodic" | "Commercial" | "Music Video" | "Documentary" | "Short";
  year: number;
  role: "Director of Photography" | "Gaffer" | "Additional Photography";
  director?: string;
  studio?: string;
  format?: string;
  videoUrl: string;
  posterImage?: string;
  stills?: string[];
  synopsis?: string;
  /** Show on homepage grid? */
  featured?: boolean;
}

// Project list extracted from germanvalle.com (Feb 2026 snapshot via WP REST API).
// Years and credits should be confirmed by German before public launch.
export const projects: Project[] = [
  {
    slug: "tyler-perrys-zatima",
    title: "Tyler Perry's Zatima",
    category: "Episodic",
    year: 2024,
    role: "Director of Photography",
    studio: "BET+ / Tyler Perry Studios",
    videoUrl: "https://www.youtube.com/watch?v=bbYMy0KKrQM",
    featured: true,
  },
  {
    slug: "tyler-perrys-house-of-payne",
    title: "Tyler Perry's House of Payne",
    category: "Episodic",
    year: 2024,
    role: "Director of Photography",
    studio: "BET / Tyler Perry Studios",
    videoUrl: "https://www.youtube.com/watch?v=dg_memQychc",
    featured: true,
  },
  {
    slug: "tyler-perrys-young-dylan",
    title: "Tyler Perry's Young Dylan",
    category: "Episodic",
    year: 2023,
    role: "Director of Photography",
    studio: "Nickelodeon / Tyler Perry Studios",
    videoUrl: "https://www.youtube.com/watch?v=oBJlkPeOGak",
    featured: true,
  },
  {
    slug: "blue-devils",
    title: "Blue Devils",
    category: "Feature",
    year: 2025,
    role: "Director of Photography",
    videoUrl: "https://www.youtube.com/watch?v=iM8wazy1GME",
    featured: true,
  },
  {
    slug: "curveball",
    title: "Curveball",
    category: "Feature",
    year: 2024,
    role: "Director of Photography",
    studio: "ALLBLK",
    videoUrl: "https://www.youtube.com/watch?v=NUTwHNy4_DI",
    featured: true,
  },
  {
    slug: "not-my-family",
    title: "Not My Family: The Monique Smith Story",
    category: "Feature",
    year: 2024,
    role: "Director of Photography",
    studio: "Lifetime",
    videoUrl: "https://www.youtube.com/watch?v=ed9c8nDvO1U",
    featured: true,
  },
  {
    slug: "sincerely-love",
    title: "Sincerely Love",
    category: "Feature",
    year: 2024,
    role: "Director of Photography",
    studio: "In The Black Network",
    videoUrl: "https://www.youtube.com/watch?v=0QAQ8lqWnPU",
    featured: false,
  },
  {
    slug: "secrets-of-vixen",
    title: "Secrets of Vixen",
    category: "Episodic",
    year: 2024,
    role: "Director of Photography",
    studio: "CandyJar TV",
    videoUrl: "https://www.youtube.com/watch?v=RXuNib5ZuuE",
    featured: false,
  },
  {
    slug: "ernie-and-cerbie",
    title: "Ernie and Cerbie",
    category: "Episodic",
    year: 2023,
    role: "Director of Photography",
    videoUrl: "https://www.youtube.com/watch?v=xdoKU1NYnsw",
    featured: false,
  },
  {
    slug: "midwestern-methamphetamine-fairytale",
    title: "A Midwestern Methamphetamine Fairytale",
    category: "Feature",
    year: 2023,
    role: "Director of Photography",
    videoUrl: "https://www.youtube.com/watch?v=MYB903_LPns",
    featured: false,
  },
  {
    slug: "marnys-gift",
    title: "Marny's Gift",
    category: "Feature",
    year: 2023,
    role: "Director of Photography",
    videoUrl: "https://www.youtube.com/watch?v=qZ3oGqjFPog",
    featured: false,
  },
];

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured !== false);

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
