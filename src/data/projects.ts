import type { ImageMetadata } from 'astro';
import chronoKanbanImage from '../assets/photos/project-chronokanban.jpg';

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: ImageMetadata;
  liveUrl?: string;
  repoUrl?: string;
  status: 'live' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  {
    slug: 'chronokanban',
    title: 'ChronoKanban',
    description:
      'A local-first Kanban board with per-task time tracking and dashboards. Runs entirely in the browser — no backend, no login. Data is stored in IndexedDB and can be exported/imported as JSON for backup.',
    tags: ['React', 'TypeScript', 'IndexedDB', 'PWA'],
    image: chronoKanbanImage,
    liveUrl: 'https://hcamalan.github.io/chronokanban/',
    repoUrl: 'https://github.com/hcamalan/chronokanban',
    status: 'live',
  },
];
