"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Github, Linkedin, Mail, Twitter } from "@/components/icons";
import { useRouter } from "next/navigation";


export default function ContactClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, submittedOn: new Date().toLocaleString() }),
      });

      if (res.ok) {
        router.push("/thank-you");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        router.push("/failed");
        setTimeout(() => {
          router.back();
        }, 2000);
      }
    } catch {
        router.push("/failed");
        setTimeout(() => {
          router.back();
        }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.wrapper}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.lede}>
          Got a project, role, or just want to say hi? Drop a message — I read everything.
        </p>
      </header>

      <div className={styles.grid}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <fieldset>
            <legend>Reach out</legend>

            <label>
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                pattern="\S+"
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Leave a message"
                required
                minLength={10}
              />
            </label>

            <input
              type="submit"
              value={loading ? "Sending..." : "Send message"}
              disabled={loading}
            />
          </fieldset>
        </form>

        <aside className={styles.side}>
          <p className={styles.sideLabel}>Or find me on</p>
          <div className={styles.socials}>
            <Github />
            <Linkedin />
            <Twitter />
            <Mail />
          </div>
        </aside>
      </div>
    </section>
  );
}