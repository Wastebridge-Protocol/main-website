import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.tab}>
        <div className={styles.brand}>
          <p className={styles.logo}>WasteBridge</p>
          <p className={styles.desc}>Protocol</p>
        </div>
      </div>

      <div className={`${styles.tab} ${styles.links}`}>
        <ul className={styles.links}>
          <li>Site Map</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <ul className={styles.links}>
          <li>Project</li>
          <li><a href='/assets/lightpaper.pdf'>Lightpaper</a></li>
          <li>Road Map</li>
        </ul>
      </div>

      <div className={styles.tab}>
        <ul className={styles.media}>
          <li><i className='fab fa-twitter'></i></li>
          <li><i className='fab fa-github'></i></li>
          <li><i className='fab fa-discord'></i></li>
          <li><i className='fab fa-telegram-plane'></i></li>
          <li><i className='fab fa-medium-m'></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
