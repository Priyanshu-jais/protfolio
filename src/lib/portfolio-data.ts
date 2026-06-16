export const profile = {
  name: "Priyanshu Jaiswal",
  roles: ["Software Engineer", "Backend Developer", "Android Developer"],
  tagline:
    "I build scalable backends, real-time systems and delightful apps — from Go microservices to Kotlin Multiplatform.",
  location: "Gwalior / Bengaluru, India",
  email: "priyanshujaiswal184@gmail.com",
  phone: "+91-9118710436",
  socials: {
    github: "https://github.com/Priyanshu-jais",
    linkedin: "https://www.linkedin.com/in/priyanshu-jaiswal-863a63258/",
    leetcode: "https://leetcode.com/u/priyanshujaiswal184/",
    codolio: "https://codolio.com/profile/Priyanshu03",
  },
  about:
    "I'm a final-year Information Technology student at IIIT Gwalior (CGPA 8.27) who loves turning complex problems into clean, performant systems. I've shipped production backends serving hundreds of concurrent users, built cross-platform apps with Kotlin Multiplatform, and contributed to design systems. Beyond code, I serve as an Executive at the Student Gyan Movement (SGM), where I help organize learning initiatives and mentor peers. Competitive programming keeps my fundamentals sharp — 1500+ problems solved across platforms.",
};

export const stats = [
  { value: "1500+", label: "DSA Problems Solved" },
  { value: "20+", label: "Go REST APIs Built" },
  { value: "3", label: "Engineering Internships" },
  { value: "8.27", label: "CGPA / 10" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C++", "Go", "Kotlin", "JavaScript", "TypeScript", "Python", "Java", "SQL"] },
  {
    group: "Backend",
    items: ["Go REST APIs", "Node.js", "Express.js", "Ktor", "Redis", "WebSocket", "Kafka", "Agora SDK", "Microservices"],
  },
  {
    group: "Frontend / Mobile",
    items: ["Kotlin Multiplatform", "Jetpack Compose", "React.js", "Next.js", "SDUI", "Tailwind CSS", "D3.js"],
  },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "Redis", "Prisma ORM"] },
  { group: "Cloud / DevOps", items: ["AWS S3", "Docker", "Git", "Firebase", "Postman", "Mixpanel", "Vercel"] },
];

export const experience = [
  {
    company: "AppsForBharat",
    role: "Software Developer Intern",
    period: "Jan 2026 – Jul 2026",
    location: "Bengaluru, India",
    stack: "Go · PostgreSQL · Redis · Kotlin Multiplatform · Jetpack Compose",
    points: [
      "Built 20+ RESTful Go APIs and designed 12 PostgreSQL tables for Daily Darshan & Daily Dharma covering users, temple metadata, broadcast sessions, wallet and microtransactions.",
      "Integrated Agora SDK backend supporting 200+ concurrent devotees per stream with auto-recording archival to AWS S3 and offline auto-disconnect triggers.",
      "Built live chat with Redis-backed persistence, virtual offerings, event alarms and a Temple Profile module via SDUI with zero app-release updates.",
      "Built a cross-app Partner App (KMP) for pandits and added 100+ Mixpanel analytics events via a shared Vision SDK; contributed to Tatva design system and Pixy sandbox.",
    ],
  },
  {
    company: "NoblesseTech",
    role: "Software Development Engineer Intern",
    period: "May 2025 – Jul 2025",
    location: "Remote, India",
    stack: "Node.js · WebSocket · MongoDB",
    points: [
      "Engineered a secure full-stack dating platform with multi-factor auth, role-based access and personalized match discovery — reduced bounce rate and improved retention by 20%.",
      "Implemented real-time chat, swipe-based discovery and geolocation filtering for 500+ users with sub-200ms latency via WebSocket optimization.",
      "Integrated a cloud-optimized media pipeline using Cloudinary and Gmail SMTP for secure, scalable media delivery.",
    ],
  },
  {
    company: "ISRO – Space Applications Centre",
    role: "Research & Development Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Ahmedabad, India",
    stack: "D3.js · JavaScript · SVG Optimization",
    points: [
      "Developed an interactive EID visualization tool using D3.js, reducing circuit analysis time by 30% across 25+ satellite wiring diagrams.",
      "Optimized the SVG rendering pipeline to handle 500+ nodes and connections, improving performance by 40% and enabling engineers to debug 3x faster.",
      "Boosted system traceability and mission-readiness by reducing manual circuit analysis errors across ISRO SAC operations.",
    ],
  },
];

export const leadership = {
  org: "Student Gyan Movement (SGM)",
  role: "Executive",
  location: "ABV-IIITM, Gwalior",
  points: [
    "Serve as an Executive driving student-led learning initiatives, peer mentorship and knowledge-sharing sessions across the campus community.",
    "Organize technical workshops, coding sessions and outreach programs that help juniors build strong fundamentals in DSA and development.",
    "Coordinate teams and events end-to-end — from planning to execution — fostering a collaborative, growth-focused learning culture.",
  ],
};

export const projects = [
  {
    name: "Cake Wake",
    period: "2025",
    stack: ["Microservices", "Node.js", "MongoDB", "WebSocket", "JWT", "Cloudinary"],
    description:
      "A full-stack custom cake ordering platform built on a microservices architecture, connecting customers, vendors, delivery partners and administrators through dedicated services and apps.",
    points: [
      "Built a real-time custom cake designer and WebSocket-based order broadcasting system for seamless customization and instant order updates across stakeholders.",
      "Designed secure REST APIs with Node.js, MongoDB, JWT authentication and role-based access control, integrating Cloudinary for scalable media management.",
      "Implemented GPS-based delivery tracking, automated fulfillment workflows and real-time order lifecycle management for end-to-end visibility from placement to delivery.",
    ],
  },
  {
    name: "FlowForge",
    period: "Apr 2025 – May 2025",
    stack: ["Node.js", "PostgreSQL", "Kafka", "Redis", "Razorpay", "Next.js", "TypeScript"],
    description:
      "A Zapier-inspired workflow automation platform enabling users to create event-driven automations across multiple third-party services through configurable triggers and actions.",
    points: [
      "Designed a scalable microservices architecture using Node.js, PostgreSQL, Kafka and Redis to support asynchronous workflow execution, event processing and fault-tolerant task orchestration.",
      "Developed a distributed workflow execution engine with Kafka-based queues, retry mechanisms, idempotency guarantees and failure recovery for reliable automation processing.",
      "Integrated Razorpay subscriptions, authentication, execution monitoring and workflow analytics, delivering a complete end-to-end automation platform.",
    ],
  },
];

export const achievements = [
  { value: "Knight", label: "LeetCode — Rating 1868" },
  { value: "Specialist", label: "Codeforces — Rating 1553" },
  { value: "3★", label: "CodeChef — Rating 1720" },
  { value: "Rank 225", label: "Global · CodeChef Starters 148D" },
  { value: "Finalist", label: "Meesho Dice Challenge" },
  { value: "1500+", label: "Problems solved across platforms" },
];

export const education = {
  school: "ABV – Indian Institute of Information Technology & Management, Gwalior",
  degree: "Bachelor of Information Technology",
  period: "2022 – 2026",
  detail: "CGPA: 8.27 / 10 · Gwalior, India",
};
