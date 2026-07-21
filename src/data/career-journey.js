const now = new Date();
const TODAY = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

export const roles = [
  {
    id: "lead",
    title: "Assistant Lead Software Engineer (Frontend)",
    company: "Technext Limited",
    start: "2025-01",
    end: TODAY,
    current: true,
    bullets: [
      "Contributed to Hummingbird UI by building UI components and developing MCP server, enhancing the design system's functionality and developer tooling.",
      "Led the development team of 3 developers, reviewed teammate code, and debugged complex frontend issues to maintain high code quality and ensure consistent development standards.",
      "Received the company's 'Outstanding Team Player' award in recognition of outstanding performance and team collaboration.",
    ],
    projects: ["aurora", "hbui"],
  },
  {
    id: "fe2",
    title: "Frontend Developer II",
    company: "Technext Limited",
    start: "2024-01",
    end: "2024-12",
    current: false,
    bullets: [
      "Developed premium HTML and React templates using modern technologies like React, Next.js, TypeScript, HTML5, Material UI, Bootstrap 5, MUI, SCSS, Pug, Gulp, Webpack, and Node.js.",
      "Provided post-purchase technical support to customers, ensuring smooth integration and positive user experience.",
    ],
    projects: ["aurora", "phoenix"],
  },
  {
    id: "fe1",
    title: "Frontend Developer",
    company: "Technext Limited",
    start: "2022-06",
    end: "2023-12",
    current: false,
    bullets: [
      "Refactored and optimized existing React and HTML codebases to improve performance and maintainability.",
      "Maintained clean code and documentation using Git and followed best practices in version control.",
    ],
    projects: ["falcon", "sparrow"],
  },
];
