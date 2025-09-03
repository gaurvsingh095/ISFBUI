// app/layout.tsx
import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ISFB',
  description: 'Interview Simulation & Feedback Builder',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
