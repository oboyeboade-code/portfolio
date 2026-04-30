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
        <p>I work mostly with modern web technologies:</p>
        <ul>
          <li>JavaScript (ES6+) &amp; TypeScript</li>
          <li>React / Next.js</li>
          <li>HTML &amp; CSS — Tailwind, CSS Modules</li>
        </ul>
        <p>I focus on:</p>
        <ul>
          <li>Responsive user interfaces</li>
          <li>Interactive web applications</li>
          <li>Clean and maintainable code</li>
        </ul>
      </>
    ),
  },
  {
    title: "My Journey",
    body: (
      <p>
        I started with the fundamentals — HTML, CSS, and JavaScript — then moved
        into React and Next.js, where I began building full projects and
        sharpening my problem-solving skills. I&apos;m constantly learning and
        experimenting with new tools.
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
