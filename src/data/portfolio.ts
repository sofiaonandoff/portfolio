import type { Project, ProjectChannel } from '../types'

export const site = {
  brand: 'SOFIAONANDOFF',
  fullName: 'Hyesoo Oh',
  role: 'Designer & Researcher',
  intro: [
    'Specialized in Architectural Design and Spatial Design',
    'Developing AI-driven Spatial Design Automation',
    'Interested in 3D Spatial Interaction and Human-Computer Interaction (HCI)',
  ],
  introTitle: 'Bridging the digital and physical worlds.',
  introSubtitle:
    'I explore how digital systems can enhance and transform physical environments.',
  email: 'hyesoooh1@gmail.com',
  location: 'Seoul, South Korea',
  social: {
    instagram: 'https://www.instagram.com/hyesoo.oh.167',
    github: 'https://github.com/sofiaonandoff',
    linkedin: 'https://www.linkedin.com/in/sofiaonandoff/',
  },
  contact: {
    headline: 'Let’s turn ideas on, and bring them offline.',
    paragraphs: [
      'SOFIAONANDOFF explores the point where digital thinking meets physical experience.',
      'From service planning and research to architecture, interior, and spatial design, I create projects that connect how people think, move, feel, and interact.',
      'If your idea needs a clearer structure, a more thoughtful user journey, or a space that speaks with purpose, let’s explore what it can become.',
    ],
    needsTitle: 'IF YOU NEED',
    needs: [
      'Architecture & Interior Design Projects',
      'Service Planning',
      'Brand Experience Strategy',
      'Human-Computer Interaction (HCI) Research',
      'UX & 3D Vision Research',
      'Portfolio / Collaboration Inquiries',
      'Or any thoughtful idea that connects people, space, and experience',
    ],
    closing: 'Let’s talk.',
  },
  education: [
    {
      id: 'skku',
      period: '2013. 3 - 2019. 2',
      location: 'Seoul / Suwon, Korea',
      institution: 'Sungkyunkwan University (성균관대학교)',
      lines: [
        'Bachelor of Architecture (건축학사, 5년제)',
        'Bachelor of Psychology (심리학사, 복수전공)',
      ],
    },
    {
      id: 'luzern',
      period: '2017. 9 - 2018. 2',
      location: 'Lucerne, Switzerland',
      institution: 'Hochschule Luzern',
      lines: [],
    },
    {
      id: 'cbsh',
      period: '2011. 3 - 2013. 2',
      location: 'Cheongju, Korea',
      institution: 'Chungbuk Science High School (충북 과학고등학교)',
      lines: [],
    },
  ],
  experience: [
    {
      id: 'officementary',
      period: '2024. 3 – Present',
      organization: 'Officementary',
      lines: [
        'Leading the planning and development of IT services for office space layout and optimization',
        'Developing a 3D-based spatial design automation system (Python, Rhino, Grasshopper)',
        'Applying UX research to spatial logic modeling and building a web-based consultation interface (Figma, Javascript-React)',
        'Contributing to office interior design projects (e.g., Hyundai Motor Alabama Office, DuPont Seoul Office)',
      ],
    },
    {
      id: 'wgnb',
      period: '2022. 3 - 2023. 4',
      organization: 'WGNB',
      lines: [
        'Participated in boutique accommodation design projects (e.g., 지평집 2)',
        'Conducted zoning and building code analysis; managed permitting and approval procedures',
        'Contributed to UX-oriented spatial branding and early-phase concept development',
      ],
    },
    {
      id: 'seoro',
      period: '2020. 12 - 2022. 3',
      organization: 'Seoro Architects',
      lines: [
        'Participated in commercial and office design projects (e.g., SK Chemicals Headquarters, Noudit Seoul Forest)',
        'Generated BIM models and spatial simulations (Rhino, Grasshopper, Revit)',
        'Led and won a design competition project (e.g., KC Headquarters)',
      ],
    },
    {
      id: 'joho',
      period: '2019. 6 - 2020. 8',
      organization: 'JOHO Architecture',
      lines: [
        'Participated in various architectural projects including commercial, office, exhibition, and clubhouse spaces (e.g., 설해원)',
        'Led the design of a luxury residential and golf lodging facility (e.g., 설해별담)',
        'Executed parametric and computational design (Rhino, Grasshopper)',
        'Modeled the Nine Bridge Pergola pavilion and produced 3D-printed mockups for an international exhibition in Hungary (3D printing, Rhino)',
      ],
    },
  ],
  skills: [
    {
      label: 'Design Tools',
      value:
        'Rhino, Grasshopper, SketchUp, Revit, AutoCAD, Adobe CC, Figma, Unreal Engine',
    },
    {
      label: 'Programming',
      value: 'Python, JavaScript (React), C++ (basic)',
    },
    {
      label: 'Others',
      value:
        'Architectural/Spatial Design, UX/UI Design, Spatial Logic Modeling, Service Planning, Project Managing',
    },
    {
      label: 'Languages',
      value: 'Korean (Native), English (Good – OPIC IH/TEPS Grade 2)',
    },
  ],
}

