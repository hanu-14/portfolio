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
  { name: 'FastAPI', category: 'Backend', level: 90 },
  { name: 'REST APIs', category: 'Backend', level: 90 },
  { name: 'Auth Systems', category: 'Backend', level: 80 },
  { name: 'CLI Tools', category: 'Backend', level: 85 },
  { name: 'Docker', category: 'Infrastructure', level: 90 },
  { name: 'Linux', category: 'Infrastructure', level: 90 },
  { name: 'Oracle Cloud', category: 'Infrastructure', level: 80 },
  { name: 'VPS', category: 'Infrastructure', level: 85 },
  { name: 'Terraform', category: 'Infrastructure', level: 60 },
  { name: 'Self-Hosted', category: 'Infrastructure', level: 85 },
  { name: 'LLM Applications', category: 'AI/ML', level: 90 },
  { name: 'Autonomous Agents', category: 'AI/ML', level: 85 },
  { name: 'Computer Vision', category: 'AI/ML', level: 85 },
  { name: 'Prompt Engineering', category: 'AI/ML', level: 80 },
  { name: 'Local AI', category: 'AI/ML', level: 75 },
  { name: 'Multi-Agent Workflows', category: 'AI/ML', level: 80 },
  { name: 'Web Security', category: 'Security', level: 85 },
  { name: 'API Security', category: 'Security', level: 80 },
  { name: 'Penetration Testing', category: 'Security', level: 85 },
  { name: 'Recon Automation', category: 'Security', level: 80 },
  { name: 'Firmware RE', category: 'Security', level: 70 },
  { name: 'Bug Bounty', category: 'Security', level: 75 },
  { name: 'Playwright', category: 'Automation', level: 85 },
  { name: 'Browser Automation', category: 'Automation', level: 80 },
  { name: 'CI/CD', category: 'Automation', level: 70 },
]

export const projects: Project[] = [
  {
    title: 'PhotonIQ',
    description: 'AI-powered visual intelligence platform that transforms CCTV and RTSP streams into searchable intelligence. Natural language queries over surveillance footage with object detection, multi-camera tracking, and forensic analysis. Nearing pilot stage.',
    tags: ['Computer Vision', 'AI', 'RT-DETR', 'LLM', 'Docker'],
  },
  {
    title: 'Atlas',
    description: 'Autonomous AI engineering platform running on personal VPS. Handles code generation, repository analysis, documentation, and open-source contribution support through specialized AI agents with human-in-the-loop approval.',
    tags: ['AI Agents', 'Automation', 'Infrastructure', 'Open Source'],
  },
  {
    title: 'LinkedIn Automation Engine',
    description: 'Adaptive autonomous content engineering system. AI-generated posts with automated image generation, scheduling, browser automation via Playwright, human-like interaction timing, error recovery, and multi-stage publishing pipeline.',
    tags: ['Automation', 'Playwright', 'AI', 'DevOps'],
  },
  {
    title: 'AI Pentesting Assistant',
    description: 'AI-assisted penetration testing platform built on OpenCode with open-source LLMs. Automates reconnaissance, attack surface mapping, vulnerability triage, and report drafting while keeping humans responsible for all testing decisions.',
    tags: ['Security', 'AI', 'Pentesting', 'Automation'],
  },
  {
    title: 'CS-D-41GPU Vulnerability Analysis',
    description: 'Critical security audit of ISP-grade router firmware uncovering 8 vulnerabilities including backdoor system accounts sharing UID 0, hardcoded telnet credentials, and unauthenticated BusyBox root shell access.',
    tags: ['Security Research', 'Firmware', 'IoT', 'Reverse Engineering'],
  },
  {
    title: 'Campus Marketplace',
    description: 'A student-only marketplace with institutional email authentication, enabling secure peer-to-peer exchange of items within college campuses with a focus on sustainability through reuse.',
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
