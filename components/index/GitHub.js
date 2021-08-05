import styles from '../../styles/github.module.scss'

const GitHub = () => {
  return (
    <div className={styles.githubTab}>
      <div className={styles.left}>
        <p className={styles.header}>Our Platforms. Open Source.</p>
        <p className={styles.desc}>We support Open Source project. We open source some of our projects to help build a better crypto world for everyone.</p>
    
        <p className={styles.button} onClick={() => window.open('https://github.com/Wastebridge-Protocol')}><i className='fab fa-github'></i> Github</p>
      </div>

      <img src='/assets/illustrations/coding.svg' />
    </div>
  )
}

export default GitHub
