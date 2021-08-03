import Card from '../components/index/Card'
import RoadMap from '../components/index/RoadMap'
import GitHub from '../components/index/GitHub'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
   <div className={styles.home}>
     <div className={styles.tab}>
        <p className={styles.welcome}>Welcome to WasteBridge</p>
        <p className={styles.motto}>We empower waste producing and waste management companies like never before.</p>
     </div>

     <div className={styles.cardButtons}>
       <Card 
        title='DEX Aggregator'
        description='A Decentralised Exchange Aggregator built on top of the 1inch API.'
        image=''
        link='https://swap.wastebridge.org'
        soon={false}
        styles={styles} />

      <Card 
        title='Buy $WASTE'
        description='Buy $WASTE tokens on Pancake Swap.'
        image=''
        link=''
        soon={true}
        styles={styles} />

      <Card 
        title='WB Wallet'
        description='Top quality DeFi wallet. Simple to use PWA.'
        image=''
        soon={true}
        link=''
        styles={styles} />

      <Card 
        title='Learn More'
        description='Learn more about WasteBridge and its future.'
        image=''
        link=''
        soon={false}
        styles={styles} />
     </div>

     <RoadMap />

     <GitHub />
  </div>
  )
}
