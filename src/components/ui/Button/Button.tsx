import 'react'

interface IButtonProps {
  children: any
  variant?: string
  className: string
}

export function Button({
  children,
  variant = 'default',
  className = '',
  ...props
}: IButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all'
  const variants: any = {
    default: 'bg-stone-500 text-white hover:bg-stone-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100'
  }
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
