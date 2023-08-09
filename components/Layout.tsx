import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Crossmint' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/testing">Megaverse API</Link> |{' '}
        <Link href="/testITask">Test I task</Link> |{' '}
        <Link href="/testIITask">Test II task</Link> |{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>2023</span>
    </footer>
  </div>
)

export default Layout
