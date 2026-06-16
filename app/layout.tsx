import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MindBloom AI — Your Personal AI Companion for Mental Wellness',
  description:
    'MindBloom AI empowers students and young professionals with personalized AI-powered tools designed to improve emotional well-being, build resilience, and support personal growth.',
  generator: 'v0.app',
  keywords: [
    'mental wellness',
    'AI companion',
    'meditation',
    'stress management',
    'mindfulness',
    'productivity',
    'self-care',
  ],
  openGraph: {
    title: 'MindBloom AI — Mental Wellness Meets Artificial Intelligence',
    description:
      'Breathe Better. Think Clearer. Live Happier. Personalized AI-powered wellness for students and young professionals.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mindbloom-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
