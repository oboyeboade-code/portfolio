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
        I build full-stack web applications that solve real-world problems,
        combining responsive interfaces with reliable backend systems. From
        planning features to deploying applications, I enjoy turning ideas into
        practical, user-focused software.
      </p>

      <p>
        My projects include productivity platforms, personal
        websites, and interactive web applications, giving me experience across
        both frontend and backend development.
      </p>

      <p>I regularly work with technologies such as:</p>

      <ul>
        <li>React, Next.js, Vue, and TypeScript</li>
        <li>Node.js, Express.js, and REST APIs</li>
        <li>MongoDB, PostgreSQL, and Supabase</li>
        <li>Tailwind CSS, CSS Modules, and responsive UI design</li>
      </ul>

      <p>When building applications, I prioritize:</p>

      <ul>
        <li>Clean, maintainable, and scalable code</li>
        <li>Responsive and accessible user interfaces</li>
        <li>Well-structured backend architecture</li>
        <li>Thoughtful user experience and performance</li>
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