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
    stack: ["React", "Next.js", "CSS"],
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
    stack: ["JavaScript", "HTML", "CSS"],
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
    stack: ["React", "CSS"],
  },
];
