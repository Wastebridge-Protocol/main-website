import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" />
        <link rel='icon' type='image/png' href='/logo.jpeg' />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
        <title>WasteBridge Protocol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />

      <div className='radial-background'></div>
    </div>
  )
}

export default Layout
