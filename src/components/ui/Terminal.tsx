import { type FC, type ReactNode } from 'react'

interface TerminalProps {
  children: ReactNode
  title?: string
}

export const Terminal: FC<TerminalProps> = ({ children, title = 'terminal' }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800 bg-black/60 backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-amber-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-xs text-zinc-500">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}
