import type { NavLink, Project, Skill } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Projects', href: '/projects' },
  { label: 'Vault', href: '/vault' },
  { label: 'Contact', href: '/contact' },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages', level: 95 },
  { name: 'C', category: 'Languages', level: 70 },
  { name: 'SQL', category: 'Languages', level: 75 },
  { name: 'JavaScript', category: 'Languages', level: 60 },
  { name: 'HTML/CSS', category: 'Languages', level: 65 },
  { name: 'FastAPI', category: 'Backend', level: 90 },
  { name: 'REST APIs', category: 'Backend', level: 90 },
  { name: 'Auth Systems', category: 'Backend', level: 80 },
  { name: 'CLI Tools', category: 'Backend', level: 85 },
  { name: 'Reverse Proxies', category: 'Backend', level: 75 },
  { name: 'Docker', category: 'Infrastructure', level: 90 },
  { name: 'Linux', category: 'Infrastructure', level: 90 },
  { name: 'Oracle Cloud', category: 'Infrastructure', level: 80 },
  { name: 'VPS', category: 'Infrastructure', level: 85 },
  { name: 'Terraform', category: 'Infrastructure', level: 60 },
  { name: 'Self-Hosted', category: 'Infrastructure', level: 85 },
  { name: 'Remote GPU', category: 'Infrastructure', level: 70 },
  { name: 'LLM Applications', category: 'AI/ML', level: 90 },
  { name: 'Autonomous Agents', category: 'AI/ML', level: 85 },
  { name: 'Computer Vision', category: 'AI/ML', level: 85 },
  { name: 'Prompt Engineering', category: 'AI/ML', level: 80 },
  { name: 'Local AI', category: 'AI/ML', level: 75 },
  { name: 'Multi-Agent Workflows', category: 'AI/ML', level: 80 },
  { name: 'Vision AI', category: 'AI/ML', level: 80 },
  { name: 'AI Workflow Automation', category: 'AI/ML', level: 85 },
  { name: 'Web Security', category: 'Security', level: 85 },
  { name: 'API Security', category: 'Security', level: 80 },
  { name: 'Penetration Testing', category: 'Security', level: 85 },
  { name: 'Recon Automation', category: 'Security', level: 80 },
  { name: 'Firmware RE', category: 'Security', level: 70 },
  { name: 'Bug Bounty', category: 'Security', level: 75 },
  { name: 'Vulnerability Research', category: 'Security', level: 80 },
  { name: 'Infrastructure Security', category: 'Security', level: 75 },
  { name: 'Playwright', category: 'Automation', level: 85 },
  { name: 'Browser Automation', category: 'Automation', level: 80 },
  { name: 'CI/CD', category: 'Automation', level: 70 },
  { name: 'GPT', category: 'AI Models', level: 85 },
  { name: 'Gemini', category: 'AI Models', level: 80 },
  { name: 'Qwen', category: 'AI Models', level: 75 },
  { name: 'DeepSeek', category: 'AI Models', level: 75 },
  { name: 'Hermes', category: 'AI Models', level: 70 },
  { name: 'OpenRouter', category: 'AI Models', level: 80 },
  { name: 'RT-DETR', category: 'Computer Vision', level: 85 },
  { name: 'Object Detection', category: 'Computer Vision', level: 85 },
  { name: 'Video Intelligence', category: 'Computer Vision', level: 80 },
  { name: 'Visual Search', category: 'Computer Vision', level: 75 },
  { name: 'Vision-Language', category: 'Computer Vision', level: 75 },
]

