import 'react'

interface IInputProps {
  className?: string
  type: string
  placeholder: string
}
export function Input({ className = '', ...props }: IInputProps) {
  return (
    <input
      className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-500 ${className}`}
      {...props}
    />
  )
}
