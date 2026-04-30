import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Opeyemi Oyeboade — junior web developer focused on React and Next.js.",
};

const sections = [
  {
    title: "Introduction",
    body: (
      <>
        <p>
          Hi, I&apos;m Opeyemi — a junior web developer passionate about building
          clean, responsive, and user-friendly applications.
        </p>
        <p>
          I enjoy turning ideas into real products and continuously improving
          through hands-on projects.
        </p>
      </>
    ),
  },
  {
    title: "What I Do",
    body: (
      <>
        <p>I build full-stack web applications using modern JavaScript technologies:</p>

        <ul>
          <li>JavaScript (ES6+) &amp; TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express.js (Backend APIs)</li>
          <li>MongoDB (Database)</li>
          <li>HTML &amp; CSS — Tailwind, CSS Modules</li>
        </ul>

        <p>I focus on:</p>
        <ul>
          <li>Responsive and accessible user interfaces</li>
          <li>Full-stack web applications (frontend + backend integration)</li>
          <li>REST APIs and authentication systems</li>
          <li>Clean, maintainable, and scalable code</li>
        </ul>
      </>
    ),
  },
  {
    title: "My Journey",
    body: (
      <p>
        I started with the fundamentals — HTML, CSS, and JavaScript — and gradually
        moved into React and Next.js. As I progressed, I expanded into backend
        development with Node.js, Express, and MongoDB, allowing me to build full-stack
        applications. I&apos;m continuously learning, building projects, and improving
        my problem-solving and system design skills.
      </p>
    ),
  },
  {
    title: "What I'm Looking For",
    body: (
      <ul>
        <li>Real-world projects to ship</li>
        <li>Collaboration with experienced developers</li>
        <li>Opportunities to keep learning</li>
      </ul>
    ),
  },
];

export default function AboutPage() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.title}>A bit about me</h1>
      </header>

      <div className={styles.grid}>
        {sections.map((s) => (
          <article key={s.title} className={styles.card}>
            <h2>{s.title}</h2>
            <div className={styles.body}>{s.body}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
