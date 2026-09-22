/**
 * Developer Profile - Dynamic Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  populateProfileData();
  initTypewriter();
  initNavEvents();
  initProjectFilters();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   Theme Switcher (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = themeToggleBtn.querySelector('i');
  
  // Check localStorage or preferred color scheme
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'light') {
      themeIcon.className = 'fas fa-moon';
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeIcon.className = 'fas fa-sun';
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    }
  }
}

/* ==========================================================================
   Populate Data from profile-config.js
   ========================================================================== */
function populateProfileData() {
  if (typeof profileConfig === 'undefined') {
    console.error('profileConfig is not defined! Please make sure profile-config.js is loaded.');
    return;
  }

  const { name, greeting, bio, avatar, status, location, resumeUrl, socials, github, quickStats, skills, projects, milestones } = profileConfig;

  // Header & Brand
  const brandName = document.getElementById('brand-name');
  if (brandName) brandName.textContent = name.split(' ')[0] || name;

  // Hero Section
  document.getElementById('hero-greeting').textContent = greeting || "Hello, world! I'm";
  document.getElementById('hero-name').textContent = name;
  document.getElementById('hero-bio').textContent = bio;
  
  const statusEl = document.getElementById('hero-status');
  if (statusEl && status) {
    statusEl.innerHTML = `<span class="pulse-dot"></span> ${status}`;
  }

  const avatarEl = document.getElementById('hero-avatar');
  if (avatarEl) {
    avatarEl.src = avatar || `https://github.com/${github.username}.png`;
    avatarEl.alt = `${name} Profile Avatar`;
  }

  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn) {
    if (resumeUrl && resumeUrl !== '#') {
      resumeBtn.href = resumeUrl;
      resumeBtn.target = '_blank';
    } else {
      resumeBtn.href = socials.github || '#';
      resumeBtn.textContent = 'View GitHub';
    }
  }

  // Social Links
  populateSocialLinks(socials);

  // About Section & Quick Stats
  const aboutBio = document.getElementById('about-bio');
  if (aboutBio) {
    aboutBio.innerHTML = `
      <p>I am <strong>${name}</strong>, a developer based in <strong>${location}</strong>. ${bio}</p>
      <p>I specialize in building robust applications, writing clean maintainable code, and turning complex software engineering concepts into accessible, intuitive products.</p>
    `;
  }

  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid && quickStats) {
    statsGrid.innerHTML = quickStats.map(stat => `
      <div class="stat-card glass-card">
        <div class="stat-value gradient-text">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  // Skills Section
  populateSkills(skills);

  // Projects Section
  populateProjects(projects);

  // GitHub Activity & Stats Section
  populateGitHubStats(github, name);

  // Milestones / Timeline
  populateMilestones(milestones);

  // Contact Info
  const contactEmailEl = document.getElementById('contact-email');
  if (contactEmailEl && socials.email) {
    contactEmailEl.textContent = socials.email;
  }
  const contactLocationEl = document.getElementById('contact-location');
  if (contactLocationEl && location) {
    contactLocationEl.textContent = location;
  }

  // Footer
  const footerYear = document.getElementById('footer-year');
  if (footerYear) footerYear.textContent = new Date().getFullYear();
  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = name;
}

/* ==========================================================================
   Social Links Populator
   ========================================================================== */
function populateSocialLinks(socials) {
  const containerIds = ['hero-socials', 'footer-socials'];
  
  const socialIcons = {
    github: { icon: 'fab fa-github', title: 'GitHub' },
    linkedin: { icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
    twitter: { icon: 'fab fa-x-twitter', title: 'Twitter / X' },
    email: { icon: 'fas fa-envelope', title: 'Email' },
    discord: { icon: 'fab fa-discord', title: 'Discord' }
  };

  containerIds.forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = Object.keys(socials)
      .filter(key => socials[key])
      .map(key => {
        const url = key === 'email' ? `mailto:${socials[key]}` : socials[key];
        const meta = socialIcons[key] || { icon: 'fas fa-link', title: key };
        return `
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="${meta.title}" aria-label="${meta.title}">
            <i class="${meta.icon}"></i>
          </a>
        `;
      }).join('');
  });

  // Direct GitHub buttons
  const githubButtons = document.querySelectorAll('.github-profile-link');
  githubButtons.forEach(btn => {
    if (socials.github) {
      btn.href = socials.github;
      btn.target = '_blank';
    }
  });
}

/* ==========================================================================
   Skills Populator
   ========================================================================== */
function populateSkills(skillsObj) {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || !skillsObj) return;

  const categoryIcons = {
    "Languages": "fas fa-code",
    "Frontend": "fas fa-laptop-code",
    "Backend & Databases": "fas fa-server",
    "Tools & DevOps": "fas fa-screwdriver-wrench"
  };

  skillsContainer.innerHTML = Object.keys(skillsObj).map(category => {
    const iconClass = categoryIcons[category] || "fas fa-layer-group";
    const skillList = skillsObj[category];

    return `
      <div class="skill-category-card glass-card">
        <div class="category-header">
          <i class="${iconClass} category-icon"></i>
          <h3 class="category-title">${category}</h3>
        </div>
        <div class="skills-list">
          ${skillList.map(skill => `
            <div class="skill-item">
              <div class="skill-info">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
              </div>
              <span class="skill-level-badge">${skill.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   Projects Populator & Filtering
   ========================================================================== */
let allProjects = [];

function populateProjects(projects) {
  allProjects = projects || [];
  const grid = document.getElementById('projects-grid');
  const filtersContainer = document.getElementById('project-filters');
  if (!grid || !projects) return;

  // Generate dynamic category filters
  if (filtersContainer) {
    const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];
    filtersContainer.innerHTML = categories.map((cat, idx) => `
      <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat}">${cat}</button>
    `).join('');
  }

  renderProjectsList(allProjects);
}

function renderProjectsList(projectsToRender) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (projectsToRender.length === 0) {
    grid.innerHTML = `<p style="text-align: center; grid-column: 1/-1; color: var(--text-secondary); padding: 40px;">No projects found in this category.</p>`;
    return;
  }

  grid.innerHTML = projectsToRender.map(project => `
    <div class="project-card glass-card" data-category="${project.category}">
      <div class="project-image-wrapper">
        <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
        <span class="project-category-tag">${project.category}</span>
      </div>
      <div class="project-content">
        <div class="project-title-row">
          <h3 class="project-title">${project.title}</h3>
          ${project.stars ? `
            <div class="project-stars" title="${project.stars} GitHub stars">
              <i class="fas fa-star"></i>
              <span>${project.stars}</span>
            </div>
          ` : ''}
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source on GitHub">
              <i class="fab fa-github"></i> Code
            </a>
          ` : ''}
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn primary" title="View Live Demo">
              <i class="fas fa-arrow-up-right-from-square"></i> Live Demo
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function initProjectFilters() {
  const filtersContainer = document.getElementById('project-filters');
  if (!filtersContainer) return;

  filtersContainer.addEventListener('click', (e) => {
    if (!e.target.classList.contains('filter-btn')) return;

    // Active class toggle
    filtersContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    const filter = e.target.getAttribute('data-filter');
    if (filter === 'All') {
      renderProjectsList(allProjects);
    } else {
      const filtered = allProjects.filter(p => p.category === filter);
      renderProjectsList(filtered);
    }
  });
}

/* ==========================================================================
   GitHub Stats Integration
   ========================================================================== */
function populateGitHubStats(githubConfig, name) {
  const statsContainer = document.getElementById('github-stats-wrapper');
  if (!statsContainer || !githubConfig) return;

  const username = githubConfig.username || 'torvalds';
  const theme = 'tokyonight'; // Works great with dark theme & high contrast

  const statsCardsGrid = document.getElementById('github-cards-grid');
  if (statsCardsGrid) {
    statsCardsGrid.innerHTML = `
      <div class="github-stat-card glass-card">
        <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text-secondary);"><i class="fab fa-github" style="color: var(--accent-primary); margin-right: 6px;"></i> Overall Stats</h4>
        <img src="https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=00000000" alt="GitHub Stats for ${username}" loading="lazy">
      </div>
      <div class="github-stat-card glass-card">
        <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text-secondary);"><i class="fas fa-fire" style="color: #f59e0b; margin-right: 6px;"></i> Contribution Streak</h4>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=00000000" alt="GitHub Streak for ${username}" loading="lazy">
      </div>
      <div class="github-stat-card glass-card">
        <h4 style="margin-bottom: 12px; font-size: 1rem; color: var(--text-secondary);"><i class="fas fa-chart-pie" style="color: var(--accent-cyan); margin-right: 6px;"></i> Top Languages</h4>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=00000000" alt="Top Languages for ${username}" loading="lazy">
      </div>
    `;
  }

  // GitHub banner meta
  const githubUserMeta = document.getElementById('github-user-meta');
  if (githubUserMeta) {
    githubUserMeta.innerHTML = `
      <h4>@${username}</h4>
      <p>Check out my repositories, contributions, and open-source packages directly on GitHub.</p>
    `;
  }

  const githubAvatarSmall = document.getElementById('github-avatar-small');
  if (githubAvatarSmall) {
    githubAvatarSmall.src = `https://github.com/${username}.png`;
  }

  const githubProfileBtn = document.getElementById('github-profile-btn');
  if (githubProfileBtn) {
    githubProfileBtn.href = `https://github.com/${username}`;
  }
}

