// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Bhushan Patil",
  initials: "BP",
  headline: "Software Engineer (Full Stack) | End-to-End Product Builder",
  tagline: "C# / .NET · Python · React (Vite) · MS SQL Server · Azure",
  location: "Jalgaon, Maharashtra, India",
  email: "bhushanpatil8551@gmail.com",
  phone: "8551064926",
  // Paste your real profile URLs. Empty strings hide the buttons.
  linkedin: "",
  github: "",
  // Put your resume PDF in /public (e.g. public/Bhushan_Patil_Resume.pdf) and set:
  // resumeUrl: "/Bhushan_Patil_Resume.pdf"
  resumeUrl: "",
};

export const about = [
  "Full stack engineer who independently owns the entire product lifecycle — requirement clarification, data modeling, UI design, API development, and Azure deployment.",
  "I combine a professional foundation in enterprise .NET/C# development with self-driven mastery of AI-assisted tooling (Cursor, GitHub Copilot) and a Python / React (Vite) / MS SQL Server stack to build and ship complete applications solo.",
  "I'm positioned to function as a one-person product team for early-stage companies — from stakeholder requirements to a live, deployed system on Azure App Services with Azure SQL Database.",
];

export const strengths = [
  {
    title: "End-to-end ownership",
    text: "Take a product from a one-line idea to a deployed, working application without handoffs — requirements, data modeling, UI/UX, backend APIs, and cloud deployment.",
  },
  {
    title: "AI-accelerated development",
    text: "Fluent with Cursor and GitHub Copilot to design, scaffold, debug, and ship production code across Python, C#/.NET, and React (Vite) significantly faster than traditional solo development.",
  },
  {
    title: "Cloud-native deployment",
    text: "Experienced deploying and operating live applications on Azure App Services with Azure SQL Database, including configuration, scaling, and ongoing maintenance.",
  },
  {
    title: "Requirements to architecture",
    text: "Turn ambiguous stakeholder requests into a clear data model and system design, then execute against it without constant oversight.",
  },
  {
    title: "Low-overhead delivery",
    text: "Built and shipped multiple real-world applications independently — ideal for teams that need one accountable engineer rather than a multi-person dev team early on.",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "AlongX Software",
    location: "Hyderabad, India",
    period: "May 2024 – Present",
    bullets: [
      "Built and maintained secure, scalable RESTful APIs in C# / .NET, including stored procedure design and query optimization in MS SQL Server for high-performance data operations.",
      "Designed event-driven, automated workflows using Azure Function Apps, Logic Apps, and Event Hubs, reducing manual process overhead for business operations.",
      "Owned full feature delivery across the stack — database schema, backend logic, and responsive UI (HTML, CSS, JavaScript, jQuery/AJAX) — translating evolving stakeholder requirements into shipped features.",
      "Took ownership of debugging, code quality, and reviews to ensure dependable, production-ready releases.",
    ],
  },
];

export const delivery = {
  intro:
    "Independently designed, built, and deployed three complete end-to-end applications, each carried solo from concept to production.",
  steps: [
    {
      title: "Requirements & data design",
      text: "Ran the discovery process personally — clarified feature requirements, then designed and built the underlying database schema from scratch (mock and production).",
    },
    {
      title: "Frontend & UX",
      text: "Designed and implemented the user interface and experience using React (Vite), focused on usability and responsiveness without a separate design team.",
    },
    {
      title: "Backend & APIs",
      text: "Built application logic and APIs in Python, integrated with MS SQL Server for data persistence.",
    },
    {
      title: "Deployment & operations",
      text: "Deployed and managed each application end-to-end on Azure App Services with an Azure-hosted SQL database, handling configuration, release, and ongoing upkeep without external DevOps support.",
    },
    {
      title: "AI-assisted workflow",
      text: "Used Cursor and GitHub Copilot throughout to accelerate development velocity while maintaining solo accountability for architecture and quality.",
    },
  ],
};

// Project links support live websites, Google Play listings, and source repositories.
export const projects = [
  {
    name: "Sanyuj",
    description:
      "Built and launched Sanyuj, available on the web and as an Android app on Google Play.",
    live: "https://sanyuj.vercel.app/",
    playStore: "https://play.google.com/store/apps/details?id=app.sanyuj",
  },
];

export const skills = [
  { group: "Languages", items: ["C#", "Python", "JavaScript"] },
  {
    group: "Backend",
    items: [".NET", ".NET Core", "ASP.NET Web API", "Entity Framework", "Python (application & API development)"],
  },
  {
    group: "Frontend",
    items: ["React (Vite)", "HTML", "CSS", "Bootstrap", "jQuery (AJAX)", "Angular (working knowledge)"],
  },
  {
    group: "Database",
    items: ["Microsoft SQL Server", "Schema design", "Stored procedures", "Query optimization", "Azure SQL Database"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Azure App Services", "Azure Function Apps", "Logic Apps", "Event Hubs", "Azure Boards", "CI/CD pipelines"],
  },
  { group: "AI-assisted development", items: ["Cursor", "GitHub Copilot"] },
  { group: "Version control", items: ["Git", "GitHub"] },
  { group: "Foundations", items: ["Data Structures & Algorithms", "System & requirement design"] },
];

export const education = [
  { school: "CDAC Mumbai", degree: "PG Diploma, IT (CDAC)", period: "March 2024" },
  { school: "NMKCE, Jalgaon", degree: "B.Tech, Mechanical Engineering", period: "2021 – 2023", note: "CGPA 8.23" },
  { school: "SGDCOE, Jalgaon", degree: "Diploma, Automobile Engineering", period: "2019 – 2020", note: "83.24%" },
];

export const certifications = ["Technical Certification in Artificial Intelligence"];

export const languages = ["English", "Hindi", "Marathi"];

// Rotating phrases in the hero ("I build ...")
export const roles = [
  "end-to-end products",
  "REST APIs in .NET and Python",
  "React interfaces",
  "event-driven Azure workflows",
  "live apps on Azure App Services",
];

export const stats = [
  { value: 3, label: "apps shipped solo" },
  { value: 5, label: "Azure services used" },
  { value: 3, label: "core languages" },
];

export const marquee = [
  "C#", ".NET", "Python", "React", "Vite", "MS SQL Server", "Azure App Services",
  "Function Apps", "Logic Apps", "Event Hubs", "REST APIs", "Cursor", "GitHub Copilot", "Git",
];

// Animated "idea to live" pipeline
export const flow = [
  {
    icon: "clipboard",
    title: "Requirements",
    text: "Ran the discovery process personally — clarifying feature requirements and turning a one-line idea into a clear scope.",
    tools: "Stakeholder discovery · scoping",
  },
  {
    icon: "database",
    title: "Data model",
    text: "Designed and built the database schema from scratch, for both mock and production environments.",
    tools: "MS SQL Server · Azure SQL Database",
  },
  {
    icon: "code",
    title: "Backend & APIs",
    text: "Built the application logic and APIs in Python, integrated with MS SQL Server for data persistence.",
    tools: "Python · C# / .NET · REST",
  },
  {
    icon: "layout",
    title: "React UI",
    text: "Designed and implemented the interface in React (Vite), focused on usability and responsiveness without a separate design team.",
    tools: "React · Vite · HTML / CSS",
  },
  {
    icon: "cloud",
    title: "Azure deploy",
    text: "Deployed and managed each app end to end on Azure App Services with an Azure-hosted SQL database — configuration, release and ongoing upkeep.",
    tools: "Azure App Services · Azure SQL",
  },
];
