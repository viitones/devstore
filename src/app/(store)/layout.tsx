import { ReactNode } from 'react'
import { Header } from '../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid grid-rows-[min-content_max-content] min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
