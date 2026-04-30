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
          <p className={styles.cardLabel}>Frameworks & Libraries</p>
          <ul className={styles.chips}>
            <li>React</li>
            <li>Next.js</li>
            <li>Redux Toolkit</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Mongoose</li>
            <li>JWT Authentication</li>
          </ul>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Languages</p>
          <ul className={styles.chips}>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>C</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Styling & Data</p>
          <ul className={styles.chips}>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap CSS</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className={styles.card}>
          <p className={styles.cardLabel}>Learning & Development</p>
          <ul className={styles.chips}>
            <li>GOMYCODE</li>
            <li>freeCodeCamp</li>
            <li>Codecademy</li>
            <li>W3Schools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
