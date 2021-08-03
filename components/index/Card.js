const Card = ({title, description, image, link, soon, styles}) => {
  const redirectToLink = () => window.open(link, '_self')

  return (
    <div className={styles.card} onClick={redirectToLink}>
      {/* <img src={image} alt={image} /> */}
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {soon && <p className={styles.soon}>&bull; Coming Soon &bull;</p>}
    </div>
  )
}

export default Card
