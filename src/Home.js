import styles from './styles/home.module.css'
import phone1 from './images/phone1.png';
import phone2 from './images/phone2.png';
import dollar1 from './images/dollar1.png';
import dollar2 from './images/dollar2.png';
import dollar3 from './images/dollar3.png';
import WaitlistButton from './Waitlist';
import swirl1 from './images/swirl1.png';
import swirl2 from './images/swirl2.png';
import swirl3 from './images/swirl3.png';
import swirl4 from './images/swirl4.png';
import swirl5 from './images/swirl5.png';
import saly from './images/Saly-10.png';
import screen1 from './images/phone_screen1.png';
import screen2 from './images/phone_screen2.png';
import screen3 from './images/phone_screen3.png';


const Home = () => {
    return (
        <main className={styles.main}>
            {/* Section 1 */}
            <section className={styles.section}>
                <div className={styles.landing}>
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionText}>
                            <h1>Get Paid <span className={styles.orange}>On time</span><br/>everytime</h1>
                            <p>Dreaming of a world where all customers pay up on time? <br/>Dream no more with Zuvy</p>
                            <WaitlistButton />
                        </div>
                        <div className={styles.sectionImage}>
                            <div className={styles.phone}>
                                <img className={styles.iPhone1} src={phone1} alt="iPhone" /> 
                                <img className={styles.iPhone2} src={phone2} alt="iPhone" />
                            </div>
                            <div className={styles.coins}>
                                <img className={styles.dollarCoin1} src={dollar1} alt="dollar-coin" />
                                <img className={styles.dollarCoin2} src={dollar2} alt="dollar-coin" />
                                <img className={styles.dollarCoin3} src={dollar3} alt="dollar-coin" />
                            </div>
                        </div> 
                    </div>
                </div>
                <div className={styles.backToTop}>
                    <p>🠕</p>
                </div>
            </section>

            {/* // Section 2 */}
            <section className={styles.section2}>
                <div className={styles.container2}>
                    <div className={styles.swirls}>
                        <img className={styles.swirl1} src={swirl1} alt="Swirl Shape" />
                        <img className={styles.swirl2} src={swirl2} alt="Swirl Shape" />
                        <img className={styles.swirl3} src={swirl3} alt="Swirl Shape" />
                        <img className={styles.swirl4} src={swirl4} alt="Swirl Shape" />
                        <img className={styles.swirl5} src={swirl5} alt="Swirl Shape" />
                    </div>
                    <div className={styles.content}>
                        <img className={styles.saly} src={saly} alt="Saly" />
                        <div className={styles.text}>
                            <h2 className={styles.h2}>We are Shortening the
                                <br/> gap between invoice
                                <br/> generation and payouts
                            </h2>
                            <p className={styles.p}>
                                We provide immediate payouts for your unpaid invoices
                                <br/>Stop waiting weeks to get paid. Create and send your
                                <br/>invoices through Zuvy and get cash upfront today
                            </p>
                            <WaitlistButton />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section3 */}
            <section className={styles.section3}>
        {/* All Content */}
            <div className={styles.container3}>
                {/* Heading */}
                <h2 className={styles.h2}>How it Works</h2>
                {/* Text and Image Content */}
                <div className={styles.content}>
                    {/* Circles and Lines */}
                    <div className={styles.linewrap}>
                        <div className={styles.lircle}>
                            <div className={styles.circle}>1</div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.lircle}>
                            <div className={styles.circle}>2</div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.lircle}>
                            <div className={styles.circle}>3</div>
                            <div className={styles.line3}></div>
                        </div>
                    </div>
                    {/* Text Content */}
                    <div className={styles.captions}>
                        {/* Text 1 */}
                        <div className={styles.captionContainer}>
                            {/* <div className={styles.circle}>1</div> */}
                            <div className={styles.caption}>
                                <div className={`${styles.text} ${styles.text1}`}>
                                    <h3 className={styles.h3}>Create & Send Your Invoice</h3>
                                    <p className={styles.p}>Use Zuvy to create and send invoices to<br /> your customers</p>
                                </div>
                            </div>
                        </div>
                        {/* Text 2 */}
                        <div className={styles.captionContainer}>
                            {/* <div className={styles.circle}>2</div> */}
                            <div className={styles.caption}>
                                <div className={`${styles.text} ${styles.text2}`}>
                                    <h3 className={styles.h3}>Request Instant Payout</h3>
                                    <p className={styles.p}>Select an invoice and request an<br /> immediate payout. We will loan you the<br /> money upfornt for up to 4 weeks</p>
                                </div>
                            </div>
                        </div>
                        {/* Text 3 */}
                        <div className={styles.captionContainer}>
                            {/* <div className={styles.circle}>3</div> */}
                            <div className={styles.caption}>
                                <div className={`${styles.text} ${styles.text3}`}>
                                    <h3 className={styles.h3}>Manage Your Business</h3>
                                    <p className={styles.p}>Use our web and mobile app to manage<br /> your invoices, customers and payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Images */}
                    <div className={styles.images}>
                        <img className={`${styles.img} ${styles.phone1}`} src={screen1} alt="Phone Screen" />
                        <img className={`${styles.img} ${styles.phone2}`} src={screen2} alt="Phone Screen" />
                        <img className={`${styles.img} ${styles.phone3}`} src={screen3} alt="Phone Screen" />
                    </div>
                </div>
            </div>
        </section>
        </main> 
        
    );
}
 
export default Home;