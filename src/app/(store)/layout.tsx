import { ReactNode } from 'react'
import { Header } from '../components/header'

export type StoreLayoutProps = {
  readonly children: ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
