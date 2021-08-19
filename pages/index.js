import styles from '../styles/Home.module.scss'

export default function Home() {
  const loadPage = (url) => window.open(url)

  return (
    <div className={styles.home}>
      <div className={styles.main}>
        <p className={styles.logo}>WasteBridge Protocol</p>
        <p className={styles.motto}>Empowering waste producing and waste management companies like never before</p>
      
        <div className={styles.buttons}>
          <div className={styles.button} onClick={() => loadPage('https://dxsale.app/app/v2_9/defipresale?saleID=2661&chain=BSC')}>
            <i className='fad fa-shopping-cart'></i>
            Buy $WASTE
          </div>
          
          <div className={styles.button} onClick={() => loadPage('https://swap.wastebridge.org')}>
            <i className='fad fa-exchange-alt'></i>
            Swap dApp
          </div>

          <div className={styles.button} onClick={() => loadPage('https://t.me/wastebridge')}>
            <i className='fab fa-telegram-plane'></i>
            Join Chat
          </div>
        </div>
      </div>

      <div className={styles.project} id='plan'>
        <p className={styles.header}><i className='fad fa-project-diagram'></i> Project</p>

        <div className={styles.card}>
          <div className={styles.title}>
            <p className={styles.title}>Environmental NFTs</p>
            <img src='/svg/canadian-maple-leaf-brands.svg' />
          </div>

          <ul className={styles.description}>
            <li><span>Environmental Organizations & NGOS:</span> Each organization will be able to create a limited series of NFTs.</li>
            <li><span>Target:</span> Funds gathered will then be used towards environmental projects of the organizations. Each NFT will be limited and designed after a specific project.</li>
            <li><span>$WASTE:</span> All NFTs will be publicly available for purchase using $WASTE tokens.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <p className={styles.title}>Waste Exchange</p>
            <img src='/svg/leaf-solid.svg' />
          </div>

          <ul className={styles.description}>
            <li><span>WasteBridge Exchange:</span> The WasteBridge Exchange will enable recycling and refinery companies to take offers from industrial companies, as well as bid on waste material. Each waste management contract will be sold through smart contracts on our exchange, and then minted into a NFT. This ensures the uniqueness of each contract.</li>
            <li><span>$WASTE:</span> Transactions will take place on our exchange using $WASTE tokens.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <p className={styles.title}>Green Projects</p>
            <img src='/svg/pagelines-brands.svg' />
          </div>

          <ul className={styles.description}>
            <li><span>Donations:</span> WasteBridge will be the getaway to fund environmental initiatives of small to large sized environmental organizations, but also eco-friendly social media influencers and other individuals.</li>
            <li><span>$WASTE:</span> These initiatives will bring awareness to our project. Demand for $WASTE tokens will rise, while holders have an actual impact on the creation of a more sustainable world.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.title}>
            <p className={styles.title}>Sustainable Investing</p>
            <img src='/svg/seedling-solid.svg' />
          </div>

          <ul className={styles.description}>
            <li><span>Investing:</span> Future plans involve an investment platform . Holders will be able to invest in green projects, expect capital returns, and undertake the role of business investors. WasteBridge will ensure the validity of each project through a KYC process and other collateral. More details will be provided at a later stage.</li>
            <li><span>$WASTE:</span> All transactions will take place using $WASTE tokens. This way we can ensure that sufficient liquidity will exist and demand will be constantly high.</li>
          </ul>
        </div>
      </div>

      <div className={styles.plan} id='roadmap'>
        <p className={styles.header}><i className='fad fa-tasks'></i> Upcoming Plan</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.month}>September</p>
            <ul>
              <li>Launch DEX Aggregator</li>
              <li>Creation of Liquidity Pairs</li>
              <li>Marketing Campaign</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p className={styles.month}>October</p>
            <ul>
              <li>List on Coingecko and CoinMarketCap</li>
              <li>Official Partnership with NGOs & Environmental Organizations</li>
              <li>Whitelisted & Public Onboarding</li>
              <li>Exchange Listings</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p className={styles.month}>November</p>
            <ul>
              <li>WasteBridge NFTs Platform & WasteBridge Exchange Beta Launch</li>
              <li>Further Exchange Listings</li>
              <li>Donations & Further Partnerships</li>
            </ul>
          </div>
          <div className={styles.card}>
            <p className={styles.month}>2022</p>
            <ul>
              <li>Sustainable Investing Features Launched</li>
              <li>Official WasteBridge Exchange Launch</li>
              <li>WasteBridge DeFi Wallet & Swap</li>
              <li>Further Exchange Listings</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.swapShowcase}>
        <div className={styles.img}>
          <img src='/images/swap.jpg' alt='' />
        </div>

        <div className={styles.right}>
          <p className={styles.header}>Top Notch DEX Aggregator</p>
          <p className={styles.description}>Easy-to-use, high quality DEX Aggregator. Save in fees and find the best available prices.</p>

          <div className={styles.protocols}>
            <p>e.g.</p>
            <img src='https://tokens.1inch.exchange/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png' alt='' />
            <i className='far fa-chevron-right'></i>
            <img src='https://api.1inch.exchange/pancakeswap.png' alt='' />
            <i className='far fa-chevron-right'></i>
            <img src='https://api.1inch.exchange/bakeryswap.png' alt='' />
            <i className='far fa-chevron-right'></i>
            <img src='https://api.1inch.exchange/acryptos.png' alt='' />
            <i className='far fa-chevron-right'></i>
            <img src='https://api.1inch.exchange/jetswap.png' alt='' />
            <i className='far fa-chevron-right'></i>
            <img src='https://tokens.1inch.exchange/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png' alt='' />
          </div>

          <div className={styles.button} onClick={() => loadPage('https://swap.wastebridge.org')}>
            <i className='fad fa-exchange-alt'></i>
            Swap dApp
          </div>
        </div>
      </div>
    </div>
  )
}
