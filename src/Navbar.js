import logo from './images/zuvyLogo_no-bg.png';
import navStyles from './styles/navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className={navStyles.nav}>
            <div className={navStyles.navContent}>
                <div className={navStyles.navMenu}>
                    <img className={navStyles.img} src={logo} alt="Zuvy Logo" />
                    <ul className={navStyles.ul}>
                        <li className={navStyles.li}><a href="#Home">Home</a></li>
                        <li className={navStyles.li}><a href="#How">How It works</a></li>
                        <li className={navStyles.li}><a href="#Features">Features</a></li>
                        <li className={navStyles.li}><a href="#FAQs">FAQs</a></li>
                    </ul>
                </div>
                <div className={navStyles.navLink}>
                    <span>Join the Waitlist</span>
                </div>
            </div>
        </nav>
        
    );
}
 
export default Navbar;