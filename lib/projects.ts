export type Project = {
  title: string;
  description: string;
  steps: string[];
  liveUrl: string;
  sourceUrl?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "WorkspaceOS",
    description:
      "A full-stack MERN-based productivity and workspace management platform for monitoring and organizing employee activities.",
    steps: [
      "Login as an employee or admin",
      "Track workspace activities and task progress",
      "View performance insights and activity logs",
      "Manage users and workspace data in real time"
    ],
    liveUrl: "https://workspaceos.vercel.app",
    sourceUrl: "https://github.com/oboyeboade-code/workspaceOS",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3"
    ]
  },
  {
    title: "Motiva",
    description:
      "A small quote app that serves up fresh inspiration on demand.",
    steps: [
      "Click “Get Quote” to load a new quote",
      "Browse and read featured quotes",
      "Copy or share your favorites",
    ],
    liveUrl: "https://motiva-app-five.vercel.app",
    sourceUrl: "https://github.com/oboyeboade-code/motiva_app",
    stack: ["Vue 3", "Vite", "JavaScript", "Supabase", "Supabase Edge Functions", "PostgreSQL", "Deno"],
  },
  {
    title: "Portfolio",
    description:
      "A personal developer portfolio showcasing my projects, skills, and growth as a fullstack developer.",
    steps: [
      "Browse featured projects",
      "View live demos of applications",
      "Explore project details and tech stacks"
    ],
    liveUrl: "https://portfolio-oopeyemi.vercel.app",
    sourceUrl: "https://github.com/oboyeboade-code/portfolio",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Express.js",
    ]
  },
  {
    title: "Simple Calculator",
    description: "A no-frills calculator for everyday arithmetic.",
    steps: [
      "Tap numbers using the buttons", "Pick an operation (+, -, x, ÷)", "Press = to calculate, C to clear",
    ],
    liveUrl: "https://simple-calculator-digits-twelve.vercel.app",
    sourceUrl: "https://github.com/oboyeboade-code/simple_calculator_app",
    stack: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "SQLite", "Drizzle ORM"]
  },
  // {
  //   title: "Subforme - v1.0-dev",
  //   description:
  //     "A full-stack MERN-based prepaid service code platform that allows users to prepay vendors for multiple service uses and receive secure single-use codes via email.",

  //   steps: [
  //     "Browse available service providers",
  //     "Select and purchase a prepaid bundle (N uses)",
  //     "Receive single-use codes via email",
  //     "Present code at provider location",
  //     "Provider redeems code through dashboard"
  //   ],
  //   liveUrl: "https://subforme-eight.vercel.app",
  //   sourceUrl: "https://github.com/oboyeboade-code/subforme_app",
  //   stack: [
  //     "MongoDB",
  //     "Express.js",
  //     "React",
  //     "Node.js",
  //     "JavaScript",
  //     "TypeScript",
  //     "Email Service (Transactional Emails)",
  //     "PayStack",
  //   ]
  // },
];
