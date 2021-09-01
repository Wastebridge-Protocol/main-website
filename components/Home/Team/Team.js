import styles from './Team.module.scss'

const Team = () => {
  const loadURL = (url) => window.open(url) 

  return (
    <div className={styles.team}>
      <div className={styles.bg}></div>
      <p className={styles.header}>Core Team</p>
      <p className={styles.subHeader}>All the Core Team members behind WasteBridge.</p>
      <div className={styles.member}>
        <div className={styles.img}>
          <img src='/images/profiles/koun.jpg' alt='' />
          <p onClick={() => loadURL('https://www.linkedin.com/in/stavroskoun/')}><i className='fab fa-linkedin-in'></i></p>
        </div>
        <p className={styles.name}>Stavros Kounalakis</p>
        <p className={styles.position}><i className='fad fa-crown'></i> Team Leader</p>
      </div>

      <div className={styles.member}>
        <div className={styles.img}>
          <img src='/images/profiles/apost.jpg' alt='' />
          <p className={styles.git} onClick={() => loadURL('https://github.com/apostgit')}><i className='fab fa-github'></i></p>
        </div>
        <p className={styles.name}>Panagiotis Apostolidis</p>
        <p className={styles.position}><i className='fad fa-phone-laptop'></i> CTO</p>
      </div>

      <div className={styles.member}>
        <div className={styles.img}>
          <img src='/images/profiles/alex.jpg' alt='' />
          <p onClick={() => loadURL('https://www.linkedin.com/in/alex-karidas-1a6b4021a/')}><i className='fab fa-linkedin-in'></i></p>
        </div>
        <p className={styles.name}>Alexander Karidas</p>
        <p className={styles.position}><i className='fad fa-pencil-paintbrush'></i> UI Designer</p>
      </div>
    </div>
  )
}

export default Team
