import Head from 'next/head'
import Banner from '../components/Home/Banner'
import Footer from '../components/Home/Footer'
import Wrapper from '../components/Home/Wrapper'

export default function Home() {
  return (
    <div id='page-wrapper'>
     	<Head>
	    	<title>WasteBridge Protocol</title>
		    <meta charSet='utf-8' />
		    <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
		    <link rel='stylesheet' href='/assets/css/main.css' />
		    <noscript><link rel='stylesheet' href='/assets/css/noscript.css' /></noscript>
	    </Head> 

      <header id='header' className='alt'>
				<h1><a href='/'>WasteBridge Protocol</a></h1>
				<nav>
					<a href='#menu'>Menu</a>
				</nav>
			</header>

      <nav id='menu'>
				<div className='inner'>
					<h2>Menu</h2>
					<ul className='links'>
						<li><a href='/'>Home</a></li>
						<li><a href='#projects'>Projects</a></li>
						<li><a href='#roadmap'>RoadMap</a></li>
						<li><a href='https://swap.wastebridge.org'>Launch dApp</a></li>
					</ul>
					<a href='' className='close'>Close</a>
				</div>
			</nav>

      <Banner />
      <Wrapper />
      <Footer />
    </div>
  )
}
