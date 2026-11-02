import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Space_Grotesk } from 'next/font/google'
import { APP_STORE_ID, APP_STORE_URL, IS_INDEXABLE, PLAY_STORE_URL, REFERRAL_CODE, SITE_NAME, SITE_URL } from '@/lib/site'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const title = `HUB: ganhe dinheiro treinando IA e robôs | Código ${REFERRAL_CODE}`
const description =
  `HUB renda extra: treine robôs e IA gravando tarefas do dia a dia pelo celular e receba por hora aprovada via PIX. Cadastro grátis com o código ${REFERRAL_CODE}.`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description,
  applicationName: SITE_NAME,
  keywords: [
    'ganhar dinheiro treinando IA',
    'renda extra com inteligência artificial',
    'treinamento de robôs',
    'treinamento de robôs remunerado',
    'treinar robôs e ganhar dinheiro',
    'como trabalhar treinando robôs',
    'treinamento de inteligência artificial',
    'trabalho de treinamento de IA',
    'trabalhar com IA pelo celular',
    'como ganhar dinheiro com IA',
    'ganhar dinheiro gravando vídeos',
    'gravação de vídeos remunerada',
    'renda extra pelo celular',
    'oportunidade de renda extra',
    'como se cadastrar para treinar IA',
    'HUB treinamento de IA',
    'HUB renda extra',
    'hub',
    'hub ia',
    'hub robôs',
    'hub app',
    'hub robotics',
    'hub treinamento',
    'hub capture',
    'hub data',
    `código ${REFERRAL_CODE}`,
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: SITE_NAME,
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: IS_INDEXABLE
    ? { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }
    : { index: false, follow: false },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  itunes: { appId: APP_STORE_ID },
  appLinks: {
    ios: { url: APP_STORE_URL, app_store_id: APP_STORE_ID, app_name: 'Hub Capture' },
    android: { package: 'xyz.hub.mobile', url: PLAY_STORE_URL, app_name: 'Hub Capture' },
  },
  other: { 'google-play-app': 'app-id=xyz.hub.mobile' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b120f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}
