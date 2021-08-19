import { useState } from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className={styles.header}>
      <img src='/logo.png' alt='logo' />
      <div className={styles.logoText}>
        <p className={styles.logo}>WasteBridge</p>
        <p className={styles.motto}>Protocol</p>
      </div>

      <i className={`fas fa-bars ${styles.menuBurger}`} onClick={() => setMobileMenu(!mobileMenu)}></i>

      <ul className={styles.desktopMenu}>
        <li><a href='#project'>Project</a></li>
        <li><a href='#roadmap'>RoadMap</a></li>
        <li><a href='/whitepaper.pdf'>White Paper</a></li>
        <li><a href='https://swap.wastebridge.org'><i className='fad fa-exchange-alt'></i> Swap dApp</a></li>
      </ul>

      {mobileMenu && 
        <ul className={styles.mobileMenu}>
          <li><a href='#project'>Project</a></li>
          <li><a href='#roadmap'>RoadMap</a></li>
          <li><a href='/lightpaper.pdf'>Light Paper</a></li>
          <li><a href='https://swap.wastebridge.org'><i className='fad fa-exchange-alt'></i> Swap dApp</a></li>
        </ul>
      }
    </div>
  )
}

export default Header
