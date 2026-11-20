// Each project becomes a card on the home page and its own detail page (/project/:id)
// Put screenshots in public/projects/ and write the path like "/projects/ecommerce.png"
// If the image is missing, the card shows a gradient instead.

export const projects = [
  {
    id: "veggies-ecommerce",
    title: "Veggies E-Commerce",
    category: "Full-Stack · MERN",
    tagline: "Multi-vendor vegetable marketplace with role-based dashboards.",
    description:
      "A full-stack e-commerce platform where customers can browse and order fresh vegetables, merchants manage their own products and orders, and admins approve merchants and oversee the whole store.",
    image: "/projects/ecommerce.png",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Cloudinary"],
    role: "Full-stack developer (design, frontend, backend)",
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
      "A learning platform where instructors publish courses and students enroll and learn. Built end to end with a React frontend and a REST API backend.",
    image: "/projects/lms.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    role: "Full-stack developer",
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
    image: "/projects/chat.png",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    role: "Backend developer",
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
    image: "/projects/api.png",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    role: "Backend developer",
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
    image: "/projects/integration.png",
    tech: ["React", "Axios", "REST API", "CSS"],
    role: "Frontend developer",
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
    image: "/projects/figma-next.png",
    tech: ["Next.js", "Tailwind CSS", "Figma"],
    role: "Frontend developer",
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
    image: "/projects/figma-react.png",
    tech: ["React", "CSS", "Figma"],
    role: "Frontend developer",
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
    image: "/projects/figma-html.png",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    role: "Frontend developer",
    features: [
      "Semantic HTML structure",
      "Flexbox and Grid layouts",
      "Mobile-first responsive design",
    ],
    liveUrl: "",
    githubUrl: "",
  },
];