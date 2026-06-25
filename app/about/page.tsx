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
          Hi, I&apos;m Opeyemi — a junior web developer focused on building clean,
          responsive, and user-friendly web applications.
        </p>
        <p>
          I enjoy turning ideas into real, working products and improving my
          skills through consistent, hands-on development.
        </p>
        <p>
          Outside of coding, I enjoy reading, which helps me think more clearly about systems, structure, and problem-solving.
        </p>
      </>
    ),
  },
  {
    title: "What I Do",
    body: (
      <>
        <p>
          I build full-stack web applications using modern JavaScript technologies,
          with a focus on performance, usability, and clean architecture.
        </p>

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
          <li>Full-stack applications with seamless frontend-backend integration</li>
          <li>REST APIs and authentication systems</li>
          <li>Writing clean, maintainable, and scalable code</li>
        </ul>
      </>
    ),
  },
  {
    title: "My Journey",
    body: (
      <p>
        I started with the fundamentals — HTML, CSS, and JavaScript — and gradually
        moved into React and Next.js. As my understanding grew, I expanded into
        backend development with Node.js, Express, and MongoDB, allowing me to build
        complete, full-stack applications.
        <br /><br />
        Over time, my focus has shifted from just making things work to understanding
        how to build applications that are structured, scalable, and reliable.
      </p>
    ),
  },
  {
    title: "What I'm Looking For",
    body: (
      <ul>
        <li>Opportunities to work on real-world, production-level projects</li>
        <li>Collaboration with experienced developers and teams</li>
        <li>Environments that challenge me to grow and improve consistently</li>
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