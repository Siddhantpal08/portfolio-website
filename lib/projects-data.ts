// lib/projects-data.ts
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: string
  icon: string
  tags: string[]
  image?: string
  images?: string[]
  link?: string      // quick external link (optional)
  repoLink?: string  // GitHub / source
  demoLink?: string  // live demo
  video?: string     // YouTube / Vimeo url (optional)
}

export const CATEGORIES = [
  'all',
  'coding',
  'video-editing',
  'guides',
  'ai',
  '3d-animation',
]

export const PROJECTS: Project[] = [
  {
    id: 'mytube',
    title: 'MyTube – YouTube Clone',
    description:
      'A fast, clean YouTube-like video platform with search, categories, and responsive UI.',
    longDescription:
      'Full-stack MyTube clone built to learn video streaming UI patterns, search, and API integration. Includes category filters, responsive layout and basic authentication mock.',
    category: 'coding',
    icon: '📺',
    tags: ['React', 'API', 'Responsive'],
    image: '/projects/mytube.png',
    images: ['/projects/mytube-1.png', '/projects/mytube-2.png'],
    repoLink: 'https://github.com/Siddhantpal08/MyTube',
    demoLink: 'https://my-tube-sand.vercel.app/',
    video: 'https://www.youtube.com/watch?v=VIDEO_ID',
  },
  {
    id: 'jarvis-v1',
    title: 'Jarvis V1.0 Desktop Assistant',
    description:
      'AI-powered PyQt5 desktop assistant with voice commands and status UI.',
    longDescription:
      'Jarvis V1.0 is a desktop assistant built with Python and PyQt5 featuring voice commands, status panels and modular action handlers. Good example of a desktop GUI + voice integration project.',
    category: 'coding',
    icon: '🤖',
    tags: ['Python', 'PyQt5', 'Voice'],
    image: '/projects/jarvis.png',
    repoLink: 'https://github.com/Siddhantpal08/MyJarvis-Releases',
  },
  {
    id: 'video-edit-guide',
    title: 'Video Editing Guide',
    description:
      'Beginner-friendly video editing tutorial with practical workflows.',
    longDescription:
      'A step-by-step guide to editing (Premiere/DaVinci) focused on workflow, color grading and export settings. Includes example project files and templates.',
    category: 'guides',
    icon: '🎬',
    tags: ['Guide', 'Premiere', 'Workflow'],
    repoLink: 'https://github.com/Siddhantpal08/Intermediate/tree/main/docs/Video-Editing-Guide',
    demoLink: 'https://siddhantpal08.github.io/Intermediate/Video-Editing-Guide/',
    image: '/projects/video.png',
  },
  {
    id: 'resp-video-portfolio',
    title: 'Responsive Video Guide Portfolio',
    description:
      'Portfolio site showing editing projects and case studies.',
    longDescription:
      'A responsive portfolio showcasing video editing projects with embedded players, case notes and downloadable assets.',
    category: 'guides',
    icon: '🌐',
    tags: ['HTML', 'CSS', 'Responsive'],
    demoLink: 'https://siddhantpal08.github.io/Intermediate/Video-Editing-Guide/responsive%20portfolio%20website/index.html',
    repoLink: 'https://github.com/Siddhantpal08/3d-portfolio',
    image: '/projects/video-resume.png',
  },
  {
    id: 'contact-form',
    title: 'Contact Form System',
    description:
      'Contact form with validation and backend email handling.',
    longDescription:
      'A robust contact form example with frontend validation and serverless/email integration (Node/Serverless functions).',
    category: 'coding',
    icon: '📩',
    tags: ['Forms', 'Validation', 'Node'],
    repoLink: 'https://github.com/Siddhantpal08/Intermediate/tree/main/docs/Video-Editing-Guide/contact%20form',
    demoLink: 'https://siddhantpal08.github.io/Intermediate/Video-Editing-Guide/contact%20form/cf.html',
  },
  {
    id: 'code4tech',
    title: 'Code-4-Tech Hackathon Project',
    description:
      'Hackathon project showing rapid prototyping and teamwork.',
    longDescription:
      'Code-4-Tech entry — features quick MVP, API integration and a simple deploy. Good demo of hackathon code quality and collaboration.',
    category: 'coding',
    icon: '🏆',
    tags: ['Hackathon', 'MVP'],
    repoLink: 'https://github.com/Siddhantpal08/innomatics-resume-analyzer',
    demoLink: 'https://innomatics-resume-analyzer.streamlit.app/',
    image: '/projects/resume.png',
  },
  {
    id: 'notepadx',
    title: 'NotepadX – Offline Notes App',
    description:
      'Tauri + React + SQLite cross-platform offline notes app.',
    longDescription:
      'NotepadX is a lightweight offline notes app built with Tauri and React — local storage with SQLite, dark mode and syncing-ready architecture.',
    category: 'coding',
    icon: '📝',
    tags: ['Tauri', 'React', 'SQLite'],
    repoLink: 'https://github.com/Siddhantpal08/Advanced/tree/main/notepadx',
    image: '/projects/todo.jpg',
  },
  {
    id: '3d-portfolio',
    title: '3D Portfolio (Blender)',
    description:
      '3D animated portfolio scene created in Blender.',
    longDescription:
      'A portfolio built with Blender exports and web-friendly renders showing modelling, lighting and animation techniques.',
    category: '3d-animation',
    icon: '🎨',
    tags: ['Blender', '3D', 'Animation'],
    repoLink: '',
    video: 'https://www.youtube.com/watch?v=3D_VIDEO_ID',
    images: ['/projects/3d-1.png'],
  },
  {
    id: 'internship-tasks',
    title: 'Internship Task Projects',
    description:
      'Real-world internship tasks showcasing applied development work.',
    longDescription:
      'A collection of small projects and tasks completed during internships: dashboards, bug fixes, feature builds and reports.',
    category: 'coding',
    icon: '💼',
    tags: ['Internship', 'Web Dev'],
    repoLink: 'https://github.com/yourname/internship-tasks',
  },
  {
    id: 'laptop-recommender',
    title: 'Laptop Recommendation System',
    description:
      'Helper to recommend laptops based on budget & needs.',
    longDescription:
      'Small JS app to filter and recommend laptop models by price, workload and portability.',
    category: 'coding',
    icon: '💻',
    tags: ['JS', 'Filtering'],
    demoLink: 'https://laptop-recommender.example.com',
    repoLink: 'https://github.com/yourname/laptop-recommender',
  },
  {
    id: 'megablog',
    title: 'MegaBlog Platform',
    description:
      'A full blog system with posts, comments and admin panel.',
    longDescription:
      'MegaBlog is a small fullstack blog with markdown editor, tag system and admin UI — good full-stack demo.',
    category: 'coding',
    icon: '📰',
    tags: ['Fullstack', 'Blog'],
    repoLink: 'https://github.com/yourname/megablog',
    demoLink: 'https://megablog.example.com',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Website',
    description:
      'Basic functional e-commerce site with cart & product listing.',
    longDescription:
      'E-commerce demo with product listing, cart state and checkout mock. Shows state management skills.',
    category: 'coding',
    icon: '🛒',
    tags: ['React', 'Ecommerce'],
    repoLink: 'https://github.com/yourname/ecommerce-demo',
    demoLink: 'https://store.example.com',
  },
  {
    id: 'utility-tools',
    title: 'Utility Tools Pack',
    description:
      'QR generator, password generator, currency converter, calculator.',
    longDescription:
      'A pack of small utility tools useful for everyday tasks. Good for demonstrating small, useful JS components.',
    category: 'coding',
    icon: '🧰',
    tags: ['Utilities', 'JavaScript'],
    demoLink: 'https://tools.example.com',
    repoLink: 'https://github.com/yourname/utility-tools',
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis Projects',
    description:
      'Cleaning, visualization, and insights using Python.',
    longDescription:
      'Several data analysis notebooks and reports showing data cleaning, visualization and actionable insights.',
    category: 'coding',
    icon: '📊',
    tags: ['Python', 'Pandas', 'Data Viz'],
    repoLink: 'https://github.com/yourname/data-analysis',
  },
]
