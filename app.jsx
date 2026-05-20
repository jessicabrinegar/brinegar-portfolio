// Main app — composes the sections, owns the section-order state, and renders Tweaks.

const { useEffect: useEffectApp, useState: useStateApp, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe":     "editorial",
  "density":  "regular",
  "dark":     false,
  "palette":  ["#EFE9DD", "#7A8B6F", "#2B2A26", "#5C6E54"],
  "order":    ["about","skills","experience","projects","education","courses"]
}/*EDITMODE-END*/;

// Palette presets: [bg, accent, ink, accent-2]
const PALETTES = [
  ["#EFE9DD", "#7A8B6F", "#2B2A26", "#5C6E54"], // sage + cream
  ["#F4EFE3", "#5C6E54", "#2B2A26", "#3F4A3A"], // olive + sand
  ["#E8E2D2", "#3F4A3A", "#232220", "#A89B7B"], // moss + ivory
  ["#ECE5D6", "#8A9579", "#3A372E", "#6F7F5E"], // warm taupe
];

const SECTION_LABELS = {
  about:      "About",
  skills:     "Skills",
  experience: "Experience",
  projects:   "Projects",
  education:  "Education & Certs",
  courses:    "Continuing study",
};

function applyTokens(palette) {
  const [bg, accent, ink, accent2] = palette;
  const root = document.documentElement;
  root.style.setProperty("--bg", bg);
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--ink", ink);
  root.style.setProperty("--accent-2", accent2);
  // derive a "bg-2" by mixing toward ink
  const bg2 = `color-mix(in oklab, ${bg} 88%, ${ink})`;
  root.style.setProperty("--bg-2", bg2);
  root.style.setProperty("--paper", `color-mix(in oklab, ${bg} 96%, white)`);
  root.style.setProperty("--ink-2", `color-mix(in oklab, ${ink} 70%, ${bg})`);
  root.style.setProperty("--ink-3", `color-mix(in oklab, ${ink} 45%, ${bg})`);
  root.style.setProperty("--rule", `color-mix(in oklab, ${ink} 15%, transparent)`);
}

function useLocalTweaks(defaults) {
  const [t, setT] = useStateApp(defaults);
  const setTweak = (key, value) => setT((prev) => ({ ...prev, [key]: value }));
  return [t, setTweak];
}

function App() {
  const [t, setTweak] = useLocalTweaks(TWEAK_DEFAULTS);
  const data = window.PORTFOLIO;
  const [active, setActive] = useStateApp("top");
  useReveal();

  // Apply theme tokens
  useEffectApp(() => {
    document.documentElement.setAttribute("data-vibe",    t.vibe);
    document.documentElement.setAttribute("data-density", t.density);
    document.documentElement.setAttribute("data-dark",    String(t.dark));
    applyTokens(t.palette);
    // Mirror to localStorage so project detail pages can pick it up.
    try { localStorage.setItem("jb-tweaks", JSON.stringify(t)); } catch (e) {}
  }, [t.vibe, t.density, t.dark, t.palette]);

  // Active-section tracking for rail nav
  useEffectApp(() => {
    const ids = ["top", ...t.order, "contact"];
    const onScroll = () => {
      // Section becomes active when its top crosses ~35% down the viewport.
      // Viewport-relative threshold scales with screen size, so it stays
      // responsive on tall pages and large monitors.
      const y = window.scrollY + window.innerHeight * 0.35;
      let cur = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.order]);

  const sectionComponents = {
    about:      <About key="about" data={data} />,
    skills:     <Skills key="skills" data={data} />,
    experience: <Experience key="experience" data={data} />,
    projects:   <Projects key="projects" data={data} />,
    education:  <EducationCerts key="education" data={data} />,
    courses:    <Courses key="courses" data={data} />,
  };

  const railItems = [
    { id: "top",     label: "Intro" },
    ...t.order.map((k) => ({ id: k, label: SECTION_LABELS[k] })),
    { id: "contact", label: "Contact" },
  ];

  const moveSection = (key, dir) => {
    const idx = t.order.indexOf(key);
    const next = idx + dir;
    if (next < 0 || next >= t.order.length) return;
    const arr = [...t.order];
    [arr[idx], arr[next]] = [arr[next], arr[idx]];
    setTweak("order", arr);
  };

  return (
    <React.Fragment>
      <RailNav items={railItems} active={active} />

      <Hero data={data} />
      {t.order.map((k) => sectionComponents[k])}
      <Footer data={data} />
      
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
