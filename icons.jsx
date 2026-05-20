// Minimal monogram-style icons. Avoid trademark logos.
// We use simple geometric outline marks for social/contact, and the language
// "monograms" (TS, JS, etc.) are rendered by the Mark component using letters.

const Mark = ({ children, size = 36, accent = false, icon = null }) => {
  const inner = Math.round(size * 0.58);
  return (
    <div
      style={{
        width: size, height: size, flexShrink: 0,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: 8,
        border: "1px solid var(--rule)",
        background: accent ? "var(--accent)" : "var(--paper)",
        color: accent ? "var(--paper)" : "var(--ink)",
        fontFamily: "var(--f-mono)",
        fontSize: size <= 28 ? 10 : 12,
        fontWeight: 500,
        letterSpacing: ".02em",
        transition: "transform var(--t-fast), background var(--t-fast)",
      }}
    >
      {icon ? (
        <span
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: inner, height: inner,
            backgroundColor: "currentColor",
            WebkitMaskImage: `url(${icon.startsWith("http") ? icon : `https://cdn.simpleicons.org/${icon}`})`,
            maskImage:       `url(${icon.startsWith("http") ? icon : `https://cdn.simpleicons.org/${icon}`})`,
            WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",  maskPosition: "center",
            WebkitMaskSize: "contain",     maskSize: "contain",
          }}
        />
      ) : children}
    </div>
  );
};

// Universal "person-network" mark (in for in-the-network) — original abstract glyph
const IconLinkedIn = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="6" cy="7" r="1.4" />
    <line x1="6" y1="11" x2="6" y2="19" />
    <path d="M11 19v-8" />
    <path d="M11 14c0-1.8 1.3-3 3-3s3 1.2 3 3v5" />
  </svg>
);

// Original abstract "code/repo" mark
const IconGitHub = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 6 L3 12 L8 18" />
    <path d="M16 6 L21 12 L16 18" />
    <path d="M14 4 L10 20" />
  </svg>
);

const IconMail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3.5 6 L12 13 L20.5 6" />
  </svg>
);

const IconArrowOut = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 L17 7" />
    <path d="M9 7 H17 V15" />
  </svg>
);

const IconArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5 V19" />
    <path d="M6 13 L12 19 L18 13" />
  </svg>
);

Object.assign(window, { Mark, IconLinkedIn, IconGitHub, IconMail, IconArrowOut, IconArrowDown });
