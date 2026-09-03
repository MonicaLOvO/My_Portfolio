export const portfolio = {
  name: 'Monica Leung',
  title: 'Software Developer',
  tagline:
    'Software Developer specializing in full-stack web development.',

  about: [
    'I’m a Software Development graduate from SAIT with hands-on experience building web applications using the MERN stack and ASP.NET. I have experience with full-stack development, database design, RESTful APIs, authentication systems, and collaborative software projects. I’m passionate about building practical solutions and continuing to grow as a developer.',
  ],

  skills: [
    {
      category: 'Languages',
      items: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js'],
    },
    {
      category: 'Backend',
      items: ['Express.js', 'ASP.NET Core'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL'],
    },
    {
      category: 'Tools',
      items: ['Git & GitHub', 'Docker', 'Azure', 'Postman'],
    },
  ],

  softSkills: [
    'Problem Solving',
    'Teamwork',
    'Adaptability',
    'Time Management',
    'Fast Learner',
  ],

  projects: [
    {
      title: 'Warehouse Management System (Capstone Project)',
      year: '2026',
      type: 'school',
      description:
        'Full-stack warehouse management platform with inventory management, authentication, and role-based access control.',
      highlights: [
        'Developed backend REST APIs for inventory and user management.',
        'Implemented authentication and role-based access control using JWT.',
        'Designed relational database schema with TypeORM.',
        'Built inventory management features including product search, filtering, and pagination.',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Node.js',
        'TypeORM',
        'PostgreSQL',
        'Docker',
        'Azure',
      ],
      githubUrl: '',
      liveUrl: '',
      linkedinUrl:
        'https://www.linkedin.com/feed/update/urn:li:activity:7452780457919782913/',
    },
    {
      title: 'NewLeaf',
      year: '2025',
      type: 'school',
      description:
        'Animal community platform where people share pets, post in a community feed, and list animals for adoption.',
      highlights: [
        'Co-built a full-stack Next.js app with one friend — pet profiles, a community feed, and an adoption request flow.',
        'Implemented Firebase Authentication (email, Google, GitHub) and Firestore for users, pets, posts, likes, and adoption requests.',
        'Built community posts with Cloudinary image uploads, likes, featured pets, and protected routes for signed-in users.',
        'Designed adoption workflow where owners accept or reject requests and ownership transfers in Firestore.',
      ],
      technologies: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Firebase Auth',
        'Cloud Firestore',
        'Cloudinary',
        'Vercel',
      ],
      githubUrl: 'https://github.com/MonicaLeung0/newleaf',
      liveUrl: 'https://newleaf-iota.vercel.app/',
      linkedinUrl: '',
    },
    {
      title: 'Multiplayer Tic-Tac-Toe',
      year: '2024',
      type: 'self',
      description:
        'A two-player online Tic-Tac-Toe game with room codes, game sessions, and real-time player communication.',
      highlights: [
        'Developed a two-player online Tic-Tac-Toe game.',
        'Built the frontend with HTML, CSS, and JavaScript.',
        'Implemented a C# server allowing players to join games using room codes.',
        'Created game session management and player communication features.',
      ],
      technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/MonicaLOvO/TicTacToe',
      liveUrl: '',
      linkedinUrl: '',
    },
    {
      title: 'CEO Simulator',
      year: '2024',
      type: 'self',
      description:
        'A text-based console game where you spend 12 days running a company your father handed you. Every choice shifts money and reputation — at the end, he judges whether you have what it takes to be CEO.',
      highlights: [
        'Built a 12-day game loop with morning, afternoon, and night turns — work events, random outside events, shop visits, or skip.',
        'Implemented company management: hire/fire staff, upgrades, daily turnover, and reputation tied to money outcomes.',
        'Designed weighted random events with time-of-day and location rules, plus instant and multi-day buff/debuff effects.',
        'Used JSON-driven content for events and shop items, with auto-save, 10 named save slots, and a built-in content editor.',
      ],
      technologies: ['C#', '.NET 8', 'Console App', 'Newtonsoft.Json'],
      githubUrl: 'https://github.com/MonicaLOvO/CEO-Sim',
      liveUrl: '',
      linkedinUrl: '',
    },
    {
      title: 'TRPG Platform',
      year: '2025',
      type: 'self',
      description:
        'A Call of Cthulhu–style TRPG backend for character sheets, class templates, and multiplayer game rooms — built in ASP.NET Core and ported to Express / TypeScript with the same domain model.',
      highlights: [
        'Built a backend for online tabletop RPGs: accounts, investigator character sheets (CoC stats), inventory, status effects, and notes.',
        'Implemented game rooms with Player, Game Master, and Observer roles, plus class templates that seed new characters.',
        'Developed the original API with ASP.NET Core, EF Core, MySQL, Swagger, and a controllers + logic-layer architecture.',
        'Ported the core REST surface to TypeScript, Express, and Prisma so the same character and room APIs run on Node.',
      ],
      technologies: [
        'C#',
        '.NET 8',
        'ASP.NET Core',
        'Entity Framework Core',
        'TypeScript',
        'Express',
        'Prisma',
        'MySQL',
      ],
      githubUrl: 'https://github.com/MonicaLOvO/TRPG',
      githubUrlAlt: 'https://github.com/MonicaLOvO/Typescript_TRPG',
      githubAltLabel: 'TypeScript port',
      liveUrl: '',
      linkedinUrl: '',
    },
  ],

  education: [
    {
      school: 'Southern Alberta Institute of Technology (SAIT)',
      degree: 'Diploma in Software Development',
      period: '2024 – 2026',
      details: '',
    },
  ],

  contact: {
    phone: '',
    location: 'Calgary, AB',
    email: 'monica.leung.w@gmail.com',
    github: 'https://github.com/MonicaLovo',
    linkedin: 'https://www.linkedin.com/in/monica-leung-85b899403',
  },
} as const
