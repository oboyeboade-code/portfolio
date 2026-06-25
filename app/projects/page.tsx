import type { Metadata } from "next";
import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Opeyemi Oyeboade — built with React, Next.js, and friends.",
};

export default function ProjectsPage() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Work</p>
        <h1 className={styles.title}>Selected projects</h1>
        <p className={styles.lede}>
          A few things I&apos;ve built while learning. Click through to try them.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