/* ==========================================================================
   Milestones / Timeline Populator
   ========================================================================== */
function populateMilestones(milestones) {
  const timelineContainer = document.getElementById('timeline-container');
  if (!timelineContainer || !milestones) return;

  timelineContainer.innerHTML = milestones.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card glass-card">
        <div class="timeline-header">
          <div>
            <h4 class="timeline-title">${item.title}</h4>
            <span class="timeline-org">${item.organization}</span>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Typewriter Animation
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const roles = (typeof profileConfig !== 'undefined' && profileConfig.roles) 
    ? profileConfig.roles 
    : ["Software Engineer", "Full-Stack Developer", "Creator"];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      // Pause at full text
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   Navigation & Scroll Spy
   ========================================================================== */
function initNavEvents() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const navLinksItems = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('active') ? 'fas fa-xmark' : 'fas fa-bars';
      }
    });

    // Close drawer when clicking any link
    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  });
}

/* ==========================================================================
   Contact Form & Copy Email Logic
   ========================================================================== */
function initContactForm() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = profileConfig?.socials?.email || 'dev@example.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard! 📋');
      }).catch(() => {
        showToast('Failed to copy email');
      });
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        showToast('Thanks! Your message has been sent successfully. 🚀');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1000);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-info-circle" style="color: var(--accent-primary)"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
