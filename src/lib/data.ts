import type { NavLink, Project, Skill } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Lab', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages', level: 95 },
  { name: 'TypeScript', category: 'Languages', level: 85 },
  { name: 'Rust', category: 'Languages', level: 60 },
  { name: 'Go', category: 'Languages', level: 70 },
  { name: 'C/C++', category: 'Languages', level: 75 },
  { name: 'React', category: 'Frontend', level: 85 },
  { name: 'Next.js', category: 'Frontend', level: 80 },
  { name: 'Tailwind', category: 'Frontend', level: 85 },
  { name: 'Three.js', category: 'Frontend', level: 70 },
  { name: 'FastAPI', category: 'Backend', level: 90 },
  { name: 'Django', category: 'Backend', level: 80 },
  { name: 'PostgreSQL', category: 'Backend', level: 85 },
  { name: 'Redis', category: 'Backend', level: 75 },
  { name: 'Docker', category: 'Infrastructure', level: 85 },
  { name: 'Kubernetes', category: 'Infrastructure', level: 70 },
  { name: 'Cloudflare', category: 'Infrastructure', level: 80 },
  { name: 'AWS', category: 'Infrastructure', level: 75 },
  { name: 'Linux', category: 'Infrastructure', level: 90 },
  { name: 'PyTorch', category: 'AI/ML', level: 85 },
  { name: 'TensorFlow', category: 'AI/ML', level: 75 },
  { name: 'NLP', category: 'AI/ML', level: 80 },
  { name: 'Computer Vision', category: 'AI/ML', level: 70 },
  { name: 'Penetration Testing', category: 'Security', level: 80 },
  { name: 'Reverse Engineering', category: 'Security', level: 75 },
  { name: 'Network Security', category: 'Security', level: 85 },
  { name: 'Cryptography', category: 'Security', level: 70 },
]

export const projects: Project[] = [
  {
    title: 'CS-D-41GPU Vulnerability Analysis',
    description: 'Critical security audit of ISP-grade router firmware uncovering 8 vulnerabilities including backdoor accounts, hardcoded credentials, and unauthenticated root shell access.',
    tags: ['Security Research', 'Firmware', 'IoT', 'Reverse Engineering'],
  },
  {
    title: 'ResQAI — Emergency Response System',
    description: 'AI-powered emergency response coordination platform using computer vision for disaster assessment and LLM-based resource optimization.',
    tags: ['AI', 'Computer Vision', 'NLP', 'Emergency Response'],
  },
  {
    title: 'QuantVest — Algorithmic Trading',
    description: 'High-frequency trading platform with ML-based market prediction, real-time sentiment analysis, and automated portfolio rebalancing.',
    tags: ['Machine Learning', 'Finance', 'Real-time Systems'],
  },
  {
    title: 'Nexus — Decentralized Identity',
    description: 'Self-sovereign identity protocol built on zero-knowledge proofs, enabling private credential verification without data exposure.',
    tags: ['Blockchain', 'Cryptography', 'Identity'],
  },
  {
    title: 'DeepDive — Network Recon Tool',
    description: 'Automated network reconnaissance and vulnerability scanning tool with intelligent service fingerprinting and exploit suggestion engine.',
    tags: ['Security', 'Networking', 'Automation'],
  },
  {
    title: 'Sythe — AI Code Assistant',
    description: 'Context-aware code completion and refactoring engine using fine-tuned LLMs with support for multi-language repository analysis.',
    tags: ['AI', 'Developer Tools', 'NLP'],
  },
]

export const socialLinks = {
  github: 'https://github.com/hanu-14',
  linkedin: 'https://linkedin.com/in/mohammedhanan',
  twitter: 'https://x.com/hanuxd',
  email: 'mohammedhanan@duck.com',
}
