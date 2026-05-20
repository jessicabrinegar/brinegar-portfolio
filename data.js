// All portfolio content lives here so it's easy to edit.
window.PORTFOLIO = {
  name: "Jessica Mae Brinegar",
  role: "Software Engineer",
  city: "Remote - I travel often and am open to relocation",
  hero: {
    titleLines: [
      "Software engineer",
      "following curiosity",
    ],
    sub: "After ten years of following my curiosity through healthcare, academia, and science journalism, I now build software. I have backend and cloud platform engineering experience, with a focus on microservices architecture, AWS infrastructure, data pipelines, event-driven services, infrastructure-as-code, observability, and internal tooling for healthcare technology systems."
  },
  about: {
    paragraphs: [
      "Having spent the last 10+ years following my curiosity, I have experience in various fields: healthcare, academia, and science journalism, to name a few. While studying cognitive science, I discovered my passion for programming, data analysis, and data visualization. This led me to shift gears to pursue a career in programming.",
      "From my diverse background I acquired a profound understanding of myself and what makes me tick. I now know that I need collaborative work that challenges me, benefits my community, and enhances my curiosity. I am currently seeking a role that takes advantage of my analytical mind, attention to detail, and unwavering excitement to continually learn while building projects that matter."
    ],
    quickFacts: [
      ["Now",    "Software Engineer · Electronic Caregiver"],
      ["Stack",  "TypeScript · NestJS · React · C#/.NET · AWS"],
      ["Based",  "Remote"],
      ["Email",  "jessicabrinegar@outlook.com"]
    ]
  },
  links: {
    email:    "jessicabrinegar@outlook.com",
    linkedin: "https://www.linkedin.com/in/jessicabrinegar/",
    github:   "https://github.com/jessicabrinegar",
    resume:   "resume.html"
  },

  skills: [
    {
      group: "Languages",
      items: [
        { mark: "TS",  name: "TypeScript", icon: "typescript" },
        { mark: "C#",  name: "C#",         icon: "sharp" },
        { mark: "Py",  name: "Python",     icon: "python" },
        { mark: "SQL", name: "SQL" }
      ]
    },
    {
      group: "Frameworks",
      items: [
        { mark: "Ne", name: "NestJS",   icon: "nestjs" },
        { mark: "TO", name: "TypeORM",  icon: "typeorm" },
        { mark: ".N", name: ".NET",     icon: "dotnet" },
        { mark: "Re", name: "React.js", icon: "react" },
        { mark: "Nx", name: "Next.js",  icon: "nextdotjs" }
      ]
    },
    {
      group: "Data",
      items: [
        { mark: "Pg", name: "PostgreSQL", icon: "postgresql" },
        { mark: "Dy", name: "DynamoDB" },
        { mark: "Mo", name: "MongoDB",    icon: "mongodb" },
        { mark: "Rd", name: "Redis",      icon: "redis" },
        { mark: "Pd", name: "Python analytics libraries (pandas, numpy, matplotlib)", icon: "pandas" }
      ]
    },
    {
      group: "Tools",
      items: [
        { mark: "Gt",  name: "Git/Github",  icon: "github" },
        { mark: "CC",  name: "Claude Code", icon: "anthropic" },
        { mark: "Cx",  name: "Codex" },
        { mark: "Dk",  name: "Docker",      icon: "docker" },
        { mark: "DD",  name: "DataDog",     icon: "datadog" },
        { mark: "AWS", name: "AWS (Lambda, S3, CloudWatch, etc)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
      ]
    },
    {
      group: "Design",
      items: [
        { mark: "Ai", name: "Illustrator",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
        { mark: "Id", name: "InDesign" },
        { mark: "Ps", name: "Photoshop",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
        { mark: "Ae", name: "After Effects", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg" }
      ]
    }
  ],

  experience: [
    {
      role: "Software Engineer",
      org:  "Electronic Caregiver",
      when: "May 2023 — Present",
      where:"",
      bullets: [
        "Build and maintain backend microservices, cloud infrastructure, data pipelines, and internal tooling for healthcare technology systems.",
        "Design and support event-driven services integrating third-party hardware device APIs into internal platforms.",
        "Improve observability, reliability, and deployment patterns across distributed services supporting care delivery workflows."
      ]
    },
    {
      role: "Coding Mentor",
      org:  "4Geeks Academy",
      when: "March 2023 — May 2023",
      where:"",
      bullets: [
        "Facilitated meetings with coding bootcamp students to support assigned projects and core programming concepts."
      ]
    },
    {
      role: "Scientific Researcher",
      org:  "New Mexico State University",
      when: "2020 — 2022",
      where:"Las Cruces, NM",
      bullets: [
        "Investigated inattentional deafness with socially-relevant stimuli, and how human attention-allocation strategies differ between urban and natural environments.",
        "Developed a novel protocol to visualize myogenic stem cells in the weakly electric fish Sternopygus macrurus, contributing to the understanding of its regenerative capabilities."
      ]
    },
    {
      role: "Science Journalist",
      org:  "NMSU · Psychonomic Society",
      when: "2022",
      where:"Las Cruces, NM",
      bullets: [
        "Covered scientific research being conducted at NMSU, and was a guest author for the Psychonomic Society."
      ],
      url: "https://featuredcontent.psychonomic.org/author/jessica-brinegar/",
      urlLabel: "Psychonomic Society articles"
    },
    {
      role: "Research Methods Lab Instructor",
      org:  "New Mexico State University",
      when: "Spring 2022",
      where:"Las Cruces, NM",
      bullets: [
        "Created lectures, facilitated group activities, and oversaw research projects.",
        "Taught: science ethics, experimental design, data analysis, report writing, and presenting results."
      ]
    },
    {
      role: "Medical Assistant",
      org:  "Associates of Otolaryngology · Mountainview Regional Medical Center ER",
      when: "2017 — 2020",
      where:"Las Cruces, NM • Denver, CO",
      bullets: []
    }
  ],

  education: [
    {
      school:"New Mexico State University",
      degree:"M.S. coursework, Cognitive Psychology",
      when:  "2021 — 2022",
      detail:"Twenty-two credits in scientific research, statistical analysis, and computer programming — with an emphasis on data analysis and visualization. GPA: 4.0."
    },
    {
      school:"New Mexico State University",
      degree:"B.S. in Biology",
      when:  "2013 — 2017",
      detail:"GPA: 3.6."
    }
  ],

  certifications: [
    {
      name: "AWS Certified Developer – Associate",
      org:  "Amazon Web Services",
      when: "August 7, 2025",
      url:  "https://www.credly.com/badges/f78c5f92-1896-4ec3-a4f4-fb92c318db09/public_url"
    },
    {
      name: "Full-Stack Development",
      org:  "4Geeks Academy",
      when: "Dec 2022 — Apr 2023",
      url: "https://certificate.4geeks.com/629f23a84593085f8e41f0495adc2801c0278071"
    }
  ],

  courses: [
    { kind: "Course/Track", name: "Associate Data Engineer in SQL",     org: "DataCamp", url: "https://www.datacamp.com/tracks/associate-data-engineer-in-sql" },
    { kind: "Course/Track", name: "Associate Data Scientist in Python", org: "DataCamp", url: "https://www.datacamp.com/tracks/associate-data-scientist-in-python" },
    { kind: "Course/Track", name: "CS50x: Introduction to Computer Science", org: "Harvard University, EdX", url: "https://www.aws.training/certification/certified-developer-associate" },
    { kind: "Workshop", name: "Claude Code Deep Dive", org: "Frontend Masters", url: "https://frontendmasters.com/workshops/advanced-claude-code/" }

  ],

  projects: [
      {
      slug: "hw-events-data-pipeline",
      title: "Hardware Events Data Pipeline",
      tagline: "End-to-end data ingestion, processing, and visualization pipeline.",
      summary:
        "A healthcare hardware data pipeline powering device health analytics dashboards.",
      tags: ["Lambda", "PySpark", "Athena", "QuickSight"],
      year: "2025",
      role: "Software/data engineer",
      swatch: ["#7A8B6F", "#C9B89A"],
      image: "",
      link: { kind: "internal", url: "hwe.html" }
    },
    {
      slug: "lardr",
      title: "Lardr",
      tagline: "A recipe and meal plan management application.",
      summary:
        "A full-stack web application for managing recipes, meal plans, and kitchen inventory.",
      tags: ["Next.js", "Convex", "Tailwind CSS"],
      year: "2026",
      role: "Full-stack developer",
      swatch: ["#7A8B6F", "#C9B89A"],
      image: "images/lardr.png",
      link: { kind: "internal", url: "https://lardr-app.vercel.app/" }
    },
    {
      slug: "null-not-nothing",
      title: "Null, Not Nothing",
      tagline: "Full-stack capstone project.",
      summary:
        "A full-stack web project built as my 4Geeks Academy capstone — practicing end-to-end product development from database to UI.",
      tags: ["React", "Python", "Flask"],
      year: "2023",
      role: "Full-stack developer",
      swatch: ["#7A8B6F", "#C9B89A"],
      image: "images/n3.png",
      link: { kind: "internal", url: "n3.html" }
    },
    {
      slug: "nmsu-salary-insights",
      title: "NMSU Salary Insights",
      tagline: "Exploring NMSU payroll data.",
      summary:
        "Data analysis and visualization project exploring salary distributions across departments at New Mexico State University.",
      tags: ["Python", "Pandas", "Matplotlib"],
      year: "2022",
      role: "Solo project",
      swatch: ["#C9B89A", "#7A8B6F"],
      image: "images/nmsu-salary-insights.jpg",
      link: { kind: "internal", url: "nmsu-employees.html" }
    },
    {
      slug: "todo-list",
      title: "Todo List",
      tagline: "Classic todo-list app.",
      summary:
        "A simple todo-list application built to practice DOM manipulation and front-end state handling.",
      tags: ["HTML", "CSS", "JavaScript"],
      year: "2023",
      role: "Solo project",
      swatch: ["#A0B395", "#2B2A26"],
      image: "images/todo-list.png",
      link: { kind: "external", url: "https://jessicabrinegar.github.io/todo-list/" }
    },
    {
      slug: "bootstrap-photo-feed",
      title: "Bootstrap Photo Feed",
      tagline: "Bootstrap-styled photo feed.",
      summary:
        "A responsive Instagram-style photo feed built with Bootstrap to practice grid layout and component composition.",
      tags: ["HTML", "CSS", "Bootstrap"],
      year: "2023",
      role: "Solo project",
      swatch: ["#C9B89A", "#5C6E54"],
      image: "images/instafeed.png",
      link: { kind: "external", url: "https://jessicabrinegar.github.io/bootstrap-instafeed/" }
    },
    {
      slug: "eye-on-psy",
      title: "Eye on Psy",
      tagline: "Editorial design — psychology magazine.",
      summary:
        "An editorial publication on cognitive psychology research, designed and laid out in Adobe InDesign.",
      tags: ["InDesign", "Illustrator"],
      year: "2022",
      role: "Designer · Editor",
      swatch: ["#5C6E54", "#C9B89A"],
      image: "images/eye-on-psy.png",
      link: { kind: "external", url: "https://indd.adobe.com/view/8c7d8d4d-07ba-43ac-aae0-bd9670ea3029" }
    }
  ]
};
