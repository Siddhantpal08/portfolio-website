export interface Project {
  id: string
  title: string
  description: string
  category: string
  icon: string
  tags: string[]
  image?: string
}

export const CATEGORIES = [
  'all',
  'video-editing',
  'coding',
  'vo',
  '3d-animation',
  'after-effects'
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Product Showcase Video',
    description: 'Dynamic promotional video with cinematic transitions and effects.',
    category: 'video-editing',
    icon: '🎬',
    tags: ['Premiere Pro', 'Motion Graphics', '4K'],
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Full-stack web application with real-time inventory management.',
    category: 'coding',
    icon: '💻',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    id: '3',
    title: 'Corporate Voiceovers',
    description: 'Professional voice recordings for corporate training materials.',
    category: 'vo',
    icon: '🎙️',
    tags: ['English', 'Professional', 'Studio'],
  },
  {
    id: '4',
    title: '3D Character Animation',
    description: 'Animated character for web and app interface demonstrations.',
    category: '3d-animation',
    icon: '🎨',
    tags: ['Blender', 'Cinema 4D', 'Character'],
  },
  {
    id: '5',
    title: 'Title Sequence',
    description: 'Animated title sequence with particle effects and typography.',
    category: 'after-effects',
    icon: '✨',
    tags: ['After Effects', 'Motion', 'Titles'],
  },
  {
    id: '6',
    title: 'Travel Vlog Edit',
    description: 'Cinematic travel montage with color grading and sound design.',
    category: 'video-editing',
    icon: '🌍',
    tags: ['DaVinci', 'Color Grading', 'Sound'],
  },
  {
    id: '7',
    title: 'AI-Powered Dashboard',
    description: 'Analytics dashboard with AI-driven insights and real-time data.',
    category: 'coding',
    icon: '📊',
    tags: ['React', 'AI SDK', 'Dashboard'],
  },
  {
    id: '8',
    title: 'Podcast Intro Voice',
    description: 'Engaging podcast introductions and sponsor reads.',
    category: 'vo',
    icon: '🎧',
    tags: ['Podcast', 'Commercial', 'Engaging'],
  },
  {
    id: '9',
    title: 'Product 3D Model',
    description: 'Detailed 3D product model for e-commerce visualization.',
    category: '3d-animation',
    icon: '🛍️',
    tags: ['Modeling', 'Rendering', 'Product'],
  },
]
