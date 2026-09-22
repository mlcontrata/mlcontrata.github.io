/**
 * Developer Profile Configuration
 * Update this file to customize your profile information, links, skills, and projects!
 */

const profileConfig = {
  // Personal & Hero Info
  name: "Alex Morgan",
  greeting: "Hello, world! I'm",
  roles: [
    "Full-Stack Developer",
    "Open Source Enthusiast",
    "UI/UX Enthusiast",
    "Problem Solver"
  ],
  bio: "Passionate software engineer focused on building clean, accessible, and high-performance digital experiences. Constantly exploring modern web technologies, crafting open-source tools, and turning complex ideas into elegant solutions.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80", // Replace with your image path or GitHub avatar URL: https://github.com/<username>.png
  location: "San Francisco, CA (or Remote)",
  status: "🟢 Available for new opportunities",
  resumeUrl: "#", // Add link to your PDF resume (e.g., "assets/resume.pdf" or Google Drive)

  // Social & Platform Links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "alex.morgan.dev@example.com",
    discord: "https://discord.com",
  },

  // GitHub Integration Settings
  github: {
    username: "yourusername", // Change to your GitHub username to load live stats & activity
    showStats: true,
    showTopLangs: true,
    showStreak: true,
  },

  // Quick Stats displayed in About section
  quickStats: [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Open Source Repos", value: "15+" },
    { label: "Git Commits", value: "1,200+" }
  ],

  // Skills organized by category
  skills: {
    "Languages": [
      { name: "JavaScript (ES6+)", icon: "fab fa-js-square", level: "Advanced" },
      { name: "TypeScript", icon: "fas fa-code", level: "Advanced" },
      { name: "Python", icon: "fab fa-python", level: "Intermediate" },
      { name: "HTML5 & CSS3", icon: "fab fa-html5", level: "Expert" },
      { name: "SQL", icon: "fas fa-database", level: "Intermediate" }
    ],
    "Frontend": [
      { name: "React.js", icon: "fab fa-react", level: "Advanced" },
      { name: "Next.js", icon: "fas fa-globe", level: "Intermediate" },
      { name: "Tailwind CSS", icon: "fas fa-palette", level: "Advanced" },
      { name: "Vue.js", icon: "fab fa-vuejs", level: "Intermediate" },
      { name: "Redux / Zustand", icon: "fas fa-layer-group", level: "Intermediate" }
    ],
    "Backend & Databases": [
      { name: "Node.js & Express", icon: "fab fa-node-js", level: "Advanced" },
      { name: "PostgreSQL", icon: "fas fa-database", level: "Intermediate" },
      { name: "MongoDB", icon: "fas fa-server", level: "Intermediate" },
      { name: "REST APIs & GraphQL", icon: "fas fa-network-wired", level: "Advanced" }
    ],
    "Tools & DevOps": [
      { name: "Git & GitHub", icon: "fab fa-git-alt", level: "Advanced" },
      { name: "Docker", icon: "fab fa-docker", level: "Intermediate" },
      { name: "Linux / Bash", icon: "fab fa-linux", level: "Intermediate" },
      { name: "VS Code", icon: "fas fa-terminal", level: "Advanced" },
      { name: "Vercel & Netlify", icon: "fas fa-cloud-upload-alt", level: "Advanced" }
    ]
  },

  // Featured Projects with GitHub and Demo links
  projects: [
    {
      title: "DevPulse - Developer Dashboard",
      description: "A centralized productivity command center for developers featuring GitHub metric tracking, task management, snippet storage, and automated deployment monitors.",
      category: "Full Stack",
      tags: ["React", "TypeScript", "Node.js", "TailwindCSS", "GitHub API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/yourusername/devpulse-dashboard",
      liveUrl: "https://devpulse-demo.example.com",
      featured: true,
      stars: 128
    },
    {
      title: "GitStream - Realtime Git Visualizer",
      description: "Interactive 3D graph visualizer that maps Git branch topologies, commit histories, and contributor contributions in real time.",
      category: "Web App",
      tags: ["Three.js", "JavaScript", "HTML5 Canvas", "REST API"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/yourusername/gitstream-visualizer",
      liveUrl: "https://gitstream.example.com",
      featured: true,
      stars: 94
    },
    {
      title: "FastPrompt - AI CLI Prompt Generator",
      description: "A lightweight terminal CLI utility built in Node.js for generating, evaluating, and cataloging LLM system prompts with local file cache support.",
      category: "Tools",
      tags: ["Node.js", "Commander.js", "OpenAI API", "TypeScript"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/yourusername/fastprompt-cli",
      liveUrl: "https://www.npmjs.com/package/fastprompt",
      featured: true,
      stars: 64
    },
    {
      title: "Apex UI - Component Design System",
      description: "Accessible, responsive, and composable UI library featuring over 40+ production-ready components crafted with vanilla CSS and WCAG 2.1 compliance.",
      category: "Frontend",
      tags: ["CSS3", "Design System", "Storybook", "Accessibility"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      githubUrl: "https://github.com/yourusername/apex-ui-kit",
      liveUrl: "https://apex-ui.example.com",
      featured: false,
      stars: 45
    }
  ],

  // Experience / Education Milestones
  milestones: [
    {
      period: "2023 - Present",
      title: "Full-Stack Software Engineer",
      organization: "Tech Innovators Inc.",
      description: "Engineered scalable microservices and responsive web client applications used by over 50k active users. Spearheaded CI/CD pipelines and component library modernization."
    },
    {
      period: "2021 - 2023",
      title: "Frontend Developer",
      organization: "Digital Wave Studio",
      description: "Built pixel-perfect, accessible client web applications, optimized page load speeds by 40%, and collaborated closely with product designers."
    },
    {
      period: "2019 - 2021",
      title: "B.S. in Computer Science",
      organization: "State University",
      description: "Graduated with honors. Key coursework: Data Structures, Algorithms, Distributed Computing, Web Architectures, Database Systems."
    }
  ]
};
