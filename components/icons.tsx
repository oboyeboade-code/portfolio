import Link from "next/link";

type IconLinkProps = { href: string; label: string; children: React.ReactNode };

const IconLink = ({ href, label, children }: IconLinkProps) => (
  <Link
    className="icon-btn"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    {children}
  </Link>
);

export const Github = () => (
  <IconLink href="https://github.com/oboyeboade-code" label="GitHub">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.49.11-3.1 0 0 .98-.31 3.2 1.18a11 11 0 0 1 5.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.61.23 2.8.11 3.1.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.4-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  </IconLink>
);

export const Linkedin = () => (
  <IconLink href="https://linkedin.com/in/freshpOlice" label="LinkedIn">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  </IconLink>
);

export const Twitter = () => (
  <IconLink href="https://x.com/yemi135080" label="X (Twitter)">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.51 8.59L23 22h-6.78l-5.32-6.96L4.8 22H1.54l8.04-9.2L1 2h6.91l4.81 6.36L18.244 2Zm-1.19 18h1.87L7.06 4H5.05l12.004 16Z" />
    </svg>
  </IconLink>
);

export const Mail = () => (
  <IconLink href="mailto:oboyeboade@student.oauife.edu.ng" label="Email">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  </IconLink>
);
