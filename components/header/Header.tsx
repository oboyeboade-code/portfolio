"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Header = () => {
  const [greeting, setGreeting] = useState("Welcome!");

  useEffect(() => {
    const t = setTimeout(() => setGreeting(""), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="brand" aria-label="Home">
          opeyemi<span>.</span>dev
        </a>
        <Navbar />
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="greeting" aria-live="polite">{greeting}</span>
          <span className="avatar-fallback" aria-hidden="true">OO</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
