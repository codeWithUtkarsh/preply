import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Preply - Transform Video Learning with AI',
  description: 'AI-powered flashcards and quizzes that appear while you watch any educational video. Stop watching. Start learning.',
  keywords: 'AI video learning, interactive videos, educational technology, flashcards, quiz generation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
