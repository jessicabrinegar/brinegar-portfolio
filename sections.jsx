// Sections of the portfolio. Style-heavy components written so each section
// has its own visual character but they all share the system tokens.

const { useEffect, useRef, useState } = React;

// ── Reveal-on-scroll helper ────────────────────────────────────────────────
const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// ── Section eyebrow header ─────────────────────────────────────────────────
const Eyebrow = ({ num, label }) => (
  <div className="eyebrow">
    <span>{label}</span>
    <span className="bar" />
  </div>
);

// ── Side rail nav ──────────────────────────────────────────────────────────
const RailNav = ({ items, active }) => {
  // The Courses section has a sage background and the Contact footer is dark ink —
  // dark-on-dark / sage-on-sage makes the rail indicators invisible. Flip colors
  // to paper when the active section is one of those colored bands.
  const inverted     = active === "courses" || active === "contact";
  const activeLine   = inverted ? "rgba(246,241,228,.9)"  : "var(--accent-2)";
  const inactiveLine = inverted ? "rgba(246,241,228,.4)"  : "var(--ink-3)";
  const activeLabel  = inverted ? "var(--paper)"          : "var(--ink)";
  return (
    <nav className="rail-nav" style={{
      position: "fixed", top: 0, bottom: 0, left: 0, width: 64, zIndex: 50,
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", padding: "28px 0",
      pointerEvents: "none",
    }}>
      <ol style={{
        pointerEvents: "auto",
        listStyle: "none", padding: 0, margin: 0,
        display: "flex", flexDirection: "column", gap: 18,
      }}>
        {items.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} title={s.label}
               style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                display: "block", width: active === s.id ? 24 : 14, height: 1,
                background: active === s.id ? activeLine : inactiveLine,
                transition: "width var(--t-fast), background var(--t-fast)",
              }} />
              <span style={{
                fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".14em",
                textTransform: "uppercase",
                color: active === s.id ? activeLabel : inactiveLine,
                opacity: active === s.id ? 1 : 0,
                transition: "opacity var(--t-fast), color var(--t-fast)",
              }}>{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

// ── Hero ───────────────────────────────────────────────────────────────────
const Hero = ({ data }) => (
  <section id="top" data-screen-label="01 Hero" style={{
    minHeight: "100vh",
    paddingTop: "clamp(80px, 14vh, 180px)",
    paddingBottom: "var(--sec-y)",
    position: "relative",
  }}>
    <div className="container">

      <div className="reveal" style={{
        fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".22em",
        textTransform: "uppercase", color: "var(--ink-3)",
        display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 48,
      }}>
        <span><span style={{
          display:"inline-block",width:7,height:7,borderRadius:99,background:"var(--accent)",
          marginRight:8,verticalAlign:"middle",
        }} />Available for new work</span>
        <span style={{ color: "var(--rule)" }}>·</span>
        <span>{data.role}</span>
        <span style={{ color: "var(--rule)" }}>·</span>
        <span>{data.city}</span>
      </div>

      <h1 className="reveal d1" style={{ marginBottom: 48 }}>
        {data.hero.titleLines.map((line, i) => (
          <span key={i} style={{ display: "block" }}>
            {i === 1 && <em style={{
              fontStyle: "italic", color: "var(--accent-2)",
              fontFamily: "var(--f-display)",
            }}>{line}</em>}
            {i !== 1 && line}
          </span>
        ))}
      </h1>

      <div style={{
        display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)",
        gap: "clamp(20px, 4vw, 64px)", alignItems: "end",
      }}>
        <div className="reveal d2" style={{
          fontFamily: "var(--f-body)", fontSize: 14, lineHeight: 1.5,
          color: "var(--ink)",
          display: "flex", flexDirection: "column", gap: 18,
          paddingTop: 14, borderTop: "1px solid var(--rule)",
        }}>
          <div>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".22em",
              textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 4,
            }}>Name</div>
            <div style={{ fontSize: 16 }}>{data.name}</div>
          </div>
          <div>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".22em",
              textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 4,
            }}>Role</div>
            <div style={{ fontSize: 16 }}>{data.role}</div>
          </div>
          <div>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".22em",
              textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 4,
            }}>Based</div>
            <div style={{ fontSize: 16 }}>{data.city}</div>
          </div>
        </div>

        <p className="reveal d3" style={{
          fontFamily: "var(--f-body)", fontSize: "clamp(18px, 1.6vw, 22px)",
          lineHeight: 1.55, color: "var(--ink-2)", margin: 0,
          maxWidth: "60ch",
        }}>
          {data.hero.sub}
        </p>
      </div>

      <div className="reveal d4" style={{
        position: "absolute", bottom: 36, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
        color: "var(--ink-3)", fontFamily: "var(--f-mono)",
        fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
      }}>
        <span>Scroll</span>
        <span style={{
          display: "block", width: 1, height: 40, background: "var(--ink-3)",
          animation: "rail 1.8s ease-in-out infinite",
        }} />
        <style>{`@keyframes rail{0%,100%{transform:scaleY(.4);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}}`}</style>
      </div>
    </div>
  </section>
);