export const projects: Project[] = [
  {
    title: 'Battery-Free Biometric System',
    description: 'A self-powered biometric authentication system that eliminates battery dependency entirely by harvesting ambient energy through piezoelectric transducers and RF energy capture. The system converts mechanical pressure and ambient RF signals into sufficient power to drive a low-power fingerprint or capacitive sensor, a microcontroller, and a short-range communication module. Designed for deployment in access control systems, IoT edge nodes, and remote installations where battery maintenance is impractical. The core energy management circuit ensures stable operation under variable harvesting conditions. A provisional patent has been filed for the core energy-conversion and authentication mechanism. This project sits at the intersection of Electrical Engineering, embedded security, and hardware innovation.',
    tags: ['Energy Harvesting', 'Biometrics', 'Patent', 'Embedded Systems', 'IoT Security', 'Piezoelectric', 'RF', 'EE'],
  },
  {
    title: 'PhotonIQ',
    description: 'AI-powered visual intelligence platform transforming CCTV and RTSP streams into searchable intelligence. Users interact via natural language: "Show everyone carrying a blue backpack who entered through Gate 3 between 2 PM and 5 PM." Nearing pilot stage. Core capabilities include RTSP stream ingestion, object detection, multi-camera processing, semantic video search, timeline search, event detection, person and object tracking, and AI-powered forensic analysis. Built with RT-DETR, Computer Vision, Vision AI, LLM integration, Python, and Docker. Long-term vision: enterprise platform for smart cities, airports, warehouses, hospitals, and industrial surveillance.',
    tags: ['Computer Vision', 'AI', 'RT-DETR', 'LLM', 'Docker', 'Python', 'Surveillance'],
    github: 'https://github.com/hanu-14/photoniq',
  },
  {
    title: 'Atlas',
    description: 'Autonomous AI engineering platform running on personal VPS. Automates code generation, repository analysis, engineering assistance, documentation, and open-source contribution support through specialized AI agents. Human-in-the-loop approval before any external action. Features AI-assisted development and local infrastructure orchestration. Long-term vision: collaborative AI engineering environment where specialized agents assist throughout the software development lifecycle.',
    tags: ['AI Agents', 'Automation', 'Infrastructure', 'Open Source', 'VPS', 'DevOps'],
  },
  {
    title: 'LinkedIn Automation Engine',
    description: 'The only AI-powered automation you can run completely for free — harnessing CLI AI tools free tier via stdin/commands. Playwright-based LinkedIn automation that posts, comments, and scans feeds with anti-detection. Personally used and verified to dramatically increase impressions — discontinued after learning it violates LinkedIn ToS. No guarantee it works; LinkedIn UI changes break it entirely.',
    tags: ['Automation', 'Playwright', 'AI', 'DevOps', 'Browser Automation', 'Content'],
    github: 'https://github.com/hanu-14/linkedin-automation-bot',
  },
  {
    title: 'AI Pentesting Assistant',
    description: 'AI-assisted penetration testing platform built on OpenCode with open-source LLMs. Automates reconnaissance, attack surface mapping, subdomain enumeration, endpoint discovery, API discovery, technology fingerprinting, HTTP analysis, security header evaluation, vulnerability triage, and report drafting. Docker-based, CLI-first, modular agents with human approval before reporting. Uses OpenCode orchestration for multi-model collaboration.',
    tags: ['Security', 'AI', 'Pentesting', 'Automation', 'Docker', 'OpenCode'],
  },
  {
    title: 'CS-D-41GPU Vulnerability Analysis',
    description: 'Critical security audit of ISP-grade router firmware uncovering 8 vulnerabilities including backdoor system accounts sharing UID 0, hardcoded telnet credentials, and unauthenticated BusyBox root shell access. Also found: persistent writable filesystem, CGNAT deployment exposure, IPv6 attack surface, non-standard web authentication, and telnetd crash history. Responsible disclosure conducted.',
    tags: ['Security Research', 'Firmware', 'IoT', 'Reverse Engineering', 'Pentesting'],
  },
  {
    title: 'KRUZE CRM',
    description: 'End-to-end CRM platform for a UK-based moving services company. Co-founder of a small software venture handling backend development, infrastructure, system architecture, AI integration, deployment, and workflow automation. Full-stack production system built for real business operations.',
    tags: ['Full Stack', 'CRM', 'Backend', 'Infrastructure', 'DevOps', 'AI'],
  },
  {
    title: 'Campus Marketplace',
    description: 'Student-only marketplace platform with institutional email verification. Enables secure peer-to-peer exchange of items within college campuses with a focus on sustainability through reuse. Features college email verification, secure authentication, and sustainability-focused item reuse.',
    tags: ['Full Stack', 'Authentication', 'Marketplace', 'Web Dev'],
  },
]

