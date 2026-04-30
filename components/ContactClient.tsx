"use client";

import { useFormSubmit } from "@/hooks/useFormSubmit";

export default function ContactClient() {
  const { submit, loading } = useFormSubmit({
    endpoint: "/api/messages",
    onSuccess: () => (window.location.href = "/thank-you"),
    onError: () => (window.location.href = "/failed"),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData);

    submit(body);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="email" />
      <textarea name="message" />

      <input
        type="submit"
        value={loading ? "Sending..." : "Send message"}
        disabled={loading}
      />
    </form>
  );
}