// ── About ──────────────────────────────────────────────────────────────────
const About = ({ data }) => (
  <section id="about" data-screen-label="02 About" style={{ padding: "var(--sec-y) 0" }}>
    <div className="container">
      <Eyebrow num="01" label="About" />

      <div className="reveal" style={{
        display: "grid", gridTemplateColumns: "auto minmax(0,1fr)",
        gap: "clamp(28px, 5vw, 72px)", alignItems: "start",
      }}>
        <figure style={{ margin: 0, position: "relative" }}>
          <div style={{
            width: 168, height: 168, borderRadius: "50%",
            backgroundImage: "url(images/user-3.jpg)",
            backgroundSize: "cover", backgroundPosition: "center",
            border: "1px solid var(--rule)",
            boxShadow: "0 1px 0 rgba(255,255,255,.5) inset",
            position: "relative", overflow: "hidden",
          }} />
        </figure>

        <div>
          {data.about.paragraphs.map((p, i) => (
            <p key={i} style={{
              fontSize: "clamp(18px, 1.4vw, 21px)",
              lineHeight: 1.6, color: i === 0 ? "var(--ink)" : "var(--ink-2)",
              margin: i === 0 ? "0 0 18px" : "0 0 18px",
              maxWidth: "62ch",
            }}>{p}</p>
          ))}

          <dl style={{
            display: "grid", gridTemplateColumns: "auto 1fr",
            columnGap: 24, rowGap: 10,
            marginTop: 28, paddingTop: 20,
            borderTop: "1px solid var(--rule)",
            fontFamily: "var(--f-mono)", fontSize: 12,
          }}>
            {data.about.quickFacts.map(([k,v]) => (
              <React.Fragment key={k}>
                <dt style={{ color: "var(--ink-3)", letterSpacing: ".12em", textTransform: "uppercase" }}>{k}</dt>
                <dd style={{ margin: 0, color: "var(--ink)" }}>{v}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

// ── Skills ─────────────────────────────────────────────────────────────────
const Skills = ({ data }) => (
  <section id="skills" data-screen-label="03 Skills" style={{ padding: "var(--sec-y) 0", background: "var(--bg-2)" }}>
    <div className="container">
      <Eyebrow num="02" label="Skills · Tech stack" />

      <div className="reveal" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "clamp(24px, 3vw, 48px)",
      }}>
        {data.skills.map((group, gi) => (
          <div key={group.group}>
            <h3 style={{
              fontSize: 14, fontFamily: "var(--f-mono)", fontWeight: 500,
              letterSpacing: ".14em", textTransform: "uppercase",
              color: "var(--ink-3)", marginBottom: 18,
              paddingBottom: 12, borderBottom: "1px solid var(--rule)",
              display: "flex", justifyContent: "space-between",
            }}>
              <span>{group.group}</span>
              <span>{String(gi + 1).padStart(2, "0")}</span>
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0,
              display: "flex", flexDirection: "column", gap: 14 }}>
              {group.items.map((item) => (
                <li key={item.name} style={{
                  display: "flex", alignItems: "center", gap: 14,
                }}>
                  <Mark size={32} icon={item.icon}>{item.mark}</Mark>
                  <span style={{
                    fontSize: 15, color: "var(--ink)",
                    fontFamily: "var(--f-body)", lineHeight: 1.3,
                  }}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ── Experience ─────────────────────────────────────────────────────────────
const Experience = ({ data }) => (
  <section id="experience" data-screen-label="04 Experience" style={{ padding: "var(--sec-y) 0" }}>
    <div className="container">
      <Eyebrow num="03" label="Experience" />

      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {data.experience.map((job, i) => (
          <li key={i} className="reveal" style={{
            display: "grid",
            gridTemplateColumns: "160px minmax(0, 1fr)",
            gap: "clamp(20px, 4vw, 56px)",
            padding: "36px 0",
            borderTop: i === 0 ? "1px solid var(--rule)" : "none",
            borderBottom: "1px solid var(--rule)",
          }}>
            <div style={{
              fontFamily: "var(--f-mono)", fontSize: 12, letterSpacing: ".06em",
              color: "var(--ink-3)", lineHeight: 1.6,
            }}>
              <div style={{ color: "var(--ink-2)" }}>{job.when}</div>
              {job.where && <div>{job.where}</div>}
            </div>

            <div>
              <h3 style={{ marginBottom: 4 }}>{job.role}</h3>
              <div style={{
                fontFamily: "var(--f-mono)", fontSize: 13,
                color: "var(--accent-2)", marginBottom: 18, letterSpacing: ".02em",
              }}>{job.org}</div>
              {job.bullets.length > 0 && (
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--ink-2)",
                  display: "flex", flexDirection: "column", gap: 8 }}>
                  {job.bullets.map((b, bi) => (
                    <li key={bi} style={{ fontSize: 16, lineHeight: 1.55 }}>{b}</li>
                  ))}
                </ul>
              )}
              {job.url && (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    marginTop: 14,
                    fontFamily: "var(--f-mono)", fontSize: 12,
                    letterSpacing: ".06em",
                    color: "var(--accent-2)",
                    borderBottom: "1px solid var(--rule)",
                    paddingBottom: 2,
                  }}
                >
                  {job.urlLabel || "Read more"} <IconArrowOut size={12} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

// ── Projects ───────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const [hover, setHover] = useState(false);
  const isExternal = project.link && project.link.kind === "external";
  const href = (project.link && project.link.url) || `projects/${project.slug}.html`;
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", display: "block",
        aspectRatio: "4 / 5", overflow: "hidden",
        background: "var(--bg-2)",
        border: "1px solid var(--rule)",
        cursor: "pointer",
      }}
    >
      {/* Background — image if available, else gradient swatch */}
      <div style={{
        position: "absolute", inset: 0,
        background: project.image
          ? `url(${project.image}) center/cover no-repeat`
          : `linear-gradient(135deg, ${project.swatch[0]} 0%, ${project.swatch[1]} 100%)`,
        transition: "transform var(--t-med)",
        transform: hover ? "scale(1.04)" : "scale(1)",
      }}>
        {/* Soften the photo so foreground text stays readable */}
        {project.image && (
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(0,0,0,.45) 100%)",
          }} />
        )}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,.06) 14px 15px)",
        }} />
        {/* Project number watermark */}
        <div style={{
          position: "absolute", top: 24, left: 24,
          fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".18em",
          textTransform: "uppercase", color: "rgba(255,255,255,.9)",
        }}>
          /  {String(index + 1).padStart(2, "0")} — {project.year}
        </div>
        <div style={{
          position: "absolute", bottom: 22, left: 24, right: 24,
          fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".18em",
          textTransform: "uppercase", color: "rgba(255,255,255,.85)",
          opacity: hover ? 0 : 1, transition: "opacity var(--t-fast)",
        }}>
          {project.tagline}
        </div>
      </div>

      {/* Hover overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "color-mix(in oklab, var(--ink) 86%, transparent)",
        color: "var(--paper)",
        padding: "clamp(20px, 3vw, 32px)",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        opacity: hover ? 1 : 0,
        transition: "opacity var(--t-med)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{
            fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".18em",
            textTransform: "uppercase", color: "var(--accent)",
          }}>
            {project.role}
          </div>
          <IconArrowOut size={18} />
        </div>

        <div>
          <h3 style={{
            fontSize: "clamp(22px, 2.2vw, 30px)",
            color: "var(--paper)", marginBottom: 12, lineHeight: 1.1,
          }}>{project.title}</h3>
          <p style={{
            fontSize: 14, lineHeight: 1.55, color: "rgba(246,241,228,.78)",
            margin: "0 0 18px",
          }}>{project.summary}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((t) => (
              <span key={t} style={{
                fontFamily: "var(--f-mono)", fontSize: 10,
                letterSpacing: ".06em",
                padding: "3px 8px", borderRadius: 99,
                border: "1px solid rgba(246,241,228,.25)",
                color: "var(--paper)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

const Projects = ({ data }) => (
  <section id="projects" data-screen-label="05 Projects" style={{ padding: "var(--sec-y) 0", background: "var(--bg-2)" }}>
    <div className="container">
      <Eyebrow num="04" label="Selected projects" />

      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 20,
      }}>
        <h2 className="reveal" style={{ maxWidth: "16ch" }}>
          Things I've built<em style={{ color: "var(--accent-2)" }}>.</em>
        </h2>
        <p className="reveal d1" style={{
          maxWidth: "38ch", color: "var(--ink-2)", fontSize: 16,
          fontFamily: "var(--f-mono)", lineHeight: 1.6,
        }}>
          {data.projects.length} projects · click any to open.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "clamp(14px, 2vw, 24px)",
      }}>
        {data.projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ── Education + Certs (combined row) ───────────────────────────────────────
const EducationCerts = ({ data }) => (
  <section id="education" data-screen-label="06 Education" style={{ padding: "var(--sec-y) 0" }}>
    <div className="container">
      <div className="reveal" style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)",
        gap: "clamp(28px, 5vw, 80px)",
      }}>
        <div>
          <Eyebrow num="05" label="Education" />
          {data.education.map((ed, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <h3 style={{ marginBottom: 6 }}>{ed.school}</h3>
              <div style={{
                fontFamily: "var(--f-mono)", fontSize: 13, color: "var(--accent-2)",
                marginBottom: 6, letterSpacing: ".02em",
              }}>{ed.degree}</div>
              <div style={{ color: "var(--ink-3)", fontFamily: "var(--f-mono)", fontSize: 12,
                marginBottom: 14, letterSpacing: ".06em" }}>{ed.when}</div>
              <p style={{ color: "var(--ink-2)", margin: 0, maxWidth: "44ch", fontSize: 16, lineHeight: 1.55 }}>{ed.detail}</p>
            </div>
          ))}
        </div>

        <div>
          <Eyebrow num="06" label="Certifications" />
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.certifications.map((c, i) => (
              <li key={i} style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: 18, alignItems: "baseline",
                padding: "16px 0",
                borderTop: "1px solid var(--rule)",
              }}>
                <span style={{
                  fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--ink-3)",
                  letterSpacing: ".06em",
                }}>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <div style={{ fontSize: 16, color: "var(--ink)", lineHeight: 1.4 }}>
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, borderBottom: "1px solid var(--rule)" }}
                      >
                        {c.name} <IconArrowOut size={12} />
                      </a>
                    ) : c.name}
                  </div>
                  <div style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--ink-3)", marginTop: 4, letterSpacing: ".04em" }}>{c.org}</div>
                </span>
                <span style={{ fontFamily: "var(--f-mono)", fontSize: 12, color: "var(--accent-2)", letterSpacing: ".06em" }}>{c.when}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// ── Courses (sage band) ────────────────────────────────────────────────────
const Courses = ({ data }) => (
  <section id="courses" data-screen-label="08 Courses" style={{
    padding: "var(--sec-y) 0",
    background: "var(--accent)",
    color: "var(--paper)",
    position: "relative", overflow: "hidden",
  }}>
    {/* Decorative repeating stripe */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none",
      backgroundImage: "repeating-linear-gradient(45deg, transparent 0 40px, rgba(255,255,255,.04) 40px 41px)",
    }} />

    <div className="container" style={{ position: "relative" }}>
      <div className="eyebrow" style={{ color: "rgba(246,241,228,.7)" }}>
        <span>Continuing study</span>
        <span className="bar" style={{ background: "rgba(246,241,228,.2)" }} />
      </div>

      <ul className="reveal" style={{
        listStyle: "none", padding: 0, margin: 0,
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "clamp(8px, 1.4vw, 16px)",
      }}>
        {data.courses.map((c, i) => (
          <li key={i} style={{
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 14, padding: "18px 0",
          }}>
            <span style={{
              fontFamily: "var(--f-mono)", fontSize: 10,
              letterSpacing: ".16em", textTransform: "uppercase",
              color: "rgba(246,241,228,.7)",
              border: "1px solid rgba(246,241,228,.35)",
              padding: "3px 8px", borderRadius: 99, textAlign: "center",
              display: "inline-block",
            }}>{c.kind}</span>
            <span style={{ fontSize: 16, color: "var(--paper)", lineHeight: 1.4 }}>
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, borderBottom: "1px solid rgba(246,241,228,.35)" }}
                >
                  {c.name} <IconArrowOut size={12} />
                </a>
              ) : c.name}
            </span>
            <span style={{
              fontFamily: "var(--f-mono)", fontSize: 11,
              color: "rgba(246,241,228,.7)", letterSpacing: ".04em",
              whiteSpace: "nowrap",
            }}>{c.org}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

