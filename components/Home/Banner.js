import Head from "next/head"

const Banner = () => {
  return (
    <section id='banner'>
      <div className='inner'>
        {/* <div className='logo'><span className='icon fa-gem'></span></div> */}
        <div className='logo'>
          <img src='/logoWhite.jpg' alt='' />
        </div>
        <h2>WasteBridge Protocol</h2>
        <p>Empowering waste producing and waste management companies like never before</p>
        <div className='buttons'>
          <p className='buy' onClick={() => window.open('https://pancakeswap.finance/')}>Buy $WASTE <i className='icon solid fa-shopping-cart'></i></p>
          <p className='telegram' onClick={() => window.open('https://t.me/wastebridge')}>Join Telegram <i className='icon brands fa-telegram-plane'></i></p>
        </div>
      </div>
    </section>
  )
}

export default Banner
