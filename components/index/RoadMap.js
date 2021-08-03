import styles from '../../styles/roadmap.module.scss'

const RoadMap = () => {
  return (
    <div className={styles.roadmap}>
      <p className={styles.title}>Agenda for the upcoming months.</p>
      <p className={styles.desc}>Our plans for the future of WasteBridge and its products</p>

      <div className={styles.flexContainer}>

        <div className={styles.month}>
          <p className={styles.header}>September</p>
          <ul className={styles.description}>
            <li>Launch DEX Aggregator</li>
            <li>Creation of Liquidity pairs</li>
            <li>Ownership of contract renounched</li>
          </ul>
        </div>

        <div className={styles.month}>
          <p className={styles.header}>October</p>
          <ul className={styles.description}>
            <li>List on Coingecko</li>
            <li>List on CoinMarketCap</li>
            <li>Official partnerships with NGOs and Environmental Organizations</li>
            <li>Whitelisted onboarding</li>
            <li>Public onboarding</li>
            </ul>
        </div>

        <div className={styles.month}>
          <p className={styles.header}>November +</p>
          <ul className={styles.description}>
            <li>WasteBridge NFTs Platform</li>
            <li>Wastebridge Exchange Beta Launch</li>
            <li>Exchange Listings</li>
            <li>Donations</li>
            <li>Official Exchange Platform launch</li>
          </ul>
        </div>

        <div className={styles.month}>
          <p className={styles.header}>Future Plans</p>
          <ul className={styles.description}>
            <li>WasteBridge DeFi Wallet</li>
            <li>WasteBridge DeFi Swap</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RoadMap