export const socialLinks = {
  github: 'https://github.com/hanu-14',
  linkedin: 'https://www.linkedin.com/in/mohammed-hanan-m-t-p-92ba5437a',
  twitter: 'https://x.com/Mohamme17131907',
  email: 'hananmtp313@gmail.com',
  hackerone: 'https://hackerone.com/hanu14',
  bugcrowd: 'https://bugcrowd.com/hanu14',
  intigriti: 'https://app.intigriti.com/profile/hanu14',
}

export const bio = {
  name: 'Mohammed Hanan',
  tagline: 'I engineer systems. I break them to make them stronger. AI, infrastructure, security — I build across all three.',
  company: 'Co-Founder of CosmIQ — Build • Automate • Evolve',
  summary: "Electrical & Electronics Engineering student at Government Engineering College Thrissur (GECT), India, building AI systems, autonomous agents, backend infrastructure, computer vision platforms, and security research tools. I design complete systems—from architecture and deployment to automation and AI integration—with a strong focus on open-source technologies and practical engineering.",
  education: 'B.Tech Electrical & Electronics Engineering — Government Engineering College Thrissur (GECT), India',
  titles: ['AI Engineer', 'Security Researcher', 'Infrastructure Architect', 'Automation Engineer', 'Computer Vision Engineer'],
  philosophy: [
    'Automation first — automate everything that can be automated',
    'Open-source technologies — build on and contribute back to open source',
    'Self-hosted infrastructure — own your stack, own your data',
    'Human-in-the-loop AI — AI assists, humans decide',
    'Long-term maintainability — build systems that last',
    'Engineering reliability — design for failure, build for resilience',
    'Scalable architectures — think big from day one',
  ],
  intro: "I'm an Electrical & Electronics Engineering student at Government Engineering College Thrissur with over 1.5 years of hands-on experience building AI systems, autonomous agents, backend platforms, and security research tools. My work spans computer vision, infrastructure engineering, AI-assisted software development, and ethical security research. I enjoy designing complete systems—from architecture and deployment to automation and AI integration—with a strong focus on open-source technologies and practical engineering.",
}

export const expertise = [
  {
    title: 'Artificial Intelligence',
    items: ['LLM-powered applications', 'Autonomous AI agents', 'Multi-agent workflows', 'Prompt engineering', 'AI-assisted software engineering', 'Local AI deployment', 'Vision AI', 'AI workflow automation'],
    models: ['GPT', 'Gemini', 'Qwen', 'Hermes', 'DeepSeek', 'OpenRouter'],
  },
  {
    title: 'Backend Engineering',
    items: ['Python', 'FastAPI', 'REST APIs', 'Authentication systems', 'Docker', 'Linux', 'VPS deployment', 'Git/GitHub', 'CLI-first workflows', 'Reverse proxies', 'Self-hosted infrastructure'],
    models: [],
  },
  {
    title: 'Infrastructure',
    items: ['Oracle Cloud', 'VPS servers', 'Docker', 'Linux', 'Terraform', 'Remote GPU workflows', 'Self-hosted AI', 'CI/CD pipelines'],
    models: [],
  },
  {
    title: 'Security Research',
    items: ['Web application security', 'API security', 'Penetration testing', 'Reconnaissance automation', 'Infrastructure security', 'Reverse engineering', 'Firmware modification', 'Vulnerability research', 'Bug bounty (HackerOne, Bugcrowd, Intigriti)'],
    models: [],
  },
  {
    title: 'Automation',
    items: ['Playwright', 'Browser automation', 'AI agents', 'CI/CD pipelines', 'Workflow automation', 'Content automation'],
    models: [],
  },
  {
    title: 'Computer Vision',
    items: ['RT-DETR object detection', 'Video intelligence', 'CCTV analytics', 'Visual search', 'AI-powered surveillance', 'Vision-language integration'],
    models: [],
  },
]

export const languages = [
  { name: 'Arabic', proficiency: 'Proficient', note: 'National Winner, Arabic Reading Challenge — represented India at Global Finals in Dubai' },
  { name: 'English', proficiency: 'Proficient', note: '' },
  { name: 'Malayalam', proficiency: 'Proficient', note: '' },
  { name: 'Hindi', proficiency: 'Proficient', note: '' },
  { name: 'Urdu', proficiency: 'Proficient', note: '' },
  { name: 'Spanish', proficiency: 'Learning', note: '' },
]
