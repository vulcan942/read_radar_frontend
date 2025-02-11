import 'react'
interface ICardProps {
  children: any
  className: string
}
export function Card({ children, className = '' }: ICardProps) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-lg ${className}`}>
      {children}
    </div>
  )
}
