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

const rawProjects: Project[] = [
  {
    id: 'dupont-asem-tower-office',
    channel: 'off',
    title: 'DuPont Asem Tower Office',
    category: 'Interior',
    year: '2025',
    location: 'Seoul, Korea',
    coverImage:
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 00 main.jpg',
    summary:
      'Corporate office interior for a global science and innovation company in central Seoul.',
    description:
      `Following the completion of Madang, a Korean-inspired work lounge in DuPont’s Yeoksam office in 2024, the company expanded to ASEM Tower in Samseong-dong with a new 180 PY workplace. Designed as both a flexible lounge and operational office, the space continues DuPont’s exploration of Korean architectural identity. A long narrow entry corridor and a curved exterior window wall guide circulation, culminating in the warmly lit Sarangchae lounge inspired by traditional Korean guest quarters. A central column is integrated with a custom bar-height table and planting, dispersing visual weight and inviting visitors into the lounge.

The curved façade is balanced by a long interior wall separating the Sarangchae and Anchae, the inner workspace for focused tasks. The lounge features a Hanok-inspired ceiling motif, free-form table arrangements, booth seating, and a 130-inch LED screen for events. Deep indigo blue Jjokbit paired with warm orange accents harmonizes with views of the Han River and Seoul skyline. The result is a workplace that is culturally rooted, spatially refined, and emotionally resonant, building on Yeoksam’s identity while asserting its own architectural character.`,
    images: [
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 00 main.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 01.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 02.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 03.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 04.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 05.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 06.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 07.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 08.jpg',
      '/images/off-projects/2025 DuPont Asem Tower Office, Seoul, Korea - Interior/dupont 09.jpg',
    ],
    tags: ['Interior', 'Corporate Office', 'Workplace'],
  },
  {
    id: 'hyundai-motor-alabama-office',
    channel: 'off',
    title: 'Hyundai Motor Manufacturing Alabama Office',
    category: 'Interior',
    year: '2025',
    location: 'Alabama, USA',
    coverImage:
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 00 main.png',
    summary:
      'An interior office design project for Hyundai Motor Manufacturing Alabama, creating a connected workplace that reflects the flow, precision, and collaborative culture of automotive production.',
    description:
      `This project proposes a new office interior for Hyundai Motor Manufacturing Alabama, designed to strengthen the connection between office employees and the broader manufacturing environment.

The design concept focuses on translating the rhythm and structure of automotive production into a spatial experience. By reflecting the sequential flow of stamping, welding, painting, and general assembly, the office layout allows employees to feel more closely connected to the vehicle manufacturing process.

The space is planned to support both focused individual work and cross-departmental collaboration, with open workstations, meeting rooms, and shared areas arranged to encourage communication between teams.

Rather than treating the office as a separate administrative zone, the design positions it as an integrated workplace that represents Hyundai’s manufacturing identity, technical precision, and sense of community.`,
    images: [
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 00 main.png',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 01.png',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 02.png',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 03 Diagram.jpg',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 04 Diagram.jpg',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 05.png',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 06.png',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 07-1 Analysis.png',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 07-2 Diagram.jpg',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 08.png',
      '/images/off-projects/2025 Hyundai Motor Manufacturing Alabama Office, Alabama, USA - Interior/HMMA 09.png',
    ],
    tags: ['Interior', 'Corporate Office', 'Manufacturing'],
  },
  {
    id: 'seolhaeone-seolhaebyuldam',
    channel: 'off',
    title: 'Seolhaeone Seolhaebyuldam',
    category: 'Architecture & Interior',
    year: '2020',
    location: 'Yangyang, Korea',
    coverImage:
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 00 main.jpg',
    summary:
      'Luxury lodging within a coastal resort, integrating architecture and interior as one experience.',
    description:
      'Architectural and interior design for Seolhaebyuldam—a premium lodging unit at Seolhaeone Resort in Yangyang. The project integrates refined residential scale with resort amenities, emphasizing views, privacy, and a cohesive material language across building envelope and interior finishes.',
    images: [
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 00 main.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 01.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 02.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 03 plan.jpeg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 04.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 05.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 06.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 07.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 08.jpg',
      '/images/off-projects/2020 Seolhaeone Seolhaebyuldam, Yangyang, Korea- Architecture, Interior/Seolhaebyuldam 09.jpg',
    ],
    tags: ['Architecture', 'Interior', 'Hospitality', 'Resort'],
  },
  {
    id: 'stardoc-office',
    channel: 'off',
    title: 'Stardoc Office',
    category: 'Interior',
    year: '2026',
    location: 'Seoul, Korea',
    coverImage:
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 00 main.jpg',
    summary:
      'A compact workplace for a healthcare marketing startup, designed to balance operational efficiency, brand identity, and a welcoming first impression within a highly optimized footprint.',
    description:
      `Interior design for Stardoc, a healthcare marketing startup, creating an efficient and brand-focused workplace within a compact footprint. The space includes a welcoming lounge, flexible meeting and content-production area, meeting room, focus room, and open workstations, carefully planned to maximize functionality and seating capacity.

A clean palette of white and light gray establishes a calm and professional atmosphere, while the brand’s signature red is introduced as a distinctive accent throughout the office. Particular attention was given to the visitor experience, with the entrance lounge designed to create a comfortable and inviting first impression. The result is a workplace that balances brand expression, collaboration, and everyday efficiency.`,
    images: [
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 00 main.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 01.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 02.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 03.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 04.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 05.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 06.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 07.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 08.jpg',
      '/images/off-projects/2026 Stardoc Office, Seoul, Korea - Interior/Stardoc 09.jpg',
    ],
    tags: ['Interior', 'Healthcare', 'Workplace'],
  },
  {
    id: 'sk-chemical-headquarter',
    channel: 'off',
    title: 'SK Chemical Headquarter',
    category: 'Interior',
    year: '2021',
    location: 'Pangyo, Korea',
    coverImage:
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 00 main.jpg',
    summary:
      'Workplace transformation for SK Chemical Headquarters, focused on fostering a more dynamic, people-centered work environment. Through a master-planning approach, the project reimagined the workplace to support diverse work styles, encourage interaction, and enhance employee well-being across the organization.',
    description:
      `Interior workplace renovation for SK Chemical Headquarters in Pangyo. The project aimed to revitalize organizational culture by creating a flexible and people-centered environment where individuals can work autonomously and perform at their best.

A master-plan strategy leveraged the existing atrium as the social and visual heart of the building, opening connections across floors and introducing a sense of energy throughout the workplace. The concept of the “Chemical Trail” established a continuous circulation network that links key destinations and encourages spontaneous interaction, while a series of green amenities support communication, collaboration, and employee well-being.

The workplace was restructured around a spectrum of work modes—including Focus, Collaborate, and Social—providing a variety of settings that accommodate both individual and team-based activities. Moving beyond a conventional office layout, the design delivers a more agile and engaging work environment that supports concentration, collaboration, and meaningful connections across the organization.`,
    images: [
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 00 main.jpg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 01.jpeg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 02 diagram.jpg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 03 diagram.jpg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 04.jpeg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 05.jpeg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 06.jpg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 07.jpg',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 08.webp',
      '/images/off-projects/2021 SK Chemical Headquarter, Pangyo, Korea - Interior/SK Chemical 09.webp',
    ],
    tags: ['Interior', 'Corporate Office', 'Headquarters'],
  },
  {
    id: 'qnity-seoul-office',
    channel: 'off',
    title: 'Qnity Seoul Office',
    category: 'Interior',
    year: '2024',
    location: 'Seoul, Korea',
    coverImage:
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 00 main.jpg',
    summary:
      'Agile workplace design for Qnity Korea, transforming a traditional office into a flexible and collaborative environment.',
    description:
      `The agile office at Qnity Korea, part of a global initiative, was created by transforming a rigid workspace and cramped reception area into an open, flexible environment that supports various work and meeting formats. A large LED screen allows for town halls and virtual meetings, while focused workspaces and meeting rooms are arranged deeper within the office for private tasks. Movable furniture provides flexibility for different needs.

Incorporating traditional Korean elements was key, as the office frequently hosts international visitors and regional factory employees. The design reflects a Korean courtyard concept (Madang), with traditional colors, eco-friendly materials, and plants to promote well-being. Sound-absorbing panels help manage noise in the open areas, and the ceiling was opened where possible to enhance the sense of space. This agile office combines functionality and flexibility while maintaining both global standards and a local touch.`,
    images: [
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 00 main.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 01.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 02.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 03.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 04.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 05.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 06.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 07.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 08.jpg',
      '/images/off-projects/2024 Qnity Seoul Office, Seoul, Korea - Interior/dupont 09.jpg',
    ],
    tags: ['Interior', 'Technology', 'Workplace'],
  },
  {
    id: 'sinjeonri-stay-jipyungzip-2',
    channel: 'off',
    title: 'Sinjeonri Stay (Jipyungzip 2)',
    category: 'Architecture & Interior',
    year: '2023',
    location: 'Goheung, Korea',
    coverImage:
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 00 main.png',
    summary:
      'Boutique accommodation combining local character with contemporary hospitality design.',
    description:
      'Architecture and interior design for Sinjeonri Stay (Jipyungzip 2) in Goheung—a boutique stay project emphasizing intimate scale and spatial storytelling. Work included zoning analysis, permitting support, and UX-oriented spatial branding from concept through documentation.',
    images: [
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 00 main.png',
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 01.png',
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 02.png',
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 03.png',
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 04 Diagram.jpg',
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 05 Diagram.jpg',
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 06.png',
      '/images/off-projects/2023 Sinjeonri Stay (Jipyungzip 2), Goheung, Korea - Architecture, Interior/Sinjeonri Stay 07.png',
    ],
    tags: ['Architecture', 'Interior', 'Hospitality', 'Boutique Stay'],
  },
  {
    id: 'rio-tinto-seoul-office',
    channel: 'off',
    title: 'Rio Tinto Seoul Office (Design)',
    category: 'Interior',
    year: '2024',
    location: 'Seoul, Korea',
    coverImage:
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 00 main.png',
    summary:
      'Interior design for Rio Tinto’s Seoul office, inspired by the concept of TERRA',
    description:
      `Designed for Rio Tinto’s Seoul office, the project draws inspiration from TERRA, a concept rooted in the company’s relationship with the earth and the extraction of natural resources. The workplace incorporates warm color palettes and natural materials inspired by soil, stone, and minerals, creating an atmosphere of stability, authenticity, and connection to nature.

The design emphasizes materiality through a rich combination of stone, wood, and metal finishes, expressing the resources that define Rio Tinto’s business while enhancing both visual and tactile experiences. Layering becomes a key spatial strategy, with architectural elements, materials, and colors carefully composed to create depth and dimension throughout the workplace.

By translating the complexity and diversity of Rio Tinto’s global operations into a cohesive spatial language, the office delivers a refined work environment that balances corporate identity, material richness, and contemporary workplace functionality.`,
    images: [
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 00 main.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 01 diagram.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 02.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 03.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 04 drawing.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 05.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 06.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 07.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 08.png',
      '/images/off-projects/2024 Rio Tinto Seoul Office(Design), Seoul, Korea - Interior/Rio Tinto 09.png',
    ],
    tags: ['Interior', 'Corporate Office', 'Design Development'],
  },
  {
    id: 'ministry-planning-budget-sejong',
    channel: 'off',
    title: 'Ministry of Planning and Budget Office Renovation',
    category: 'Interior',
    year: '2026',
    location: 'Government Complex Sejong, Korea',
    coverImage:
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 00 main.png',
    summary:
      'Office renovation for the Ministry of Planning and Budget in Sejong, reimagining the government workplace as a spatial journey of Strategy, Collaboration, and Vision.',
    description:
      `The renovation of the Ministry of Planning and Budget office was guided by the vision of creating a workplace where the philosophy of planning is embedded within the built environment. Organized around the themes of Strategy, Collaboration, and Vision, the project transforms the office into a dynamic ecosystem that supports communication, innovation, and knowledge sharing.

The 4th floor serves as the symbolic gateway of the ministry through the MPB Hall, a representative space that communicates the institution’s identity and strategic direction. On the 5th floor, the MPB Synergy Agora functions as a collaborative platform where ministries, departments, and individuals can connect, exchange ideas, and work together. Additional programs, including a Smart Work Center with childcare support and departmental collaboration zones, further encourage flexibility and interaction.

The 6th floor is dedicated to reflection, learning, and renewal. A Digital Book Café provides an environment that supports focused thinking, continuous learning, and employee well-being beyond everyday work tasks. Together, these interventions create a cohesive workplace experience that reflects the ministry’s mission while promoting collaboration, innovation, and organizational culture.`,
    images: [
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 00 main.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 01.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 02.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 03.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 04.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 05.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 06.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 07.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 08.png',
      '/images/off-projects/2026 Ministry of Planning and Budget Office Renovation, Government Complex Sejong, Korea - Interior/Government Complex 09.png',
    ],
    tags: ['Interior', 'Government', 'Renovation'],
  },
  {
    id: 'noudit-seoul-forest',
    channel: 'off',
    title: 'NOUDIT Seoul Forest',
    category: 'Architecture',
    year: '2021',
    location: 'Seoul, Korea',
    coverImage:
      '/images/off-projects/2021 NOUDIT Seoul Forest, Seoul, Korea- Architecture/NOUDIT 01.jpg',
    summary:
      'Architectural design for NOUDIT Seoul Forest, a mixed-use creative workplace in Seongsu-dong.',
    description:
      `NOUDIT Seoul Forest was conceived as a contemporary workplace that reflects the unique character of Seongsu-dong, where industrial heritage and emerging creative industries coexist. Located adjacent to the elevated railway near Ttukseom Station, the project was designed to engage both the pedestrian scale of the neighborhood and the broader urban perspective from passing trains.

The façade is organized into three distinct volumes, each expressing different programs within the building while creating a recognizable architectural identity. At the lower levels, brick was selected as the primary material, drawing from the language of Seongsu’s existing industrial buildings and reinforcing a human-scaled relationship with the street. The composition of entrances and massing allows the building to be naturally perceived and experienced by pedestrians.

The middle levels incorporate a multifunctional parking structure designed to accommodate events and social gatherings, transforming a typically utilitarian program into an active urban feature. Highly visible from the elevated railway, this portion of the building was intended to capture attention and spark curiosity among visitors and commuters.

Upper floors are dedicated to creative office environments, providing flexible workspaces and expansive terraces that encourage interaction between indoor and outdoor environments. Together, the building’s layered programs, material expression, and urban presence create a dynamic destination that embodies the diversity and creative energy of contemporary Seongsu-dong.`,
    images: [
      '/images/off-projects/2021 NOUDIT Seoul Forest, Seoul, Korea- Architecture/NOUDIT 01.jpg',
      '/images/off-projects/2021 NOUDIT Seoul Forest, Seoul, Korea- Architecture/NOUDIT 03.jpg',
    ],
    tags: ['Architecture', 'Commercial', 'Urban'],
  },
  {
    id: 'seolhaeone-clubhouse-renovation',
    channel: 'off',
    title: 'Seolhaeone Clubhouse Renovation',
    category: 'Architecture',
    year: '2020',
    location: 'Yangyang, Korea',
    coverImage:
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 00 main.jpg',
    summary:
      'Clubhouse renovation for a coastal golf and resort community.',
    description:
      'Architectural renovation of the Seolhaeone Clubhouse in Yangyang, refreshing hospitality and member amenities while respecting the existing resort fabric. Structural and spatial interventions improve circulation, program flexibility, and connection to the surrounding landscape.',
    images: [
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 00 main.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 01.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 02.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 03 diagram mass development.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 04 section diagram.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 05.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 06.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 07.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 08.jpg',
      '/images/off-projects/2020 Seolhaeone Clubhouse Renovation, Yangyang, Korea- Architecture/Seolhaeone 09.jpg',
    ],
    tags: ['Architecture', 'Renovation', 'Resort', 'Hospitality'],
  },
  {
    id: 'nine-bridges-pergola-exhibition',
    channel: 'off',
    title: 'Nine Bridges Pergola Exhibition',
    category: 'Exhibition',
    year: '2019',
    location: 'Hungary',
    coverImage:
      '/images/off-projects/2019 Nine Bridges Pergola Exhibition, Hungary- Exhibition/Nine Bridges Pergola 00 main.jpg',
    summary:
      'Parametric pavilion exhibited internationally with 3D-printed mockups.',
    description:
      `The Nine Bridges Pergola was conceived as a contemporary interpretation of a site shaped by the presence of a 600-year-old Chinese hackberry tree, once regarded as a sacred landmark. Drawing inspiration from natural growth patterns and algorithmic forms, the design reorients the site around the memory of the tree, creating an architectural expression rooted in both nature and cultural significance.

At the core of the project is a custom-developed dual-duct system that combines structural performance and environmental control into a single integrated framework. Ventilation ducts are embedded within the primary structural members, while insulated layers between inner and outer shells help regulate temperature and prevent condensation, allowing the pavilion to maintain a comfortable indoor environment throughout seasonal changes.

The organic geometry required an advanced fabrication and assembly process involving double-curved steel structures and hundreds of uniquely shaped glass panels. More than 440 custom glass units and a network of integrated environmental systems were precisely manufactured and assembled across multiple countries, demanding exceptional coordination and engineering accuracy.

The result is a sculptural architectural landmark that seamlessly merges natural inspiration, environmental performance, and digital fabrication technologies, transforming a commemorative site into an immersive spatial experience.`,
    images: [
      '/images/off-projects/2019 Nine Bridges Pergola Exhibition, Hungary- Exhibition/Nine Bridges Pergola 00 main.jpg',
      '/images/off-projects/2019 Nine Bridges Pergola Exhibition, Hungary- Exhibition/Nine Bridges Pergola 01.jpg',
      '/images/off-projects/2019 Nine Bridges Pergola Exhibition, Hungary- Exhibition/Nine Bridges Pergola 02.jpg',
    ],
    tags: ['Exhibition', 'Parametric Design', 'Pavilion', '3D Printing'],
  },
  {
    id: 'kc-headquarter',
    channel: 'off',
    title: 'KC Headquarter',
    category: 'Architecture',
    year: '2022',
    location: 'Seoul, Korea',
    coverImage:
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 00 main.png',
    summary:
      'Competition-winning headquarters architecture in Seoul.',
    description:
      `Led and won the design competition for KC headquarters in Seoul. KC Headquarters was designed as a flexible and future-oriented workplace that supports both organizational growth and employee interaction. Located near Samseong Station, the project responds to the evolving urban context through a modular planning system based on a 4.2m × 4.2m grid, enabling efficient space utilization and future expansion.

The design optimizes office layouts and parking capacity while incorporating open staircases, voids, and shared spaces that encourage communication and spontaneous interaction among employees. A rooftop amenity space further enhances the workplace experience while allowing for potential future growth. The result is a highly adaptable headquarters that balances operational efficiency, flexibility, and a collaborative organizational culture.`,
    images: [
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 00 main.png',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 01 diagram.jpg',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 02 준주거 상향 전.png',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 03 준주거 상향 후.png',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 04 section.jpg',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 05 plan.jpg',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 06.png',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 07.png',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 08 plan.jpg',
      '/images/off-projects/2022 KC Headquarter, Seoul, Korea - Architecture/KC HQ 09.png',
    ],
    tags: ['Architecture', 'Headquarters', 'Competition', 'BIM'],
  },
  {
    id: 'hecto-group-office',
    channel: 'off',
    title: 'Hecto Group Office (Design)',
    category: 'Interior',
    year: '2025',
    location: 'Seoul, Korea',
    coverImage:
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 00 main.png',
    summary:
      'Design-phase office interior for Hecto Group in Seoul.',
    description:
      `The Hecto Group Office was designed around the idea of light as a source of direction, inspiration, and daily energy. Drawing from the brand slogan—"like the sun that brightens the darkness and illuminates everyday life"—the design is guided by three concepts: Solar Orientation, Filtered Sun, and First Sunlight.

Spatial planning is organized through a layered radial geometry, where overlapping circular forms naturally guide movement and create a fluid workplace experience. This circulation strategy is reinforced by a solar-oriented flow, allowing the spatial sequence to unfold as if following the path of light throughout the office.

The workplace program is structured around the concept of Daily Rhythm, supporting different modes of work and recovery throughout the day. Fast Tempo zones, including workstations and focus rooms, enable concentration and deep work. Slow Down areas, such as meeting rooms, quick meeting spaces, and hot desks, facilitate collaboration and smooth transitions between tasks. Pause zones, including lounges and cafés, provide moments of rest and renewal, helping employees recharge before returning to the next phase of their workday.

Through the integration of light-inspired forms, intuitive circulation, and rhythm-based workplace planning, the office creates a balanced environment that supports focus, collaboration, and well-being.`,
    images: [
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 00 main.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 01 Material Board.jpg',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 02.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 03.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 04.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 05 iso.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 06 Diagram.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 07 iso.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 08 Diagram.png',
      '/images/off-projects/2025 Hecto Group Office(Design), Seoul, Korea- Interior/Hecto 09 iso.png',
    ],
    tags: ['Interior', 'Corporate Office', 'Design Development'],
  },
  {
    id: 'multi-unit-house-gwacheon',
    channel: 'off',
    title: 'Multi-unit House',
    category: 'Architecture',
    year: '2020',
    location: 'Gwacheon, Korea',
    coverImage:
      '/images/off-projects/2020 Multi-unit House, Gwacheon, Korea- Architecture/Multi-unit House 00 main.png',
    summary:
      'Multi-unit residential architecture balancing privacy and daylight in Gwacheon.',
    description:
      'Architectural design for a multi-unit house in Gwacheon, optimizing unit layouts, shared circulation, and facade composition within suburban residential regulations. The project balances privacy, daylight, and efficient floor area across multiple dwelling units.',
    images: [
      '/images/off-projects/2020 Multi-unit House, Gwacheon, Korea- Architecture/Multi-unit House 00 main.png',
      '/images/off-projects/2020 Multi-unit House, Gwacheon, Korea- Architecture/Multi-unit House 01.jpg',
      '/images/off-projects/2020 Multi-unit House, Gwacheon, Korea- Architecture/Multi-unit House 02.png',
      '/images/off-projects/2020 Multi-unit House, Gwacheon, Korea- Architecture/Multi-unit House 03.png',
      '/images/off-projects/2020 Multi-unit House, Gwacheon, Korea- Architecture/Multi-unit House 04.jpg',
    ],
    tags: ['Architecture', 'Residential', 'Multi-unit Housing'],
  },
  {
    id: 'service-blueprint',
    channel: 'on',
    title: 'Service Blueprint',
    category: 'Service Planning',
    year: '2025',
    location: 'Seoul, Korea',
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
    location: 'Seoul, Korea',
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
    location: 'Seoul, Korea',
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

const base = import.meta.env.BASE_URL || '/'
const cleanBase = base.endsWith('/') ? base : base + '/'

function fixPath(p: string): string {
  if (p.startsWith('http://') || p.startsWith('https://')) return p
  const cleanPath = p.startsWith('/') ? p.slice(1) : p
  return cleanBase + cleanPath
}

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  coverImage: fixPath(project.coverImage),
  images: project.images.map(fixPath),
}))

export function getProjectsByChannel(channel: ProjectChannel): Project[] {
  return projects.filter((p) => p.channel === channel)
}

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getChannelPath(channel: ProjectChannel): string {
  return projectChannels[channel].path
}
