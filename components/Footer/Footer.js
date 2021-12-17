import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <p className={`text ${styles.text}`}>ИП Соловьёв Денис Владимирович ОГРН 320508100372634</p>
            <Link href='/policy'><a className='link'>Политика конфеденциальности</a></Link>
        </footer>
    )
}

export default Footer;