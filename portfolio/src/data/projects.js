// images: 3 Cloudinary Public IDs per project (first one is the card thumbnail).
// Replace the placeholder IDs below with the real Public IDs from your Media Library.

export const projects = [
  {
    id: "veggies-ecommerce",
    title: "Veggies E-Commerce",
    category: "Full-Stack · MERN",
    tagline: "Multi-vendor vegetable marketplace with role-based dashboards.",
    description:
      "A full-stack e-commerce platform where customers browse and order fresh vegetables, merchants manage their own products and orders, and admins approve merchants and oversee the whole store.",
    problem:
      "Small vegetable sellers need one place to list products and manage orders, while customers want a simple way to shop from several merchants at once.",
    solution:
      "I built a store with three roles (user, merchant, admin), protected dashboards, product management with image upload, and a cart that creates one order per merchant.",
    images: ["veggies-1", "veggies-2", "veggies-3"],
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary"],
    role: "Full-stack developer (design, frontend, backend)",
    priceRange: "$250 – $600",
    timeline: "2 – 4 weeks",
    features: [
      "Three roles (user, merchant, admin) with protected routes",
      "Product and category management with image upload",
      "Search, filter, sort and pagination",
      "Cart and orders, with one order created per merchant",
      "Role-wise dashboards and profile management",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/ayeshatahsin11/E-Commerce_01",
  },
  {
    id: "lms-platform",
    title: "LMS Platform",
    category: "Full-Stack · MERN",
    tagline: "Learning management system for courses, students and instructors.",
    description:
      "A learning platform where instructors publish courses and students enroll and learn, built end to end with a React frontend and a REST API backend.",
    problem:
      "Instructors need a simple way to publish courses and track students, and learners need one place to enroll and study.",
    solution:
      "I built course creation, enrollment, and separate student and instructor dashboards on top of a secure REST API.",
    images: ["lms-1", "lms-2", "lms-3"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    role: "Full-stack developer",
    priceRange: "$300 – $700",
    timeline: "3 – 5 weeks",
    features: [
      "Authentication and role-based access",
      "Course creation and enrollment",
      "Student and instructor dashboards",
      "REST API with secure endpoints",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "chat-api",
    title: "Real-Time Chat API",
    category: "Backend · API",
    tagline: "Chat backend with messaging, users and conversations.",
    description:
      "A chat application backend that handles user accounts, conversations and messages, ready to plug into any frontend.",
    problem:
      "Apps that need messaging want a ready backend they can connect to without building it from scratch.",
    solution:
      "I built an API for users, conversations and messages with stored history, and documented the endpoints so a frontend can plug straight in.",
    images: ["chat-1", "chat-2", "chat-3"],
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    role: "Backend developer",
    priceRange: "$80 – $200",
    timeline: "1 – 2 weeks",
    features: [
      "User authentication",
      "One-to-one messaging",
      "Conversation history stored in MongoDB",
      "Clean, documented REST endpoints",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "rest-api",
    title: "REST API Project",
    category: "Backend · API",
    tagline: "Structured and scalable REST API with clean architecture.",
    description:
      "A production-style REST API with models, controllers, routes and middleware, built to be easy to extend and maintain.",
    problem:
      "Messy backends are hard to grow. Projects need an API with a clear structure from day one.",
    solution:
      "I organised the API into models, controllers, routes and middleware, with validation and error handling built in.",
    images: ["api-1", "api-2", "api-3"],
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    role: "Backend developer",
    priceRange: "$50 – $150",
    timeline: "3 – 7 days",
    features: [
      "CRUD operations with validation",
      "Authentication and authorization middleware",
      "Error handling and clean folder structure",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "api-integration",
    title: "API Integration App",
    category: "Frontend · React",
    tagline: "Frontend app consuming and displaying live API data.",
    description:
      "A React application that connects to external and custom APIs, handles loading and error states, and presents the data in a clean interface.",
    problem:
      "Raw API data is useless to end users until it is presented clearly and handles slow or failed requests gracefully.",
    solution:
      "I connected the app to the APIs and built a clean interface with loading and error states and reusable components.",
    images: ["integration-1", "integration-2", "integration-3"],
    tech: ["React", "Axios", "REST API", "CSS"],
    role: "Frontend developer",
    priceRange: "$30 – $100",
    timeline: "2 – 5 days",
    features: [
      "Data fetching with loading and error states",
      "Reusable components",
      "Responsive layout",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "figma-to-nextjs",
    title: "Figma to Next.js",
    category: "Frontend · Next.js",
    tagline: "Pixel-perfect Next.js website converted from a Figma design.",
    description:
      "A Figma design turned into a fast, responsive Next.js website that matches the original layout, spacing and typography.",
    problem:
      "A great design loses its value if the live website doesn't match it or is slow on phones.",
    solution:
      "I rebuilt the design in Next.js with Tailwind CSS, matching spacing and typography and making it fully responsive.",
    images: ["figma-next-1", "figma-next-2", "figma-next-3"],
    tech: ["Next.js", "Tailwind CSS", "Figma"],
    role: "Frontend developer",
    priceRange: "$70 – $150",
    timeline: "4 – 7 days",
    features: [
      "Pixel-perfect match with the design",
      "Fully responsive on all screen sizes",
      "Optimized with Next.js",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "figma-to-react",
    title: "Figma to React",
    category: "Frontend · React",
    tagline: "Component-based React interface built from a Figma design.",
    description:
      "A complete design implemented as reusable React components with clean, maintainable code.",
    problem:
      "Designs need to become code that other developers can easily extend, not a one-off page.",
    solution:
      "I split the design into reusable React components with clean structure and a responsive layout.",
    images: ["figma-react-1", "figma-react-2", "figma-react-3"],
    tech: ["React", "CSS", "Figma"],
    role: "Frontend developer",
    priceRange: "$50 – $120",
    timeline: "3 – 6 days",
    features: [
      "Reusable component structure",
      "Responsive design",
      "Clean, readable code",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: "figma-to-html",
    title: "Figma to HTML",
    category: "Frontend · HTML/CSS",
    tagline: "Responsive static website crafted from a Figma file.",
    description:
      "A static, responsive website built with semantic HTML and modern CSS, faithful to the original Figma design.",
    problem:
      "Many businesses just need a fast, simple website that looks exactly like the design they approved.",
    solution:
      "I built it with semantic HTML, Flexbox and Grid, and tested it on mobile first.",
    images: ["figma-html-1", "figma-html-2", "figma-html-3"],
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    role: "Frontend developer",
    priceRange: "$30 – $80",
    timeline: "2 – 4 days",
    features: [
      "Semantic HTML structure",
      "Flexbox and Grid layouts",
      "Mobile-first responsive design",
    ],
    liveUrl: "",
    githubUrl: "",
  },
];