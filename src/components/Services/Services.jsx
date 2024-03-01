import styles from './Services.module.css'
import wallet from '../../assets/images/Cards icon.png'
import coin from '../../assets/images/Coin icon.png'
import purse from '../../assets/images/Purse icon.png'

export default function Services() {
    return (
        <div className={styles.Services}>
            <section>
                <img src={wallet} alt="wallet" />
                <h2>
                    Customizable card
                </h2>
                <p>Custom your own card for your exact incomes and expenses needs.</p>
            </section>
            <section>
                <img src={coin} alt="coin" />
                <h2>
                    No payment fee
                </h2>
                <p>Transfer your payment all over the world with no payment fee.</p>
            </section>
            <section>
                <img src={purse} alt="purse" />
                <h2>
                    All in one place
                </h2>
                <p>The right place to keep your credit and debit cards, boarding passes & more.  </p>
            </section>
        </div>
    )
}