export const projectChannels = {
  off: {
    channel: 'off' as const,
    path: '/off-projects',
    title: 'OFF PROJECTS',
    subtitle: 'Architecture, Interior, Spatial Experience',
    description:
      'Built-environment work exploring form, material, and how people inhabit space—from architecture and interiors to immersive spatial experiences.',
  },
  on: {
    channel: 'on' as const,
    path: '/on-projects',
    title: 'ON PROJECTS',
    subtitle: 'Service Planning, Research, Strategy',
    description:
      'Research-led and strategic work connecting people, services, and systems—spanning planning, inquiry, and frameworks for complex design challenges.',
  },
} satisfies Record<
  ProjectChannel,
  {
    channel: ProjectChannel
    path: string
    title: string
    subtitle: string
    description: string
  }
>

export const projects: Project[] = [
  {
    id: 'pavilion-structure',
    channel: 'off',
    title: 'Pavilion Structure',
    category: 'Architecture',
    year: '2025',
    coverImage:
      'https://images.unsplash.com/photo-1487956382158-bb926065304a?w=1200&q=80',
    summary: 'Lightweight pavilion exploring structure and openness.',
    description:
      'An architectural study in timber and membrane, balancing shelter with transparency. The design investigates circulation, sight lines, and seasonal use in a public courtyard setting.',
    images: [
      'https://images.unsplash.com/photo-1487956382158-bb926065304a?w=1600&q=80',
      'https://images.unsplash.com/photo-1511818966892-7c671c93f4b2?w=1600&q=80',
    ],
    tags: ['Architecture', 'Structure', 'Public Space'],
  },
  {
    id: 'atelier-interior',
    channel: 'off',
    title: 'Atelier Interior',
    category: 'Interior',
    year: '2024',
    coverImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    summary: 'Workspace interior with flexible zones and natural light.',
    description:
      'Interior concept for a small creative studio: modular partitions, acoustic zoning, and a material palette that shifts from work to rest within one open floor plate.',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80',
    ],
    tags: ['Interior', 'Workspace', 'Lighting'],
  },
  {
    id: 'immersive-passage',
    channel: 'off',
    title: 'Immersive Passage',
    category: 'Spatial Experience',
    year: '2024',
    coverImage:
      'https://images.unsplash.com/photo-1493863647120-7a672bfda960?w=1200&q=80',
    summary: 'Sequential spatial narrative through light and scale.',
    description:
      'A spatial experience installation guiding visitors through compression and release. Light, sound, and proportion shape perception and pace along a curated path.',
    images: [
      'https://images.unsplash.com/photo-1493863647120-7a672bfda960?w=1600&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80',
    ],
    tags: ['Spatial Experience', 'Installation', 'Narrative'],
  },
  {
    id: 'service-blueprint',
    channel: 'on',
    title: 'Service Blueprint',
    category: 'Service Planning',
    year: '2025',
    coverImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    summary: 'End-to-end service journey for a spatial design platform.',
    description:
      'Service planning mapping touchpoints across discovery, collaboration, and delivery. Aligns user needs with backstage operations and digital touchpoints.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&q=80',
    ],
    tags: ['Service Design', 'Journey Map', 'Planning'],
  },
  {
    id: 'spatial-hci-study',
    channel: 'on',
    title: 'Spatial HCI Study',
    category: 'Research',
    year: '2024',
    coverImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
    summary: 'Research on 3D interaction patterns in design tools.',
    description:
      'Qualitative and quantitative study of how designers navigate 3D space in digital environments. Findings inform interaction models for spatial design automation tools.',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80',
      'https://images.unsplash.com/photo-1517694712202-8dd999c4d024?w=1600&q=80',
    ],
    tags: ['HCI', 'Research', '3D Interaction'],
  },
  {
    id: 'automation-strategy',
    channel: 'on',
    title: 'Automation Strategy',
    category: 'Strategy',
    year: '2023',
    coverImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    summary: 'Strategic roadmap for AI-driven spatial design workflows.',
    description:
      'Strategy framing how AI-assisted tools integrate into architectural workflows—defining capabilities, guardrails, and collaboration between designers and automation.',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80',
    ],
    tags: ['Strategy', 'AI', 'Spatial Design'],
  },
]

export function getProjectsByChannel(channel: ProjectChannel): Project[] {
  return projects.filter((p) => p.channel === channel)
}

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getChannelPath(channel: ProjectChannel): string {
  return projectChannels[channel].path
}
