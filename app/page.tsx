import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Junior Web Developer</p>
      <h1 className={styles.name}>
        Opeyemi <span>Oyeboade</span>
      </h1>
      <p className={styles.lede}>
        I build clean, responsive web apps with React and Next.js. Passionate
        about turning ideas into real products and shipping things that feel
        good to use.
      </p>

      <div className={styles.ctas}>
        <Link href="/projects" className="btn btn-primary">
          View projects →
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Get in touch
        </Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Frameworks</p>
          <ul className={styles.chips}>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux Toolkit</li>
          </ul>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Languages</p>
          <ul className={styles.chips}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>SQL</li>
            <li>C</li>
          </ul>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Styling & Data</p>
          <ul className={styles.chips}>
            <li>HTML</li>
            <li>CSS Modules</li>
            <li>Tailwind</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Learning from</p>
          <ul className={styles.chips}>
            <li>freeCodeCamp</li>
            <li>Codecademy</li>
            <li>W3Schools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
