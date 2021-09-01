import Header from './Header'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({children}) => {
  const initGA = () => {
    if (typeof window == 'undefined') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-7JJT712KMM');
  }

  return (
    <div>
      <Head>
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" />
        <link rel='icon' type='image/png' href='/logoWhite.jpg' />
        <link rel="apple-touch-icon" href="/logoWhite.jpg" />
        <title>WasteBridge Protocol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7JJT712KMM"></script>
        <script>{initGA()}</script>
      </Head>
      
      <Header />
      
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
