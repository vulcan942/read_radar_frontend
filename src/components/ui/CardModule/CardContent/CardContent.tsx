import 'react'

interface ICardContentProps {
  children: any
}
export function CardContent({ children }: ICardContentProps) {
  return <div className="mt-4">{children}</div>
}
