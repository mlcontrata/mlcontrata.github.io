# 🚀 Modern Developer Profile & Portfolio Website

A sleek, responsive, and modern developer portfolio website designed to showcase your software projects, skills, experience, and live GitHub stats. Built with pure **HTML5, CSS3, and JavaScript** — zero build step, blazingly fast, and 100% ready for **GitHub Pages**.

---

## ✨ Features

- 🎨 **Modern Design System**: Glassmorphic dark and light themes with glowing ambient light effects.
- ⚡ **Zero Build Step**: Pure static HTML/CSS/JS that works out-of-the-box in any browser.
- 🐙 **Live GitHub Stats Integration**: Real-time stats cards, contribution streak, and most used language graphs.
- 📝 **Centralized Config (`profile-config.js`)**: Update your name, avatar, bio, skills, and projects in one single place.
- 💻 **Interactive Projects Showcase**: Filterable project gallery with tags, GitHub repo buttons, live demo links, and star counters.
- 🛠️ **Categorized Skills Matrix**: Clean badge grid with icons for Languages, Frontend, Backend, and DevOps tools.
- ⏳ **Experience Timeline**: Career and education milestone cards.
- 📱 **100% Mobile Responsive**: Smooth animations, hamburger drawer navigation, and active scroll spy.
- 📋 **Interactive Contact & Copy Email**: One-click email copy to clipboard with toast notification.

---

## 🛠️ Quick Setup & Customization

### 1. Customize Your Information
Open `profile-config.js` in your code editor and update the fields:

```javascript
const profileConfig = {
  name: "Your Name",
  greeting: "Hello, world! I'm",
  roles: [
    "Full-Stack Developer",
    "Open Source Contributor",
    "Cloud Architect"
  ],
  bio: "Brief intro about yourself and your passions...",
  avatar: "https://github.com/yourusername.png", // Or local image path
  location: "Your City, Country (or Remote)",
  status: "🟢 Available for new opportunities",
  resumeUrl: "https://your-resume-link.pdf",

  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com",
    discord: "https://discord.com"
  },

  github: {
    username: "yourusername", // Your GitHub username for live stats!
    showStats: true,
    showTopLangs: true,
    showStreak: true,
  },
  
  // Add your projects, skills, and milestones below...
};
```

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

Deploy your portfolio to GitHub Pages in under 2 minutes:

### Method 1: Host at `https://<your-username>.github.io` (Recommended)

1. Create a new public repository on GitHub named:
   ```text
   <your-username>.github.io
   ```
   *(e.g., if your username is `johndoe`, name the repository `johndoe.github.io`)*

2. Push all the files from this folder (`index.html`, `styles.css`, `script.js`, `profile-config.js`, `README.md`) to the `main` branch of that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer profile website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. Your website will be live in ~60 seconds at:
   ```
   https://<your-username>.github.io
   ```

---

### Method 2: Host from a Regular Repository

1. Create a new repository named `portfolio` or `profile-website`.
2. Push your files to the repository.
3. On GitHub, go to **Settings** > **Pages** (in the left sidebar).
4. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
5. Select branch: `main` and folder: `/ (root)`, then click **Save**.
6. Your website will be live at:
   ```
   https://<your-username>.github.io/portfolio/
   ```

---

## 🔗 Link This Website to Your GitHub Profile

To showcase your new website directly on your GitHub profile:

1. **Add to your GitHub Bio / Profile URL**:
   - Go to your GitHub profile: `https://github.com/<your-username>`
   - Click **Edit profile** under your avatar.
   - Paste your website URL (e.g. `https://<your-username>.github.io`) into the **Website** field.
   - Click **Save**.

2. **Add to your GitHub Profile README**:
   - In your special profile README repository (`<your-username>/<your-username>`), add a sleek badge:
     ```markdown
     [![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Website-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://<your-username>.github.io)
     ```

---

## 📁 File Structure

```text
profile-website/
├── index.html          # Semantic HTML5 single page layout
├── styles.css          # Modern CSS styling, themes, animations & responsive grid
├── script.js           # Typewriter, theme switch, GitHub stats & interactivity
├── profile-config.js   # Central profile data configuration
└── README.md           # Setup and GitHub Pages deployment guide
```

---

## 📄 License
MIT License. Feel free to customize and use this template for your personal developer profile!
