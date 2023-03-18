import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              NavBar

            </div>
        </div>

          <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                  HERO
              </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                  Stats
                  Business
                  Billing
                  CarDeal
                  Testimonials
                  Clients
                  CTA
                  FOOTER
              </div>
          </div>

    </div>
  )
}

export default App