import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  icon?: 'plus'
  variant?: 'primary' | 'secondary'
}

export function Button({ children, className = '', icon, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`button button--${variant} ${className}`.trim()} type="button" {...props}>
      {icon === 'plus' && <span className="button-icon" aria-hidden="true">+</span>}
      {children}
    </button>
  )
}
