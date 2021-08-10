import Head from "next/head"

const Banner = () => {
  return (
    <section id='banner'>
      <div className='inner'>
        <div className='logo'><span className='icon fa-gem'></span></div>
        <h2>WasteBridge Protocol</h2>
        <p>Empowering waste producing and waste management companies like never before</p>
        <p className='telegram' onClick={() => window.open('https://t.me/joinchat/yxQIw0366xUyODBk')}>Join Telegram <i className='icon brands fa-telegram-plane'></i></p>
      </div>
    </section>
  )
}

export default Banner
