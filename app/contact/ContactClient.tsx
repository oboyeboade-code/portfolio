"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Linkedin, Mail } from "@/components/icons";
// import { Github, Linkedin, Mail, Twitter } from "@/components/icons";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("default");

  // ✅ form state (controlled inputs)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Restore draft ONLY if last submission failed
  useEffect(() => {
    const lastStatus = localStorage.getItem("contact-form-status");
    const saved = localStorage.getItem("contact-form-draft");

    if (lastStatus === "failed" && saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  // ✅ Save draft continuously
  useEffect(() => {
    localStorage.setItem("contact-form-draft", JSON.stringify(form));
  }, [form]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          submittedOn: new Date().toLocaleString(),
        }),
      });

      if (res.ok) {
        setStatus("success");

        // ✅ clear draft on success
        localStorage.removeItem("contact-form-draft");
        localStorage.setItem("contact-form-status", "success");

        // reset form UI
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("failed");

        // ❗ keep draft for retry
        localStorage.setItem("contact-form-status", "failed");
      }
    } catch (e) {
      setStatus("failed");
      localStorage.setItem("contact-form-status", "failed");
      setLoading(false); // Reset loading immediately on failure
    }
  };

  return (
    <>
      {status === "default" ? (
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
                    pattern="\S+.*"
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </label>

                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    placeholder="Leave a message"
                    required
                    minLength={10}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
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
                {/* <Github /> */}
                <Linkedin />
                {/* <Twitter /> */}
                <Mail />
              </div>
            </aside>
          </div>
        </section>
      ) : (
        <div>
          {status === "failed" ? (
            <StatusPage
              title="Oops 😕"
              message="Something went wrong. Please try again."
              onCountdownEnd={() => {
                setStatus("default");
                setLoading(false);
              }}
            />
          ) : (
            <StatusPage
              title="Message Sent ✉️"
              message="Your message has been received."
              onCountdownEnd={() => {
                setStatus("default");
                setLoading(false);
              }
            } />
          )}
        </div>
      )}
    </>
  );
}

function StatusPage({
  title,
  message,
  onCountdownEnd,
  countdownDuration = 5,
}: {
  title: string;
  message: string;
  onCountdownEnd: () => void;
  countdownDuration?: number;
}) {
  const [countdown, setCountdown] = useState(countdownDuration);

  useEffect(() => {
    if (countdown === 0) {
      onCountdownEnd();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, onCountdownEnd, countdownDuration]);

  return (
    <>
      <h1>{title}</h1>
      <p>{message} Redirecting in {countdown} seconds...</p>
    </>
  );
}
