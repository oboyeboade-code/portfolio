import Link from "next/link";
import type { Project } from "@/lib/projects";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className={styles.card}>
      <div className={styles.preview} aria-hidden="true">
        <span className={styles.previewLabel}>{project.title}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>

        <ul className={styles.stack} aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <details className={styles.howto}>
          <summary>How to use</summary>
          <ul>
            {project.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </details>

        <div className={styles.actions}>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Live demo →
          </Link>
          {project.sourceUrl && (
            <Link
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Source
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
