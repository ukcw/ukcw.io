import {
  json,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
} from '@remix-run/cloudflare'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import Footer from './components/footer'
import { NavBar } from './components/navbar'

import styles from './styles/app.css'
import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
} from './utils/theme-provider'
import { getThemeSession } from './utils/theme.server'

export const links: LinksFunction = () => {
  //icon generated from: https://favicon.io/favicon-generator/
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ulysses Kee',
  viewport: 'width=device-width,initial-scale=1',
})

export const loader = async ({ request }: LoaderArgs) => {
  const themeSession = await getThemeSession(request)

  return json({
    theme: themeSession.getTheme(),
  })
}

function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()

  return (
    <html lang="en" className={theme ?? ''}>
      <head>
        <Meta />
        <Links />
        <ThemeHead ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="font-jetbrains-mono bg-white dark:bg-gray-800">
        <NavBar />
        <Outlet />
        <ThemeBody ssrTheme={Boolean(data.theme)} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  )
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  )
}