// ── Footer / Contact ───────────────────────────────────────────────────────
const handleAtUrl = (url, fallback) => {
  if (!url) return fallback;
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : fallback;
  } catch (e) { return fallback; }
};

const Footer = ({ data }) => {
  const liHandle = handleAtUrl(data.links.linkedin, "jessicabrinegar");
  const ghHandle = handleAtUrl(data.links.github,   "jessicabrinegar");
  return (
  <footer id="contact" data-screen-label="09 Contact" style={{
    padding: "var(--sec-y) 0 60px",
    background: "var(--ink)",
    color: "var(--paper)",
  }}>
    <div className="container">
      <div style={{
        fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".22em",
        textTransform: "uppercase", color: "rgba(246,241,228,.55)",
        marginBottom: 48,
      }}>
        Get in touch
      </div>

      <h2 className="reveal" style={{
        marginBottom: 56, color: "var(--paper)",
        maxWidth: "18ch", fontSize: "clamp(40px, 6vw, 88px)",
      }}>
        Let's build something{" "}
        <em style={{ color: "var(--accent)", fontStyle: "italic" }}>useful</em>.
      </h2>

      <div className="reveal d1" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 28,
        borderTop: "1px solid rgba(246,241,228,.15)",
        paddingTop: 28,
      }}>
        <a href={`mailto:${data.links.email}`} style={{
          display: "flex", flexDirection: "column", gap: 6,
        }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".18em",
            color: "rgba(246,241,228,.55)", textTransform: "uppercase" }}>Email</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 18 }}>
            <IconMail size={16} /> {data.links.email}
          </span>
        </a>
        <a href={data.links.linkedin} target="_blank" rel="noreferrer" style={{
          display: "flex", flexDirection: "column", gap: 6,
        }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".18em",
            color: "rgba(246,241,228,.55)", textTransform: "uppercase" }}>LinkedIn</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 18 }}>
            <IconLinkedIn size={16} /> /in/{liHandle} <IconArrowOut size={12} />
          </span>
        </a>
        <a href={data.links.github} target="_blank" rel="noreferrer" style={{
          display: "flex", flexDirection: "column", gap: 6,
        }}>
          <span style={{ fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".18em",
            color: "rgba(246,241,228,.55)", textTransform: "uppercase" }}>GitHub</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 18 }}>
            <IconGitHub size={16} /> @{ghHandle} <IconArrowOut size={12} />
          </span>
        </a>
      </div>

      <div style={{
        marginTop: 80, paddingTop: 24,
        borderTop: "1px solid rgba(246,241,228,.15)",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10,
        fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".12em",
        color: "rgba(246,241,228,.5)", textTransform: "uppercase",
      }}>
        <span>© {new Date().getFullYear()} {data.name}</span>
      </div>
    </div>
  </footer>
  );
};

Object.assign(window, {
  useReveal, Eyebrow, RailNav,
  Hero, About, Skills, Experience, Projects,
  EducationCerts, Courses, Footer,
});
