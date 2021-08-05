import styles from '../styles/header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState()

  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.header} style={{backgroundColor: scrollPosition > 10 ? '#212429cc' : 'transparent'}}>
      <div className={styles.left}>
        <p className={styles.logo}>WasteBridge</p>
        <p className={styles.desc}>Protocol</p>
      </div>

      <div className={styles.burger} onClick={() => setBurgerMenu(!burgerMenu)}>
        <i className={burgerMenu ? 'far fa-times' : 'far fa-bars'}></i>
      </div>

      <ul className={styles.desktopMenu}>
        <li><a href='#roadmap'>Road Map</a></li>
        <li><a href='#project'>Project</a></li>
        <li>About</li>
        <li><a href='https://swap.wastebridge.org'>Launch dApp</a></li>
      </ul>

      {burgerMenu && <ul className={styles.mobileMenu}>
        <li onClick={() => setBurgerMenu(false)}><i className='far fa-times'></i></li>
        <li>Learn</li>
        <li>About</li>
        <li><a href='https://swap.wastebridge.org'>Launch dApp</a></li>
      </ul>}
    </div>
  )
}

export default Header
