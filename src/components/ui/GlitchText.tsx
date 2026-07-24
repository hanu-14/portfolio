import { type FC, type HTMLAttributes } from 'react'

interface GlitchTextProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'span'
}

export const GlitchText: FC<GlitchTextProps> = ({ text, as: Tag = 'h1', className = '', ...props }) => {
  return (
    <Tag
      className={`glitch-text relative inline-block ${className}`}
      data-text={text}
      {...props}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="relative z-10">{text}</span>
    </Tag>
  )
}
