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
    title: "Motiva",
    description:
      "A small quote app that serves up fresh inspiration on demand.",
    steps: [
      "Click “Get Quote” to load a new quote",
      "Browse and read featured quotes",
      "Copy or share your favorites",
    ],
    // liveUrl: "https://project-scopevale.vercel.app/",
    liveUrl: "https://oboyeboade-code.github.io/motiva_app/",
    stack: ["VANILLA HTML5/CSS3/JavaScript"],
    // stack: ["React", "Next.js", "CSS"],
  },
  {
    title: "Todo App",
    description:
      "A clean, persistent todo list to plan and track daily tasks. Built only with AI",
    steps: [
      "Add tasks with the input field",
      "Click a task to mark it complete",
      "Edit or delete tasks anytime",
    ],
    liveUrl:
      "https://opeyemibariu.github.io/Final_Project_Studio-Build_-_Deploy_with_AI/",
    stack: ["VANILLA HTML5/CSS3/JavaScript"],
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
    stack: ["VANILLA HTML5/CSS3/JavaScript"],
  },
  {
    title: "WorkspaceOS - !Active",
    description:
      "A full-stack MERN-based productivity and workspace management platform for monitoring and organizing employee activities.",

    steps: [
      "Login as an employee or admin",
      "Track workspace activities and task progress",
      "View performance insights and activity logs",
      "Manage users and workspace data in real time"
    ],

    liveUrl: "",

    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Subs - !Active",
    description:
      "A full-stack MERN-based prepaid service code platform that allows users to prepay vendors for multiple service uses and receive secure single-use codes via email.",

    steps: [
      "Browse available service providers",
      "Select and purchase a prepaid bundle (N uses)",
      "Receive single-use codes via email",
      "Present code at provider location",
      "Provider redeems code through dashboard"
    ],

    liveUrl: "",

    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "Email Service (Transactional Emails)"
    ]
  },
  {
    title: "My Portfolio",
    description:
      "A personal developer portfolio showcasing my projects, skills, and growth as a fullstack developer.",
    steps: [
      "Browse featured projects",
      "View live demos of applications",
      "Explore project details and tech stacks"
    ],
    liveUrl: "https://portfolio-chi-five-9wum7u7lqo.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  }
];
