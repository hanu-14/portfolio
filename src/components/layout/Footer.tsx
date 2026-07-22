import type { FC } from 'react'
import { socialLinks } from '../../lib/data'

export const Footer: FC = () => {
  return (
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-zinc-600">
            © {new Date().getFullYear()} Mohammed Hanan
          </p>
          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-500 transition-colors hover:text-crimson"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-500 transition-colors hover:text-crimson"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-500 transition-colors hover:text-crimson"
            >
              X
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="font-mono text-xs text-zinc-500 transition-colors hover:text-crimson"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
