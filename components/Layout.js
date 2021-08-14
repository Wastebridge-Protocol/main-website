import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <link href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet" />
        <link rel='icon' type='image/png' href='/logoWhite.jpg' />
        <link rel="apple-touch-icon" href="/logoWhite.jpg" />
        <title>WasteBridge Protocol</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <main>{children}</main>

      <script src='/assets/js/jquery.min.js'></script>
			<script src='/assets/js/jquery.scrollex.min.js'></script>
			<script src='/assets/js/browser.min.js'></script>
			<script src='/assets/js/breakpoints.min.js'></script>
			<script src='/assets/js/util.js'></script>
			<script src='/assets/js/main.js'></script>
    </div>
  )
}

export default Layout
