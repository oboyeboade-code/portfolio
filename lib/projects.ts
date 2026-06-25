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
    liveUrl: "https://oboyeboade-code.github.io/motiva_app/",
    sourceUrl: "https://github.com/oboyeboade-code/motiva_app",
    stack: ["HTML5", "CSS3", "JavaScript"],
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
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Simple Calculator",
    description: "A no-frills calculator for everyday arithmetic.",
    steps: [
      "Tap numbers using the buttons",
      "Pick an operation (+, -, x, ÷)",
      "Press = to calculate, C to clear",
    ],
    liveUrl: "https://calculator-nine-kappa-11.vercel.app/",
    sourceUrl: "https://github.com/oboyeboade-code/simple_calculator_app",
    stack: ["HTML5", "CSS3", "JavaScript"],
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
  //     "Email Service (Transactional Emails)"
  //     "PayStack"
  //   ]
  // },
  // {
  //   title: "Todo App",
  //   description:
  //     "A clean, persistent todo list to plan and track daily tasks.",
  //   steps: [
  //     "Add tasks with the input field",
  //     "Click a task to mark it complete",
  //     "Edit or delete tasks anytime",
  //   ],
  //   liveUrl:
  //     "https://opeyemibariu.github.io/Final_Project_Studio-Build_-_Deploy_with_AI/",
  //   sourceUrl: "https://github.com/opeyemibariu/Final_Project_Studio-Build_-_Deploy_with_AI",
  //   stack: ["HTML5", "CSS3", "JavaScript"],
  // },
];
