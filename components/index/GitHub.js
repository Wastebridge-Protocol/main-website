import styles from '../../styles/github.module.scss'

const GitHub = () => {
  return (
    <div className={styles.githubTab}>
      <p className={styles.header}>Our Platforms. Open Source.</p>
      <p className={styles.desc}>We support Open Source project. We open source some of our projects to help build a better crypto world for everyone.</p>
    
      <p className={styles.button}><i className='fab fa-github'></i> Github</p>
    </div>
  )
}

export default GitHub
