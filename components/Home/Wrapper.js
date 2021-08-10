const Wrapper = () => {
  return (
    <section id='wrapper'>
      <div id='projects'></div>
      <section id='one' className='wrapper spotlight style1'>
        <div className='inner'>
          <a href='#' className='image'><img src='/assets/images/ecology.png' alt='' /></a>
          <div className='content'>
            <h2 className='major'>Environmental NFTs</h2>
            <ul>
              <li><span>Environmental Organizations & NGOS:</span> Each organization will be able to create a limited series of NFTs. </li>
              <li><span>Target:</span> Funds gathered will then be used towards environmental projects of the organizations. Each NFT will be limited and designed after a specific project.</li>
              <li><span>$WASTE:</span> All NFTs will be publicly available for purchase using $WASTE tokens</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='two' className='wrapper alt spotlight style2'>
        <div className='inner'>
          <a href='#' className='image'><img src='/assets/images/green-energy.png' alt='' /></a>
          <div className='content'>
            <h2 className='major'>Waste Exchange</h2>
            <ul>
              <li><span>WasteBridge Exchange:</span> The WasteBridge Exchange will enable recycling and refinery companies to take offers from industrial companies, as well as bid on waste material. Each waste management contract will be sold through smart contracts on our exchange, and then minted into a NFT. This ensures the uniqueness of each contract.</li>
              <li><span>$WASTE:</span> Transactions will take place on our exchange using $WASTE tokens.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='three' className='wrapper spotlight style3'>
        <div className='inner'>
          <a href='#' className='image'><img src='/assets/images/tote-bag.png' alt='' /></a>
          <div className='content'>
            <h2 className='major'>Green Projects</h2>
            <ul>
              <li><span>Donations:</span> WasteBridge will be the getaway to fund environmental initiatives of small to large sized environmental organizations, but also eco-friendly social media influencers and other individuals.</li>
              <li><span>$WASTE:</span> These initiatives will bring awareness to our project. Demand for $WASTE tokens will rise, while holders have an actual impact on the creation of a more sustainable world.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='two' className='wrapper alt spotlight style2'>
        <div className='inner'>
          <a href='#' className='image'><img src='/assets/images/house.png' alt='' /></a>
          <div className='content'>
            <h2 className='major'>Sustainable Investing</h2>
            <ul>
              <li><span>Investing:</span> Future plans involve an investment platform . Holders will be able to invest in green projects, expect capital returns, and undertake the role of business investors. WasteBridge will ensure the validity of each project through a KYC process and other collateral. More details will be provided at a later stage.</li>
              <li><span>$WASTE:</span> All transactions will take place using $WASTE tokens. This way we can ensure that sufficient liquidity will exist and demand will be constantly high.</li>
            </ul>
          </div>
        </div>
      </section>

      <div id='roadmap'></div>
      <section id='four' className='wrapper alt style1'>
        <div className='inner'>
          <section className='features'>
            <article>
              {/* <a href='#' className='image'><img src='images/pic04.jpg' alt='' /></a> */}
              <h3 className='major'>September</h3>
              <ul>
                <li>Launch DEX Aggregator</li>
                <li>Creation of Liquidity Pairs</li>
                <li>Ownership of Contract Rennounced</li>
                <li>Marketing Campaign</li>
              </ul>
              {/* <a href='#' className='special'>Learn more</a> */}
            </article>
            <article>
              {/* <a href='#' className='image'><img src='images/pic05.jpg' alt='' /></a> */}
              <h3 className='major'>October</h3>
              <ul>
                <li>List on Coingecko and CoinMarketCap</li>
                <li>Official Partnership with NGOs & Environmental Organizations</li>
                <li>Whitelisted & Public Onboarding</li>
                <li>Exchange Listings</li>
              </ul>
              {/* <a href='#' className='special'>Learn more</a> */}
            </article>
            <article>
              {/* <a href='#' className='image'><img src='images/pic06.jpg' alt='' /></a> */}
              <h3 className='major'>November</h3>
              <ul>
                <li>WasteBridge NFTs Platform & WasteBridge Exchange Beta Launch</li>
                <li>Further Exchange Listings</li>
                <li>Donations & Further Partnerships</li>
              </ul>
              {/* <a href='#' className='special'>Learn more</a> */}
            </article>
            <article>
              {/* <a href='#' className='image'><img src='images/pic07.jpg' alt='' /></a> */}
              <h3 className='major'>2022</h3>
              <ul>
                <li>Sustainable Investing Features Launched</li>
                <li>Official WasteBridge Exchange Launch</li>
                <li>WasteBridge DeFi Wallet & Swap</li>
                <li>Further Exchange Listings</li>
              </ul>
              {/* <a href='#' className='special'>Learn more</a> */}
            </article>
          </section>
        </div>
      </section>

    </section>
  )
}

export default Wrapper
