import styles from '../styles/Footer.module.scss'

const Footer = () => {
  const loadPage = (url, position) => window.open(url, position ? '_self' : '')

  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.logo}>WasteBridge</p>
          <ul>
            <li onClick={() => loadPage('https://twitter.com/wastebridge', false)}><i className='fab fa-twitter'></i></li>
            <li onClick={() => loadPage('https://t.me/wastebridge', false)}><i className='fab fa-telegram-plane'></i></li>
            <li onClick={() => loadPage('https://github.com/wastebridge-protocol', false)}><i className='fab fa-github'></i></li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul>
            <li>Project</li>
            <li onClick={() => loadPage('/whitepaper.pdf', false)}><i className='fad fa-scroll-old'></i> White Paper</li>
            <li onClick={() => loadPage('#roadmap', true)}><i className='fad fa-map-signs'></i> RoadMap</li>
            <li onClick={() => loadPage('#plan', true)}><i className='fad fa-tools'></i> Plan</li>
          </ul>

          <ul>
            <li>Links</li>
            <li onClick={() => loadPage('https://pancakeswap.finance', false)}><i className='fad fa-shopping-cart'></i> Buy $WASTE</li>
            <li onClick={() => loadPage('https://swap.wastebridge.org', false)}><i className='fad fa-exchange-alt'></i> DEX Aggregator</li>
            <li onClick={() => loadPage('https://station.wastebridge.org', false)}><i className='fad fa-gas-pump'></i> Gas Station</li>
          </ul>
        </div>
      </div>

      <p className={styles.copyright}>&copy; WasteBridge Protocol 2021</p>
    </div>
  )
}

export default Footer
