import type { NavLink, Project, Skill } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Vault', href: '/vault' },
  { label: 'Contact', href: '/#contact' },
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
]

export const projects: Project[] = [
  {
    title: 'PhotonIQ',
    description: 'AI-powered visual intelligence platform transforming CCTV and RTSP streams into searchable intelligence. Users interact via natural language: "Show everyone carrying a blue backpack who entered through Gate 3 between 2 PM and 5 PM." Nearing pilot stage. Built with RT-DETR for object detection, LLM integration for semantic search, and Docker for deployment. Long-term vision: enterprise platform for smart cities, airports, warehouses, hospitals, and industrial surveillance.',
    tags: ['Computer Vision', 'AI', 'RT-DETR', 'LLM', 'Docker', 'Python'],
  },
  {
    title: 'Atlas',
    description: 'Autonomous AI engineering platform running on personal VPS. Automates code generation, repository analysis, documentation, and open-source contribution support through specialized AI agents. Human-in-the-loop approval before any external action. Long-term vision: collaborative AI engineering environment where specialized agents assist throughout the SDLC.',
    tags: ['AI Agents', 'Automation', 'Infrastructure', 'Open Source', 'VPS'],
  },
  {
    title: 'LinkedIn Automation Engine',
    description: 'Adaptive autonomous content engineering system. AI-generated posts with automated image generation, scheduling, Playwright browser automation, human-like interaction timing, retry mechanisms, session persistence, and multi-stage publishing pipeline. Designed for reliability against constantly changing social platforms.',
    tags: ['Automation', 'Playwright', 'AI', 'DevOps', 'Browser Automation'],
  },
  {
    title: 'AI Pentesting Assistant',
    description: 'AI-assisted penetration testing platform built on OpenCode with open-source LLMs. Automates reconnaissance, attack surface mapping, subdomain enumeration, endpoint discovery, HTTP analysis, vulnerability triage, and report drafting. Docker-based, CLI-first, modular agents. Keeps humans responsible for all testing decisions.',
    tags: ['Security', 'AI', 'Pentesting', 'Automation', 'Docker'],
  },
  {
    title: 'CS-D-41GPU Vulnerability Analysis',
    description: 'Critical security audit of ISP-grade router firmware uncovering 8 vulnerabilities including backdoor system accounts sharing UID 0, hardcoded telnet credentials, and unauthenticated BusyBox root shell access. Responsible disclosure conducted.',
    tags: ['Security Research', 'Firmware', 'IoT', 'Reverse Engineering'],
  },
  {
    title: 'KRUZE CRM',
    description: 'End-to-end CRM platform for a UK-based moving services company. Responsible for backend development, infrastructure, system architecture, AI integration, deployment, and workflow automation as co-founder of a small software venture.',
    tags: ['Full Stack', 'CRM', 'Backend', 'Infrastructure', 'DevOps'],
  },
  {
    title: 'Campus Marketplace',
    description: 'Student-only marketplace platform with institutional email verification. Enables secure peer-to-peer exchange of items within college campuses with a focus on sustainability through reuse.',
    tags: ['Full Stack', 'Authentication', 'Marketplace'],
  },
]

export const socialLinks = {
  github: 'https://github.com/hanu-14',
  linkedin: 'https://linkedin.com/in/mohammedhanan',
  twitter: 'https://x.com/hanuxd',
  email: 'mohammedhanan@duck.com',
  hackerone: 'https://hackerone.com/hanu14',
  bugcrowd: 'https://bugcrowd.com/hanu14',
}

export const bio = {
  name: 'Mohammed Hanan',
  tagline: 'I engineer systems. I break them to make them stronger. AI, infrastructure, security — I build across all three.',
  summary: "Electrical & Electronics Engineering student at Government Engineering College Thrissur (GECT) with over 1.5 years of hands-on experience building AI systems, autonomous agents, backend platforms, computer vision systems, and security research tools. I design complete systems—from architecture and deployment to automation and AI integration—with a strong focus on open-source technologies.",
  titles: ['AI Engineer', 'Security Researcher', 'Infrastructure Architect'],
  philosophy: [
    'Automation first',
    'Open-source technologies',
    'Self-hosted infrastructure',
    'Human-in-the-loop AI',
    'Long-term maintainability',
    'Engineering reliability',
    'Scalable architectures',
  ],
}

export const expertise = [
  {
    title: 'Artificial Intelligence',
    items: ['LLM-powered applications', 'Autonomous AI agents', 'Multi-agent workflows', 'Prompt engineering', 'AI-assisted software engineering', 'Local AI deployment', 'Vision AI', 'AI workflow automation'],
    models: ['GPT', 'Gemini', 'Qwen', 'Hermes', 'DeepSeek', 'OpenRouter'],
  },
  {
    title: 'Backend Engineering',
    items: ['Python', 'REST APIs', 'Authentication systems', 'Docker', 'Linux', 'VPS deployment', 'Git/GitHub', 'CLI-first workflows', 'Reverse proxies', 'Self-hosted infrastructure'],
    models: [],
  },
  {
    title: 'Infrastructure',
    items: ['Oracle Cloud', 'VPS servers', 'Docker', 'Linux', 'Terraform', 'Remote GPU workflows', 'Self-hosted AI'],
    models: [],
  },
  {
    title: 'Security Research',
    items: ['Web application security', 'API security', 'Penetration testing', 'Reconnaissance automation', 'Infrastructure security', 'Reverse engineering', 'Firmware modification', 'Vulnerability research'],
    models: [],
  },
  {
    title: 'Automation',
    items: ['Playwright', 'Browser automation', 'AI agents', 'CI/CD pipelines', 'Workflow automation'],
    models: [],
  },
]
