export const portfolioConfig = {
  personal: {
    name: "Atoshi",
    title: "Développeur Full Stack",
    description: "Passionné par le développement, je crée des applications web innovantes avec les dernières technologies, des serveurs de jeu sur mesure sur FiveM, Garry's Mod, Roblox et bien d'autres.",
    avatar: "/images/avatar.jpg",
    location: "Paris, France",
    email: "atoshi@protonmail.com",
    discord: "atoshic17"
  },

  navigation: [
    { name: "Accueil", href: "#home" },
    { name: "Compétences", href: "#skills" },
    { name: "Expérience", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ],

  skills: {
    "Software": [
      { name: "Python", level: 80, icon: "/icons/python.svg" },
      { name: "Lua", level: 95, icon: "/icons/lua.png" },
      { name: "Git", level: 85, icon: "/icons/git.png" }
    ],
    "Front-end": [
      { name: "React", level: 70, icon: "/icons/react.png" },
      { name: "Next.js", level: 70, icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", level: 95, icon: "/icons/tailwind.svg" },
      { name: "HTML", level: 100, icon: "/icons/html.svg" },
      { name: "CSS", level: 100, icon: "/icons/css.svg" },
      { name: "JavaScript", level: 87, icon: "/icons/javascript.svg" },
      { name: "TypeScript", level: 85, icon: "/icons/typescript.svg" }
    ],
    "Back-end": [
      { name: "Node.js", level: 85, icon: "/icons/nodejs.png" },
      { name: "Git", level: 85, icon: "/icons/git.png" },
      { name: "Python", level: 80, icon: "/icons/python.svg" },
      { name: "NextJS", level: 85, icon: "/icons/nextjs.svg" },
      { name: "JavaScript", level: 87, icon: "/icons/javascript.svg" },
      { name: "TypeScript", level: 70, icon: "/icons/typescript.svg" },
      { name: "Lua", level: 95, icon: "/icons/lua.png" },
    ],
    "Database": [
      { name: "MySQL", level: 70, icon: "/icons/mysql.svg" },
      { name: "MariaDB", level: 70, icon: "/icons/mariadb.png" },
      { name: "SQL", level: 75, icon: "/icons/sql.png" }
    ],
    "Design": [
        { name: "Photoshop", level: 60, icon: "/icons/photoshop.png" },
        { name: "Figma", level: 75, icon: "/icons/figma.png" }
    ]
  },

  experiences: [
    {
      id: 1,
      title: "Sublime",
      company: "Sublime",
      location: "Paris, France",
      period: "2025 - Actuellement",
      description: "Développement d'applications web modernes, de bot discord et de serveur de jeu.",
      technologies: ["React", "Node.js", "TypeScript", "MySQL", "Lua", "NextJS", "Tailwind CSS", "Python", "Git"]
    },
    {
        id: 2,
        title: "Orion FA",
        company: "Orion",
        location: "Paris, France",
        period: "2025 - Avril",
        description: "Création de ressources sur mesure pour le serveur de jeu sur FiveM de DVR et IpromX.",
        technologies: ["Lua"]
    },
    {
      id: 3,
      title: "Vision Rôleplay",
      company: "Vision Corp",
      location: "Paris, France",
      period: "2025 - Janvier",
      description: "Développement sur mesure d'un serveur de jeu FiveM.",
      technologies: ["Lua"]
    },
    {
      id: 4,
      title: "Moodlife Rôleplay",
      company: "Moodlife",
      location: "Paris, France",
      period: "2023",
      description: "Développement de ressources sur mesure pour un serveur de jeu FiveM.",
      technologies: ["Lua"]
    },
    {
        id: 5,
        title: "LePtitDarkRP",
        company: "LePtitDarkRP",
        location: "Paris, France",
        period: "2018",
        description: "Développement de ressources sur mesure pour un serveur de jeu Garry's Mod.",
        technologies: ["GLua", "HTML", "CSS"]
      }
  ],

  projects: [
    {
      id: 1,
      title: "Sublime Treasure",
      description: "Resource FiveM qui consiste à créer des évênements de chasse au trésor automatique.",
      image: "/images/project1.svg",
      technologies: ["Lua"],
      githubUrl: "https://github.com/sublimecfx/sublime-treasure",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Création d'un portfolio pour présenter mes projets et mes compétences.",
      image: "/images/project2.svg",
      technologies: ["React", "NextJS", "Tailwind CSS"],
      githubUrl: "https://github.com/atoshit/my-portfolio",
      featured: true
    },
    {
      id: 3,
      title: "Discord FastBot",
      description: "Création d'un bot discord avec quelques commandes utiles.",
      image: "/images/project3.svg",
      technologies: ["TypeScript", "Node.js", "JSON"],
      githubUrl: "https://github.com/atoshit/discord-fastbot",
      featured: false
    },
    {
        id: 4,
        title: "At Shops",
        description: "Resource FiveM qui consiste à créer des boutiques pour un serveur de jeu FiveM.",
        image: "/images/project3.svg",
        technologies: ["Lua", "HTML", "CSS"],
        githubUrl: "https://github.com/atoshit/at_shops",
        featured: false
      }
  ],

  social: {
    github: "https://github.com/atoshit",
    discord: "https://discord.gg/4Y3PWwfHxq",
    youtube: "https://youtube.com/atoshit",
    website: "https://atoshi.fr"
  },

  theme: {
    primaryColor: "blue",
    accentColor: "purple",
    darkMode: true
  }
};

export type PortfolioConfig = typeof portfolioConfig;