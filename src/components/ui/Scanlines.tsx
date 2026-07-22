import type { FC } from 'react'

export const Scanlines: FC = () => (
  <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.03]">
    <div className="animate-scanline h-px w-full bg-white" />
  </div>
)
